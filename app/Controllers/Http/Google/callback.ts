import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export async function callback({
  ally,
  response,
  auth,
}: HttpContextContract): Promise<void> {
  const {
    email,
    token: { token: accessToken, refreshToken },
  } = await ally.use("google").user();

  const user = (await User!.findBy("email", email)) as User;

  const { token: apiToken } = await auth.use("api").generate(user, {
    expiresIn: "7 days",
  });

  return response.send({ apiToken, accessToken, refreshToken });
}
