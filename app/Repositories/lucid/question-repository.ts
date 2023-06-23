import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import { Create, Question, Update } from "App/Dtos/Question";
import Model from "App/Models/Question";
import { QuestionRepository } from "../question-repository";

export class LucidQuestionRepository implements QuestionRepository {
  public async list(query: Query): Promise<List<Question>> {
    const fetchQuestions = await Model.query()
      .if(query.search, (build) =>
        build.where("title", "ilike", `%${query.search}%`)
      )
      .orderBy("name", query.order)
      .paginate(Number(query.page), Number(query.limit));
    const questions = fetchQuestions?.toJSON();
    return questions as List<Question>;
  }

  public async create(data: Create): Promise<Question> {
    const createdQuestion = await Model.create(data);
    const question = createdQuestion?.toJSON();
    return question as Question;
  }

  public async update(data: Update): Promise<Question> {
    const fetchQuestion = await Model.findOrFail(data.id);
    const updatedQuestion = await fetchQuestion.merge(data).save();
    const question = updatedQuestion?.toJSON();
    return question as Question;
  }

  public async delete(id: string): Promise<void> {
    const fetchQuestion = await Model.findOrFail(id);
    await fetchQuestion.delete();
  }

  public async findBy<T extends keyof Question>(
    key: T,
    value: Exclude<Question[T], null>
  ): Promise<Question | null> {
    const fetchQuestion = await Model.findBy(key, value);
    const question = fetchQuestion?.toJSON() as Question;
    return question ?? null;
  }

  public async findMany<T extends keyof Question>(
    key: T,
    value: Exclude<Question[T], null>
  ): Promise<Question[]> {
    const fetchQuestions = await Model.query()
      .where(key, value)
      .orderBy("chatbot_id", "asc");
    const questions = fetchQuestions.map((question) => question.toJSON());
    return questions as Question[];
  }
}
