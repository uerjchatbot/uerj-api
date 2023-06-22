import { List, Signup, User } from "App/Dtos/User";

import { Query } from "App/Dtos/Query";
import Model from "App/Models/User";
import { UserRepository } from "../user-repository";

export class LucidUserRepository implements UserRepository {
  public async create(data: Signup): Promise<User> {
    const createdUser = await Model.create(data);
    const user = createdUser?.toJSON();
    return user as User;
  }

  public async findBy<T extends keyof User>(
    key: T,
    value: User[T]
  ): Promise<User | null> {
    const fetchUser = await Model.findBy(key, value);
    const user = fetchUser?.toJSON() as User;
    return user ?? null;
  }

  public async list(query: Query): Promise<List> {
    const fetchUsers = await Model.query()
      .if(query.search, (build) =>
        build.where("name", "ilike", `%${query.search}%`)
      )
      .orderBy("name", query.order)
      .paginate(Number(query.page), Number(query.limit));
    const users = fetchUsers?.toJSON();
    return users as List;
  }
}
