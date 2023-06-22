import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Params } from "App/Dtos/Form";
import { DeleteFactory } from "App/Factories/forms/delete";

export async function remove({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id }: Partial<Params> = request.params();

    const deleteUseCase = DeleteFactory();

    const form = await deleteUseCase.execute(String(id));

    return response.ok(form);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
