import { Params, QuestionWithNodes } from "App/Dtos/Question";
import { QuestionRepository } from "App/Repositories/question-repository";
import { convertWhatsappTextToHtml } from "App/Utils/formatter";

export class FetchUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({ chatbot_id }: Partial<Params>): Promise<QuestionWithNodes> {
    const question = await this.questionRepository.findBy(
      "chatbot_id",
      Number(chatbot_id)
    );

    if (!question) throw new Error("Question not found");

    const childrens = await this.questionRepository.findMany(
      "node_chatbot_id",
      Number(chatbot_id)
    );

    const { title, question: content, ...rest } = question;

    const formattedChildrens = childrens.map(
      ({ title, question, ...rest }) => ({
        title: (title && convertWhatsappTextToHtml(title)) ?? "",
        question: (question && convertWhatsappTextToHtml(question)) ?? "",
        ...rest,
      })
    );

    return {
      title: (title && convertWhatsappTextToHtml(title)) ?? "",
      question: (content && convertWhatsappTextToHtml(content)) ?? "",
      ...rest,
      childrens: formattedChildrens,
    };
  }
}
