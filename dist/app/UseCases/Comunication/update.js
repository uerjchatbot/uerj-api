"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUseCase = void 0;
class UpdateUseCase {
    constructor(comunicationRepository) {
        this.comunicationRepository = comunicationRepository;
    }
    async execute(data) {
        const comunication = await this.comunicationRepository?.findBy("id", String(data.id));
        if (!comunication)
            throw new Error("Question not found");
        return await this.comunicationRepository.update(data);
    }
}
exports.UpdateUseCase = UpdateUseCase;
//# sourceMappingURL=update.js.map