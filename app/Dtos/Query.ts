export interface Query {
  page?: number;
  limit?: number;
  search?: string;
  order?: "asc" | "desc";
}

export interface Params {
  question_id?: string;
  chatbot_id?: number;
  id?: string;
}
