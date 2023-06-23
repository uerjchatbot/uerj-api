import { Form } from "App/Dtos/Form";
import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import { FormRepository } from "App/Repositories/form-repository";

export class ListUseCase {
  constructor(private formRepository: FormRepository) {}

  async execute(query: Query): Promise<List<Form>> {
    return await this.formRepository.list({
      page: query.page ?? 1,
      limit: query.limit ?? 10,
      search: query.search,
      order: query.order ?? "asc",
    });
  }
}
