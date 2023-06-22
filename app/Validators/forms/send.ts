import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

export class SendValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    degree: schema.enum(["master", "doctor"] as const),
  });

  public messages: CustomMessages = {};
}
