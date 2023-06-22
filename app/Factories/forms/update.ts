import { LucidFormRepository } from "App/Repositories/lucid/form-repository";
import { UpdateUseCase } from "App/UseCases/Form/update";

export function UpdateFactory(): UpdateUseCase {
  const formRepository = new LucidFormRepository();
  const useCase = new UpdateUseCase(formRepository);

  return useCase;
}
