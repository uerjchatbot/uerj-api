import { Form, FormBuild } from "App/Dtos/Form";
import { FormRepository } from "App/Repositories/form-repository";
import { FormHeader } from "App/Utils/form-header";
import { formQuestionsBuilder } from "App/Utils/form-questions-builder";
import { FormAPI } from "App/Utils/google";

export class BuildUseCase {
  constructor(private formRepository: FormRepository) {}

  async execute(data: FormBuild): Promise<Form> {
    const { data: created } = await FormAPI.create({
      requestBody: {
        info: {
          title: data.title,
          documentTitle: data.title,
        },
      },
    });

    await FormAPI.batchUpdate({
      formId: created?.formId as string,
      requestBody: {
        requests: [...FormHeader, ...formQuestionsBuilder(data.questions)].map(
          ({ createItem }, index) => ({
            createItem: { item: createItem?.item, location: { index } },
          })
        ),
      },
    });

    return await this.formRepository.create({
      form_id: created.formId as string,
      form_url: created.responderUri as string,
      title: data.title,
    });
  }
}
