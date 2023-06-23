"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const collect_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/User/collect");
const list_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/User/list");
const profile_1 = global[Symbol.for('ioc.use')]("App/Controllers/Http/User/profile");
Route_1.default.group(() => {
    Route_1.default.get("/users/profile", profile_1.profile);
    Route_1.default.get("/users", list_1.list);
    Route_1.default.get("/users/collect", collect_1.collect);
})
    .prefix(Env_1.default.get("PREFIX"))
    .middleware("auth");
//# sourceMappingURL=user.js.map