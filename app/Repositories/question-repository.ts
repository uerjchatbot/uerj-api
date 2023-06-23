import { Create, Question, Update } from "App/Dtos/Question";
import { Repository } from "App/Dtos/Repository";

export interface QuestionRepository
  extends Repository<Question, Create, Update> {}
