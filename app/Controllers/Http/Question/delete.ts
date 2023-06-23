import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Params } from "App/Dtos/Query";
import { DeleteFactory } from "App/Factories/question/delete";

export async function remove({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id }: Partial<Params> = request.params();

    const deleteUseCase = DeleteFactory();

    const question = await deleteUseCase.execute(String(id));

    return response.ok(question);
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
