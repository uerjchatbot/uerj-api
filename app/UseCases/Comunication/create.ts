import { Comunication, Create } from "App/Dtos/Comunication";
import { ComunicationRepository } from "App/Repositories/comunication-repository";

export class CreateUseCase {
  constructor(private comunicationRepository: ComunicationRepository) {}

  async execute(data: Create): Promise<Comunication> {
    return await this.comunicationRepository.create(data);
  }
}
