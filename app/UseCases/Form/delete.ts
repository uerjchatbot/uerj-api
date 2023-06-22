import { FormRepository } from "App/Repositories/form-repository";

export class DeleteUseCase {
  constructor(private formRepository: FormRepository) {}

  async execute(id: string): Promise<void> {
    const form = await this.formRepository.findBy("id", String(id));

    if (!form) throw new Error("Form not found");

    await this.formRepository.delete(form.id);
  }
}
