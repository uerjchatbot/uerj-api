import { LucidComunicationRepository } from "App/Repositories/lucid/comunication-repository";
import { DeleteUseCase } from "App/UseCases/Comunication/delete";

export function DeleteFactory(): DeleteUseCase {
  const comunicationRepository = new LucidComunicationRepository();
  const useCase = new DeleteUseCase(comunicationRepository);

  return useCase;
}
