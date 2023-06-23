import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Create } from "App/Dtos/Comunication";
import { CreateFactory } from "App/Factories/comunications/create";
import { CreateValidator } from "App/Validators/comunications/create";

export async function create({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const create: Create = await request.validate(CreateValidator);

    const createUseCase = CreateFactory();

    const comunication = await createUseCase.execute(create);

    return response.ok(comunication);
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
