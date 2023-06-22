import { Create, Form } from "App/Dtos/Form";
import { FormRepository } from "App/Repositories/form-repository";

export class CreateUseCase {
  constructor(private formRepository: FormRepository) {}

  async execute(data: Create): Promise<Form> {
    const existFormId = await this.formRepository.findBy(
      "form_id",
      data.form_id
    );

    const existFormUrl = await this.formRepository.findBy(
      "form_url",
      data.form_url
    );

    if (existFormId || existFormUrl) throw new Error("Form already exists");

    return await this.formRepository.create(data);
  }
}
