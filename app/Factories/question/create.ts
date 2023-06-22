import { LucidQuestionRepository } from "App/Repositories/lucid/question-repository";
import { CreateUseCase } from "App/UseCases/Question/create";

export function CreateFactory(): CreateUseCase {
  const userRepository = new LucidQuestionRepository();
  const useCase = new CreateUseCase(userRepository);

  return useCase;
}
