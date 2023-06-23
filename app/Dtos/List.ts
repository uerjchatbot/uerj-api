import { Entity } from "./Entity";
import { Meta } from "./Meta";

export interface List<T extends Entity> {
  meta: Meta;
  data: T[];
}
