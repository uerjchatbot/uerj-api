import { LucidQuestionRepository } from "App/Repositories/lucid/question-repository";
import { DeleteUseCase } from "App/UseCases/Question/delete";

export function DeleteFactory(): DeleteUseCase {
  const userRepository = new LucidQuestionRepository();
  const useCase = new DeleteUseCase(userRepository);

  return useCase;
}
