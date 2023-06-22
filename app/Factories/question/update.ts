import { LucidQuestionRepository } from "App/Repositories/lucid/question-repository";
import { UpdateUseCase } from "App/UseCases/Question/update";

export function UpdateFactory(): UpdateUseCase {
  const userRepository = new LucidQuestionRepository();
  const useCase = new UpdateUseCase(userRepository);

  return useCase;
}
