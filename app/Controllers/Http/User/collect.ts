import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { CollectFactory } from "App/Factories/user/collect";

export async function collect({
  response,
}: HttpContextContract): Promise<void> {
  try {
    const collectUseCase = CollectFactory();

    const list = await collectUseCase.execute();

    return response.ok(list);
  } catch (error) {
    console.log(error);
    return response.conflict(error);
  }
}
