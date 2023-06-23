import Env from "@ioc:Adonis/Core/Env";
import { Create, Form, Update } from "App/Dtos/Form";
import { List } from "App/Dtos/List";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Form";
import { FormRepository } from "../form-repository";

export class LucidFormRepository implements FormRepository {
  public async findMany<T extends keyof Form>(
    key: T,
    value: Exclude<Form[T], null>
  ): Promise<Form[]> {
    const fetchForms = await Model.query()
      .where(key, value)
      .orderBy("title", "asc");
    const forms = fetchForms.map((form) => form.toJSON());
    return forms as Form[];
  }

  public async create(data: Create): Promise<Form> {
    const createdForm = await Model.create(data);
    const form = createdForm?.toJSON();
    return form as Form;
  }

  public async update(data: Update): Promise<Form> {
    const fetchForm = await Model.findOrFail(data.id);
    const updatedForm = await fetchForm.merge(data).save();
    const form = updatedForm?.toJSON();
    return form as Form;
  }

  public async delete(id: string): Promise<void> {
    const fetchForm = await Model.findOrFail(id);
    await fetchForm.delete();
  }

  public async findBy<T extends keyof Form>(
    key: T,
    value: Form[T]
  ): Promise<Form | null> {
    const fetchForm = await Model.findBy(key, value);
    const form = fetchForm?.toJSON() as Form;
    return form ?? null;
  }

  public async list(query: Query): Promise<List<Form>> {
    const fetchForms = await Model.query()
      .whereNot("form_id", Env.get("FORM_DEFAULT_ID"))
      .if(query.search, (build) =>
        build.where("title", "ilike", `%${query.search}%`)
      )
      .orderBy("title", query.order)
      .paginate(Number(query.page), Number(query.limit));
    const forms = fetchForms?.toJSON();
    return forms as List<Form>;
  }
}
