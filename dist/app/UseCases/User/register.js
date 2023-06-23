"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUseCase = void 0;
class RegisterUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(data) {
        const user = await this.userRepository.findBy("email", data.email);
        if (user)
            throw new Error();
        return await this.userRepository.create(data);
    }
}
exports.RegisterUseCase = RegisterUseCase;
//# sourceMappingURL=register.js.map