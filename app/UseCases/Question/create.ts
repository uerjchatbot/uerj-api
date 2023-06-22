import { Create, Question } from "App/Dtos/Question";
import { QuestionRepository } from "App/Repositories/question-repository";
import { convertWhatsappTextToHtml } from "App/Utils/formatter";

export class CreateUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(data: Create): Promise<Question> {
    const { title, question, ...rest } = await this.questionRepository.create(
      data
    );

    return {
      title: (title && convertWhatsappTextToHtml(String(title))) ?? "",
      question: (question && convertWhatsappTextToHtml(String(question))) ?? "",
      ...rest,
    };
  }
}
