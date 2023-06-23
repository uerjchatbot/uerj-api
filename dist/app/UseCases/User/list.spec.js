"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = require("@japa/runner");
const user_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/memory/user-repository");
const list_1 = require("./list");
let userRepository;
let sut;
runner_1.test.group("User List Use Case", (group) => {
    group.each.setup(() => {
        userRepository = new user_repository_1.MemoryUserRepository();
        sut = new list_1.ListUseCase(userRepository);
    });
    (0, runner_1.test)("shold be able to fetch paginated user list", async ({ assert }) => {
        for (let index = 1; index <= 22; index++) {
            await userRepository.create({
                name: `user-${index}`,
                email: `user-${index}@example.com`,
                password: "1234567890",
            });
        }
        const paginate = await sut.execute({
            page: 2,
            limit: 10,
        });
        assert.include(paginate.meta, {
            current_page: 2,
            first_page: 1,
            last_page: 3,
            per_page: 10,
            total: 22,
        });
        assert.isArray(paginate.data);
        assert.equal(paginate.data.length, 10);
    });
    (0, runner_1.test)("shold be able to search item from user list", async ({ assert }) => {
        for (let index = 1; index <= 22; index++) {
            await userRepository.create({
                name: `user-${index}`,
                email: `user-${index}@example.com`,
                password: "1234567890",
            });
        }
        const paginate = await sut.execute({
            page: 1,
            limit: 10,
            search: "user-11",
        });
        assert.isArray(paginate.data);
        assert.equal(paginate.data.length, 1);
        assert.include(paginate.data[0], {
            name: "user-11",
        });
    });
});
//# sourceMappingURL=list.spec.js.map