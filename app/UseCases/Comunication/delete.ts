import { ComunicationRepository } from "App/Repositories/comunication-repository";

export class DeleteUseCase {
  constructor(private comunicationRepository: ComunicationRepository) {}

  async execute(id: string): Promise<void> {
    const comunication = await this.comunicationRepository.findBy(
      "id",
      String(id)
    );

    if (!comunication) throw new Error("Form not found");

    await this.comunicationRepository.delete(comunication.id);
  }
}
