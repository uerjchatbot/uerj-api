import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Form extends Base {
  @column()
  public title: string;

  @column()
  form_id: string;

  @column()
  form_url: string;

  @column()
  question_id: string;
}
