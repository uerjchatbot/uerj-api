import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { create } from "App/Controllers/Http/Comunication/create";
import { remove } from "App/Controllers/Http/Comunication/delete";
import { list } from "App/Controllers/Http/Comunication/list";
import { send } from "App/Controllers/Http/Comunication/send";
import { update } from "App/Controllers/Http/Comunication/update";

Route.group(() => {
  Route.post("/comunications", create);
  Route.patch("/comunications/:id", update);
  Route.delete("/comunications/:id", remove);
  Route.get("/comunications", list);
  Route.post("/comunications/:id/send", send);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
