"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const signin_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Auth/signin");
const signup_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Auth/signup");
const callback_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Google/callback");
const redirect_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Google/redirect");
Route_1.default.group(() => {
    Route_1.default.post("/auth/signup", signup_1.signup);
    Route_1.default.post("/auth/signin", signin_1.signin);
    Route_1.default.get("/google/redirect", redirect_1.redirect);
    Route_1.default.get("/google/callback", callback_1.callback);
}).prefix(Env_1.default.get("PREFIX"));
//# sourceMappingURL=auth.js.map