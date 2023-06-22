import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Create } from "App/Dtos/Form";
import { CreateFactory } from "App/Factories/forms/create";
import { CreateValidator } from "App/Validators/forms/create";

export async function create({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const create: Create = await request.validate(CreateValidator);

    const createUseCase = CreateFactory();

    const form = await createUseCase.execute(create);

    return response.ok(form);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
