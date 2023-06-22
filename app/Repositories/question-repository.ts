import { Create, Question, Update } from "App/Dtos/Question";

export interface QuestionRepository {
  create: (data: Create) => Promise<Question>;
  update: (data: Update) => Promise<Question>;
  delete: (id: string) => Promise<void>;
  findBy: <T extends keyof Question>(
    key: T,
    value: Exclude<Question[T], null>
  ) => Promise<Question | null>;

  findMany: <T extends keyof Question>(
    key: T,
    value: Exclude<Question[T], null>
  ) => Promise<Question[]>;
}
