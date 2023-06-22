import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { create } from "App/Controllers/Http/Question/create";
import { remove } from "App/Controllers/Http/Question/delete";
import { fetch } from "App/Controllers/Http/Question/fetch";
import { update } from "App/Controllers/Http/Question/update";

Route.group(() => {
  Route.post("/questions", create);
  Route.get("/questions/:chatbot_id", fetch);
  Route.patch("/questions/:id", update);
  Route.delete("/questions/:id", remove);
})
  .prefix(Env.get("PREFIX"))
  .middleware("auth");
