"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUseCase = void 0;
class CreateUseCase {
    constructor(comunicationRepository) {
        this.comunicationRepository = comunicationRepository;
    }
    async execute(data) {
        return await this.comunicationRepository.create(data);
    }
}
exports.CreateUseCase = CreateUseCase;
//# sourceMappingURL=create.js.map