import { Entity } from "./Entity";
import { List } from "./List";
import { Query } from "./Query";

export interface Repository<
  Record extends Entity,
  Create = unknown,
  Update = unknown
> {
  create: (data: Create) => Promise<Record>;
  update: (data: Update) => Promise<Record>;
  delete: (id: string) => Promise<void>;
  findBy: <Key extends keyof Record>(
    key: Key,
    value: Record[Key]
  ) => Promise<Record | null>;
  list: (query: Query) => Promise<List<Record>>;
  findMany: <Key extends keyof Record>(
    key: Key,
    value: Exclude<Record[Key], null>
  ) => Promise<Record[]>;
}
