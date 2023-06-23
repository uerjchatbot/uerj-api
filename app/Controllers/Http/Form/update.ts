import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Update } from "App/Dtos/Form";
import { Params } from "App/Dtos/Query";
import { UpdateFactory } from "App/Factories/forms/update";
import { UpdateValidator } from "App/Validators/forms/update";

export async function update({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id }: Partial<Params> = request.params();

    const update: Update = await request.validate(UpdateValidator);

    const updateUseCase = UpdateFactory();

    const form = await updateUseCase.execute({
      id,
      ...update,
    });

    return response.ok(form);
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
