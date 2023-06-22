import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Params, Send } from "App/Dtos/Form";
import { SendFactory } from "App/Factories/forms/send";
import { SendValidator } from "App/Validators/forms/send";

export async function send({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id }: Partial<Params> = request.params();

    const send: Send = await request.validate(SendValidator);

    const sendUseCase = SendFactory();

    await sendUseCase.execute({
      id: String(id),
      degree: send.degree,
    });

    return response.ok({ message: "Email successfully sent" });
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
