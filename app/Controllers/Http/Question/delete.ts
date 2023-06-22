import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Params } from "App/Dtos/Question";
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
    console.log(error);
    return response.conflict(error);
  }
}
