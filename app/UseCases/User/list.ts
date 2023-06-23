import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import { User } from "App/Dtos/User";
import { UserRepository } from "App/Repositories/user-repository";

export class ListUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(query: Query): Promise<List<User>> {
    return await this.userRepository.list(query);
  }
}
