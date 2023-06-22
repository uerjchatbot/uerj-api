import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Form from "App/Models/Form";
import Question from "App/Models/Question";
import User from "App/Models/User";

export default class extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run();
  }

  public async run() {
    const users = await User.query();
    const questions = await Question.query();
    const forms = await Form.query();

    if (users.length === 0) {
      await this.runSeeder(await import("../User"));
    }

    if (questions.length === 0) {
      await this.runSeeder(await import("../Questions"));
    }

    if (forms.length === 0) {
      await this.runSeeder(await import("../Form"));
    }
  }
}
