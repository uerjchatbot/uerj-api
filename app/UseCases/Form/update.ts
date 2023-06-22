import { Form, Update } from "App/Dtos/Form";
import { FormRepository } from "App/Repositories/form-repository";

export class UpdateUseCase {
  constructor(private formRepository: FormRepository) {}

  async execute(data: Update): Promise<Form> {
    const form = await this.formRepository.findBy("id", String(data.id));

    if (!form) throw new Error("Question not found");

    return await this.formRepository.update(data);
  }
}
