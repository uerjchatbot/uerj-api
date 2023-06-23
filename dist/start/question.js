"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const create_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Question/create");
const delete_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Question/delete");
const fetch_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Question/fetch");
const update_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Question/update");
Route_1.default.group(() => {
    Route_1.default.post("/questions", create_1.create);
    Route_1.default.get("/questions/:chatbot_id", fetch_1.fetch);
    Route_1.default.patch("/questions/:id", update_1.update);
    Route_1.default.delete("/questions/:id", delete_1.remove);
})
    .prefix(Env_1.default.get("PREFIX"))
    .middleware("auth");
//# sourceMappingURL=question.js.map