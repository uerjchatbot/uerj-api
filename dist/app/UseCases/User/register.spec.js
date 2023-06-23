"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = require("@japa/runner");
const user_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/memory/user-repository");
const register_1 = require("./register");
let userRepository;
let sut;
runner_1.test.group("Register Use Case", (group) => {
    group.each.setup(() => {
        userRepository = new user_repository_1.MemoryUserRepository();
        sut = new register_1.RegisterUseCase(userRepository);
    });
    (0, runner_1.test)("should be able to register", async ({ assert }) => {
        const user = await sut.execute({
            email: "envkt@example.com",
            password: "123456",
            name: "John Doe",
        });
        assert.include(user, {
            email: "envkt@example.com",
            name: "John Doe",
        });
    });
    (0, runner_1.test)("shold not be able to register with same email twice", async ({ assert, }) => {
        await sut.execute({
            email: "envkt@example.com",
            password: "123456",
            name: "John Doe",
        });
        await assert.rejects(async () => {
            await sut.execute({
                email: "envkt@example.com",
                password: "123456",
                name: "John Doe",
            });
        }, Error);
    });
});
//# sourceMappingURL=register.spec.js.map