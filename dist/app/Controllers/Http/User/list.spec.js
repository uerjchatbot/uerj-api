"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const runner_1 = require("@japa/runner");
const signup_1 = global[Symbol.for('ioc.use')]("App/Helpers/Test/signup");
runner_1.test.group("List E2E", (group) => {
    const prefix = Env_1.default.get("PREFIX");
    group.each.setup(async () => {
        await Database_1.default.beginGlobalTransaction();
    });
    group.each.teardown(async () => {
        await Database_1.default.rollbackGlobalTransaction();
    });
    (0, runner_1.test)("should be able to user list", async (context) => {
        const signupResponse = await (0, signup_1.signup)(context, {
            name: "John Doe",
            email: "john.doe@gmail.com",
            password: "123456",
        });
        signupResponse.assertStatus(201);
        const response = await context.client.get(`/${prefix}/users`).headers({
            Authorization: `Bearer ${signupResponse.body().token}`,
        });
        response.assertStatus(200);
    });
});
//# sourceMappingURL=list.spec.js.map