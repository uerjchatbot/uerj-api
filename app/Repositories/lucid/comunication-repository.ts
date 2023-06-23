import { Comunication, Create, Update } from "App/Dtos/Comunication";
import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Comunication";
import { ComunicationRepository } from "../comunication-repository";

export class LucidComunicationRepository implements ComunicationRepository {
  public async list(query: Query): Promise<List<Comunication>> {
    const fetchComunications = await Model.query()
      .if(query.search, (build) =>
        build.where("title", "ilike", `%${query.search}%`)
      )
      .orderBy("title", query.order)
      .paginate(Number(query.page), Number(query.limit));
    const comunications = fetchComunications?.toJSON();
    return comunications as List<Comunication>;
  }

  public async create(data: Create): Promise<Comunication> {
    const createdComunications = await Model.create(data);
    const comunication = createdComunications?.toJSON();
    return comunication as Comunication;
  }

  public async update(data: Update): Promise<Comunication> {
    const fetchComunication = await Model.findOrFail(data.id);
    const updatedComunication = await fetchComunication.merge(data).save();
    const comunication = updatedComunication?.toJSON();
    return comunication as Comunication;
  }

  public async delete(id: string): Promise<void> {
    const fetchComunication = await Model.findOrFail(id);
    await fetchComunication.delete();
  }

  public async findBy<T extends keyof Comunication>(
    key: T,
    value: Exclude<Comunication[T], null>
  ): Promise<Comunication | null> {
    const fetchComunication = await Model.findBy(key, value);
    const comunication = fetchComunication?.toJSON() as Comunication;
    return comunication ?? null;
  }

  public async findMany<T extends keyof Comunication>(
    key: T,
    value: Exclude<Comunication[T], null>
  ): Promise<Comunication[]> {
    const fetchComunications = await Model.query()
      .where(key, value)
      .orderBy("title", "asc");
    const comunications = fetchComunications.map((question) =>
      question.toJSON()
    );
    return comunications as Comunication[];
  }
}
