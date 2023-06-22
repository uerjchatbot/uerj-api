import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export async function redirect({ ally }: HttpContextContract): Promise<void> {
  return ally.use("google").redirect();
}
