import Mail from "@ioc:Adonis/Addons/Mail";
import Env from "@ioc:Adonis/Core/Env";
import { Comunication } from "App/Dtos/Comunication";
import { FormTemplateCollection } from "App/Dtos/Email";
import { Form } from "App/Dtos/Form";

type Content = Form | Comunication;

export async function sendEmailToAcceptEmailForm<T extends Content>(
  data: FormTemplateCollection[],
  entity: T
) {
  const sendTo = data?.flatMap((item) => item.email).join(",");

  const formContent = `
  Olá, aqui está o link para formulário <strong>${
    (entity as Form).title
  }.</strong><br/>
    ${(entity as Form)?.form_url}`;

  const comunicationContent = `${(entity as Comunication).text}`;
  const formSubject = `Formulário: ${(entity as Form).title}`;
  const comunicationSubject = `Comunicação: ${(entity as Comunication).title}`;
  const content = "form_url" in entity ? formContent : comunicationContent;
  const subject = "form_url" in entity ? formSubject : comunicationSubject;

  await Mail.use("gmail").send((message) => {
    message
      .from(Env.get("SMTP_USERNAME"))
      .envelope({
        to: sendTo,
      })
      .subject(subject)
      .html(content);
  });
}
