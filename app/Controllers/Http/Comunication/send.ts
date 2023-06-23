import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Send } from "App/Dtos/Form";
import { Params } from "App/Dtos/Query";
import { SendFactory } from "App/Factories/comunications/send";
import { SendValidator } from "App/Validators/comunications/send";

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
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
