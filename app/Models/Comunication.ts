import { column } from "@ioc:Adonis/Lucid/Orm";
import { Base } from "./Base";

export default class Comunication extends Base {
  @column()
  public text: string;

  @column()
  public title: string;
}
