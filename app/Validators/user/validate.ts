import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

export class ValidateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    access_token: schema.string(),
  });

  public messages: CustomMessages = {};
}
