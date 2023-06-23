"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const create_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Comunication/create");
const delete_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Comunication/delete");
const list_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Comunication/list");
const send_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Comunication/send");
const update_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/Comunication/update");
Route_1.default.group(() => {
    Route_1.default.post("/comunications", create_1.create);
    Route_1.default.patch("/comunications/:id", update_1.update);
    Route_1.default.delete("/comunications/:id", delete_1.remove);
    Route_1.default.get("/comunications", list_1.list);
    Route_1.default.post("/comunications/:id/send", send_1.send);
})
    .prefix(Env_1.default.get("PREFIX"))
    .middleware("auth");
//# sourceMappingURL=comunication.js.map