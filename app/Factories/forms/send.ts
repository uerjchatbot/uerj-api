import { LucidFormRepository } from "App/Repositories/lucid/form-repository";
import { SendUseCase } from "App/UseCases/Form/send";

export function SendFactory(): SendUseCase {
  const formRepository = new LucidFormRepository();
  const useCase = new SendUseCase(formRepository);

  return useCase;
}
