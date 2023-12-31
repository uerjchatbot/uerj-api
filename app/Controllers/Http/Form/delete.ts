import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Params } from "App/Dtos/Query";
import { DeleteFactory } from "App/Factories/forms/delete";

export async function remove({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id }: Partial<Params> = request.params();

    const deleteUseCase = DeleteFactory();

    await deleteUseCase.execute(String(id));

    return response.ok({ message: "deleted" });
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
