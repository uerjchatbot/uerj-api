import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Update } from "App/Dtos/Comunication";
import { Params } from "App/Dtos/Query";
import { UpdateFactory } from "App/Factories/comunications/update";
import { UpdateValidator } from "App/Validators/comunications/update";

export async function update({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id }: Partial<Params> = request.params();

    const update: Update = await request.validate(UpdateValidator);

    const updateUseCase = UpdateFactory();

    const comunication = await updateUseCase.execute({
      id,
      ...update,
    });

    return response.ok(comunication);
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
