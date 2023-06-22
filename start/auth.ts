import Env from "@ioc:Adonis/Core/Env";
import Route from "@ioc:Adonis/Core/Route";
import { signin } from "App/Controllers/Http/Auth/signin";
import { signup } from "App/Controllers/Http/Auth/signup";
import { callback } from "App/Controllers/Http/Google/callback";
import { redirect } from "App/Controllers/Http/Google/redirect";

Route.group(() => {
  Route.post("/auth/signup", signup);
  Route.post("/auth/signin", signin);
  Route.get("/google/redirect", redirect);
  Route.get("/google/callback", callback);
}).prefix(Env.get("PREFIX"));
