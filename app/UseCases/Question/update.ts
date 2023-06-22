import { Question, Update } from "App/Dtos/Question";
import { QuestionRepository } from "App/Repositories/question-repository";
import {
  convertHtmlToWhatsappText,
  convertWhatsappTextToHtml,
} from "App/Utils/formatter";

export class UpdateUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(data: Update): Promise<Question> {
    const question = await this.questionRepository.findBy(
      "id",
      String(data.id)
    );

    if (!question) throw new Error("Question not found");

    const formatted: Update = {
      question: convertHtmlToWhatsappText(String(data.question)),
      title: convertHtmlToWhatsappText(String(data.title)),
    };

    const {
      title,
      question: content,
      ...rest
    } = await this.questionRepository.update({
      id: data.id,
      ...formatted,
    });

    return {
      title: (title && convertWhatsappTextToHtml(title)) ?? "",
      question: (content && convertWhatsappTextToHtml(content)) ?? "",
      ...rest,
    };
  }
}
