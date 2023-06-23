import { Create, Form, Update } from "App/Dtos/Form";
import { Repository } from "App/Dtos/Repository";

export interface FormRepository extends Repository<Form, Create, Update> {}
