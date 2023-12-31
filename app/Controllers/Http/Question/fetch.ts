import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Params } from "App/Dtos/Query";
import { FetchFactory } from "App/Factories/question/fetch";

export async function fetch({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { chatbot_id }: Partial<Params> = request.params();

    const fetchUseCase = FetchFactory();

    const question = await fetchUseCase.execute({
      chatbot_id,
    });

    return response.ok(question);
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
