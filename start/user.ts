import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { collect } from "App/Controllers/Http/User/collect";
import { list } from "App/Controllers/Http/User/list";
import { profile } from "App/Controllers/Http/User/profile";

Route.group(() => {
  Route.get("/users/profile", profile);
  Route.get("/users", list);
  Route.get("/users/collect", collect);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
