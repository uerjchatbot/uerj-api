import { LucidFormRepository } from "App/Repositories/lucid/form-repository";
import { BuildUseCase } from "App/UseCases/Form/build";

export function BuildFactory(): BuildUseCase {
  const formRepository = new LucidFormRepository();
  const useCase = new BuildUseCase(formRepository);

  return useCase;
}
