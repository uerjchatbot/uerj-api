import { Comunication } from "App/Dtos/Comunication";
import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import { ComunicationRepository } from "App/Repositories/comunication-repository";

export class ListUseCase {
  constructor(private comunicationRepository: ComunicationRepository) {}

  async execute(query: Query): Promise<List<Comunication>> {
    return await this.comunicationRepository.list({
      page: query.page ?? 1,
      limit: query.limit ?? 10,
      search: query.search,
      order: query.order ?? "asc",
    });
  }
}
