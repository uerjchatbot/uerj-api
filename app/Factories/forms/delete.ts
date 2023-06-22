import { LucidFormRepository } from "App/Repositories/lucid/form-repository";
import { DeleteUseCase } from "App/UseCases/Form/delete";

export function DeleteFactory(): DeleteUseCase {
  const formRepository = new LucidFormRepository();
  const useCase = new DeleteUseCase(formRepository);

  return useCase;
}
