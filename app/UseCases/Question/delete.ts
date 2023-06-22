import { QuestionRepository } from "App/Repositories/question-repository";

export class DeleteUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(id: string): Promise<void> {
    const question = await this.questionRepository.findBy("id", String(id));

    if (!question) throw new Error("Question not found");

    await this.questionRepository.delete(question.id);
  }
}
