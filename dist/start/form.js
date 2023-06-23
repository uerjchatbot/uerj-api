"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const build_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Form/build");
const create_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Form/create");
const delete_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Form/delete");
const list_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Form/list");
const send_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Form/send");
const update_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Form/update");
Route_1.default.group(() => {
    Route_1.default.post("/forms", create_1.create);
    Route_1.default.post("/forms/build", build_1.build);
    Route_1.default.patch("/forms/:id", update_1.update);
    Route_1.default.delete("/forms/:id", delete_1.remove);
    Route_1.default.get("/forms", list_1.list);
    Route_1.default.post("/forms/:id/send", send_1.send);
})
    .prefix(Env_1.default.get("PREFIX"))
    .middleware("auth");
//# sourceMappingURL=form.js.map