import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    question: schema.string.optional(),
    title: schema.string.optional(),
  });

  public messages: CustomMessages = {};
}
