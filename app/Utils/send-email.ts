import Mail from "@ioc:Adonis/Addons/Mail";
import Env from "@ioc:Adonis/Core/Env";
import { FormTemplateCollection } from "App/Dtos/Email";
import { Form } from "App/Dtos/Form";

export async function sendEmailToAcceptEmailForm(
  data: FormTemplateCollection[],
  form: Form
) {
  const sendTo = data?.flatMap((item) => item.email).join(",");

  await Mail.use("gmail").send((message) => {
    message
      .from(Env.get("SMTP_USERNAME"))
      .envelope({
        to: sendTo,
      })
      .subject(`Formulário ${form.title}`)
      .html(
        `
      Olá, aqui está o link para formulário <strong>${form.title}.</strong>
      <br/>
      ${form.form_url}
      `
      );
  });
}
