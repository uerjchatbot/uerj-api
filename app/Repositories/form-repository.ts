import { Create, Form, List, Update } from "App/Dtos/Form";
import { Query } from "App/Dtos/Query";

export interface FormRepository {
  create: (data: Create) => Promise<Form>;
  update: (data: Update) => Promise<Form>;
  delete: (id: string) => Promise<void>;
  findBy: <T extends keyof Form>(
    key: T,
    value: Form[T]
  ) => Promise<Form | null>;
  list: (query: Query) => Promise<List>;
}
