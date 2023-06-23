import { Comunication, Create, Update } from "App/Dtos/Comunication";
import { Repository } from "App/Dtos/Repository";

export interface ComunicationRepository
  extends Repository<Comunication, Create, Update> {}
