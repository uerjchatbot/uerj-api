import { LucidComunicationRepository } from "App/Repositories/lucid/comunication-repository";
import { CreateUseCase } from "App/UseCases/Comunication/create";


export function CreateFactory(): CreateUseCase {
  const comunicationRepository = new LucidComunicationRepository();
  const useCase = new CreateUseCase(comunicationRepository);

  return useCase;
}
