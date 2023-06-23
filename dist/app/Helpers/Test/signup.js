"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
async function signup({ client }, data) {
    const prefix = Env_1.default.get("PREFIX");
    return await client.post(`/${prefix}/auth/signup`).form(data);
}
exports.signup = signup;
//# sourceMappingURL=signup.js.map