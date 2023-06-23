import Hash from "@ioc:Adonis/Core/Hash";
import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import { Signup, User } from "App/Dtos/User";
import { randomUUID } from "crypto";
import { UserRepository } from "../user-repository";

export class MemoryUserRepository implements UserRepository {
  update: (data: unknown) => Promise<User>;
  delete: (id: string) => Promise<void>;
  findMany: <Key extends keyof User>(
    key: Key,
    value: Exclude<User[Key], null>
  ) => Promise<User[]>;
  public items: User[] = [];

  public async create(data: Signup): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: await Hash.make(data.password),
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(user);

    return user;
  }

  public async findBy<T extends keyof User>(
    key: T,
    value: User[T]
  ): Promise<User | null> {
    return this.items.find((item) => item[key] === value) ?? null;
  }

  public async list(query: Query): Promise<List<User>> {
    return {
      meta: {
        current_page: Number(query.page),
        first_page: 1,
        first_page_url: null,
        last_page: Math.ceil(this.items.length / Number(query.limit)),
        last_page_url: null,
        next_page_url: null,
        per_page: Number(query.limit),
        previous_page_url: null,
        total: this.items.length,
      },
      data: this.items
        .filter((item) =>
          !(query.search === undefined)
            ? item.name.includes(query.search as string)
            : item
        )
        .slice(
          (Number(query.page) - 1) * Number(query.limit),
          Number(query.page) * Number(query.limit)
        ),
    };
  }
}
