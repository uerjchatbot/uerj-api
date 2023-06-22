import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Form from "App/Models/Form";

export default class extends BaseSeeder {
  public static environment = ["dev", "staging", "test"];

  public async run() {
    await Form.create({
      form_id: "16gqbcG268jALqMRhe6jmytN4COKzPpkqZ7GVtYU6Z8w",
      form_url:
        "https://docs.google.com/forms/d/e/1FAIpQLSfgoQoI4gZg1q29PpBjlbDiN4DsAPBeNDBp7L0UPBx9hPVo8w/viewform",
      title: "Informações de contato - UERJ (Cópia Teste)",
    });
  }
}
