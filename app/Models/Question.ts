import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Question extends Base {
  @column()
  public chatbot_id: number | null;

  @column()
  public node_chatbot_id: number | null;

  @column()
  public question: string | null;

  @column()
  public title: string | null;

  @column()
  public response: boolean;
}
