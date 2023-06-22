import Env from "@ioc:Adonis/Core/Env";
import { FormTemplateCollection } from "App/Dtos/Email";
import { Form } from "App/Dtos/Form";
import Model from "App/Models/Form";
import { FormAPI, SheetAPI } from "./google";

export async function getTemplateFormData(): Promise<FormTemplateCollection[]> {
  const template = (
    await Model.query().where("form_id", Env.get("FORM_DEFAULT_ID")).first()
  )?.toJSON() as Form;

  const {
    data: { linkedSheetId },
  } = await FormAPI.get({
    formId: template?.form_id,
  });

  const {
    data: { values },
  } = await SheetAPI.values.get({
    spreadsheetId: linkedSheetId as string,
    range: "coleta!A2:P103",
  });

  return values?.map((item) => {
    return {
      name: item
        .filter((value) => {
          const isDegree = /(Mestrado|Doutorado)/gi.test(value);

          if (isDegree) return false;

          return /^[A-Za-z\s]+$/.test(value);
        })
        .join(),
      email: item
        .filter((value) =>
          /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(value)
        )
        .join(),
      degree: item
        .filter((value) => /\b(Mestrado|Doutorado)\b/.test(value))
        .join(),
      accept_email: item.some((value) => /Aceito receber/i.test(value)),
    };
  }) as FormTemplateCollection[];
}
