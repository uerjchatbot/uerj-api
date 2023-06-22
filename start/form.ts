import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { build } from "App/Controllers/Http/Form/build";
import { create } from "App/Controllers/Http/Form/create";
import { remove } from "App/Controllers/Http/Form/delete";
import { list } from "App/Controllers/Http/Form/list";
import { send } from "App/Controllers/Http/Form/send";
import { update } from "App/Controllers/Http/Form/update";

Route.group(() => {
  Route.post("/forms", create);
  Route.post("/forms/build", build);
  Route.patch("/forms/:id", update);
  Route.delete("/forms/:id", remove);
  Route.get("/forms", list);
  Route.post("/forms/:id/send", send);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
