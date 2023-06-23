import { LucidComunicationRepository } from "App/Repositories/lucid/comunication-repository";
import { ListUseCase } from "App/UseCases/Comunication/list";

export function ListFactory(): ListUseCase {
  const comunicationRepository = new LucidComunicationRepository();
  const useCase = new ListUseCase(comunicationRepository);

  return useCase;
}
