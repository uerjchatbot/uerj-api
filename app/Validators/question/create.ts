import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CustomMessages, schema } from "@ioc:Adonis/Core/Validator";

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    node_chatbot_id: schema.number(),
    question: schema.string.optional(),
    title: schema.string.optional(),
    response: schema.boolean(),
  });

  public messages: CustomMessages = {};
}
