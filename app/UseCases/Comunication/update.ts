import { Comunication } from "App/Dtos/Comunication";
import { Update } from "App/Dtos/Form";
import { ComunicationRepository } from "App/Repositories/comunication-repository";

export class UpdateUseCase {
  constructor(private comunicationRepository: ComunicationRepository) {}

  async execute(data: Update): Promise<Comunication> {
    const comunication = await this.comunicationRepository?.findBy(
      "id",
      String(data.id)
    );

    if (!comunication) throw new Error("Question not found");

    return await this.comunicationRepository.update(data);
  }
}
