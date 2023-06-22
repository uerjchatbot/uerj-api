import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public static environment = ["dev", "staging", "test"];

  public async run() {
    // await UserFactory.createMany(3);
    await User.createMany([
      {
        email: "ppgedu.ffp@gmail.com",
        password: "admin@chatbot",
        name: "ppgedu",
      },
      {
        email: "jhollyfer.fr@gmail.com",
        password: "developer",
        name: "Jhollyfer Developer",
      },
      {
        email: "Jhollyfer.rodrigues@clicksoft.com.br",
        password: "developer",
        name: "Jhollyfer Developer",
      },
    ]);
  }
}
