import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { FormBuild } from "App/Dtos/Form";
import { BuildFactory } from "App/Factories/forms/build";

export async function build({
  request,
  response,
}: HttpContextContract): Promise<void> {
  try {
    const build: FormBuild = request.body() as FormBuild;

    const buildUseCase = BuildFactory();

    const form = await buildUseCase.execute(build);

    return response.ok(form);
  } catch (error) {
    if (error instanceof Error) {
      return response.badRequest({ message: error.message });
    }
    console.log(error);
    return response.conflict(error);
  }
}
