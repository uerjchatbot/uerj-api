import { LucidFormRepository } from "App/Repositories/lucid/form-repository";
import { ListUseCase } from "App/UseCases/Form/list";

export function ListFactory(): ListUseCase {
  const formRepository = new LucidFormRepository();
  const useCase = new ListUseCase(formRepository);

  return useCase;
}
