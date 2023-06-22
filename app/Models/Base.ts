import { BaseModel, beforeCreate, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

import { v4 as uuid } from "uuid";

export class Base extends BaseModel {
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;

  @beforeCreate()
  public static assignUuid(base: Base): void {
    base.id = uuid();
  }
}
