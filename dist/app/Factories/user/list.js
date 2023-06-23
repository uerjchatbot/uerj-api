"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFactory = void 0;
const user_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/user-repository");
const list_1 = global[Symbol.for('ioc.use')]("App/UseCases/User/list");
function ListFactory() {
    const userRepository = new user_repository_1.LucidUserRepository();
    const useCase = new list_1.ListUseCase(userRepository);
    return useCase;
}
exports.ListFactory = ListFactory;
//# sourceMappingURL=list.js.map