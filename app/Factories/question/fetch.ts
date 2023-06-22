import { LucidQuestionRepository } from "App/Repositories/lucid/question-repository";
import { FetchUseCase } from "App/UseCases/Question/fetch";

export function FetchFactory(): FetchUseCase {
  const userRepository = new LucidQuestionRepository();
  const useCase = new FetchUseCase(userRepository);

  return useCase;
}
