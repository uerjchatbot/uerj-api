import { Create, Question } from "App/Dtos/Question";
import { QuestionRepository } from "App/Repositories/question-repository";
import {
  convertHtmlToWhatsappText,
  convertWhatsappTextToHtml,
} from "App/Utils/formatter";

export class CreateUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(data: Create): Promise<Question> {
    const { title, question, ...rest } = await this.questionRepository.create({
      question:
        (data.question && convertHtmlToWhatsappText(String(data.question))) ??
        null,
      title:
        (data.title && convertHtmlToWhatsappText(String(data.title))) ?? null,
      response: Boolean(data.response),
      node_chatbot_id: Number(data.node_chatbot_id),
    });

    return {
      title: (title && convertWhatsappTextToHtml(String(title))) ?? "",
      question: (question && convertWhatsappTextToHtml(String(question))) ?? "",
      ...rest,
    };
  }
}
