import { Degree } from "App/Dtos/Degree";
import { FormRepository } from "App/Repositories/form-repository";
import { getTemplateFormData } from "App/Utils/get-template-form-data";
import { sendEmailToAcceptEmailForm } from "App/Utils/send-email";

const Degree = {
  master: "Mestrado",
  doctor: "Doutorado",
};

export class SendUseCase {
  constructor(private formRepository: FormRepository) {}

  async execute(data: Degree): Promise<void> {
    const form = await this.formRepository.findBy("id", String(data.id));

    if (!form) throw new Error("Form not found");

    const extracts = (await getTemplateFormData()).filter((item) =>
      item.accept_email && data.degree === "union"
        ? item.degree.includes(Degree["master"]) ||
          item.degree.includes(Degree["doctor"])
        : item.degree.includes(Degree[data.degree])
    );

    if (extracts.length === 0) {
      throw new Error("Form Template not found");
    }

    await sendEmailToAcceptEmailForm(extracts, form);
  }
}
