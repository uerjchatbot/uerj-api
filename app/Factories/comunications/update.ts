import { LucidComunicationRepository } from "App/Repositories/lucid/comunication-repository";
import { UpdateUseCase } from "App/UseCases/Comunication/update";

export function UpdateFactory(): UpdateUseCase {
  const comunicationRepository = new LucidComunicationRepository();
  const useCase = new UpdateUseCase(comunicationRepository);

  return useCase;
}
