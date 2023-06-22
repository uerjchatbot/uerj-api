import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Params, Update } from "App/Dtos/Question";
import { UpdateFactory } from "App/Factories/question/update";
import { UpdateValidator } from "App/Validators/question/update";

export async function update({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const { id }: Partial<Params> = request.params();

    const update: Update = await request.validate(UpdateValidator);

    const updateUseCase = UpdateFactory();

    const question = await updateUseCase.execute({
      id,
      ...update,
    });

    return response.ok(question);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
