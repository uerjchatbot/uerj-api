import { Signup, Update, User } from "App/Dtos/User";

import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/User";
import { UserRepository } from "../user-repository";

export class LucidUserRepository implements UserRepository {
  public async update(data: Update): Promise<User> {
    const fetchUser = await Model.findOrFail(data.id);
    const updatedUser = await fetchUser.merge(data).save();
    const user = updatedUser?.toJSON();
    return user as User;
  }

  public async delete(id: string): Promise<void> {
    const fetchUser = await Model.findOrFail(id);
    await fetchUser.delete();
  }

  public async findMany<T extends keyof User>(
    key: T,
    value: Exclude<User[T], null>
  ): Promise<User[]> {
    const fetchUsers = await Model.query()
      .where(key, value)
      .orderBy("name", "asc");
    const users = fetchUsers.map((question) => question.toJSON());
    return users as User[];
  }
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

  public async list(query: Query): Promise<List<User>> {
    const fetchUsers = await Model.query()
      .if(query.search, (build) =>
        build.where("name", "ilike", `%${query.search}%`)
      )
      .orderBy("name", query.order)
      .paginate(Number(query.page), Number(query.limit));
    const users = fetchUsers?.toJSON();
    return users as List<User>;
  }
}
