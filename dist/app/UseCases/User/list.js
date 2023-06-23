"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUseCase = void 0;
class ListUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(query) {
        return await this.userRepository.list(query);
    }
}
exports.ListUseCase = ListUseCase;
//# sourceMappingURL=list.js.map