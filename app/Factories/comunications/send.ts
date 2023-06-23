import { LucidComunicationRepository } from "App/Repositories/lucid/comunication-repository";
import { SendUseCase } from "App/UseCases/Comunication/send";

export function SendFactory(): SendUseCase {
  const comunicationRepository = new LucidComunicationRepository();
  const useCase = new SendUseCase(comunicationRepository);

  return useCase;
}
