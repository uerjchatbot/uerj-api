import { Repository } from "App/Dtos/Repository";
import { Signup, User } from "App/Dtos/User";

export interface UserRepository extends Repository<User, Signup> {}
