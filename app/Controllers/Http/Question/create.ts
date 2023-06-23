import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Create } from "App/Dtos/Question";
import { CreateFactory } from "App/Factories/question/create";
import { CreateValidator } from "App/Validators/question/create";

export async function create({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const create: Create = await request.validate(CreateValidator);

    const createUseCase = CreateFactory();

    const question = await createUseCase.execute(create);

    return response.ok(question);
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
