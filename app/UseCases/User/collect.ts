import { FormTemplateCollection } from "App/Dtos/Email";
import { getTemplateFormData } from "App/Utils/get-template-form-data";

export class CollectUseCase {
  // constructor(private userRepository: UserRepository) {}

  async execute(): Promise<FormTemplateCollection[]> {
    const data = await getTemplateFormData();

    return data;
  }
}
