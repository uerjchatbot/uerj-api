import { Base } from "./Base";

export interface Question extends Base {
  chatbot_id: number | null;
  node_chatbot_id: number;
  question: string | null;
  title: string | null;
  response: boolean;
}

export type Create = Pick<
  Partial<Question>,
  "response" | "node_chatbot_id" | "question" | "title"
>;

export type QuestionWithNodes = Question & { childrens: Question[] };

export type Update = Partial<Pick<Question, "id" | "title" | "question">>;

export interface Params {
  chatbot_id: number;
  id: string;
}
