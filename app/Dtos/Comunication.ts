import { Base } from "./Base";

export interface Comunication extends Base {
  title: string;
  text: string;
}

export type Create = Omit<Comunication, "id" | "created_at" | "updated_at">;
export type Update = Partial<Omit<Comunication, "created_at" | "updated_at">>;

export interface SendBody {
  id: string;
  degree: "master" | "doctor";
}
