import { LucidFormRepository } from "App/Repositories/lucid/form-repository";
import { CreateUseCase } from "App/UseCases/Form/create";

export function CreateFactory(): CreateUseCase {
  const formRepository = new LucidFormRepository();
  const useCase = new CreateUseCase(formRepository);

  return useCase;
}
