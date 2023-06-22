import Env from "@ioc:Adonis/Core/Env";
import { Create, Form, List, Update } from "App/Dtos/Form";
import { Query } from "App/Dtos/Query";
import Model from "App/Models/Form";
import { FormRepository } from "../form-repository";

export class LucidFormRepository implements FormRepository {
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

  public async list(query: Query): Promise<List> {
    const fetchForms = await Model.query()
      .whereNot("form_id", Env.get("FORM_DEFAULT_ID"))
      .if(query.search, (build) =>
        build.where("title", "ilike", `%${query.search}%`)
      )
      .orderBy("title", query.order)
      .paginate(Number(query.page), Number(query.limit));
    const users = fetchForms?.toJSON();
    return users as List;
  }
}
