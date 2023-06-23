"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterFactory = void 0;
const user_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/user-repository");
const register_1 = global[Symbol.for('ioc.use')]("App/UseCases/User/register");
function RegisterFactory() {
    const userRepository = new user_repository_1.LucidUserRepository();
    const useCase = new register_1.RegisterUseCase(userRepository);
    return useCase;
}
exports.RegisterFactory = RegisterFactory;
//# sourceMappingURL=register.js.map