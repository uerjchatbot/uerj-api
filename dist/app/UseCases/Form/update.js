"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUseCase = void 0;
class UpdateUseCase {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async execute(data) {
        const form = await this.formRepository?.findBy("id", String(data.id));
        if (!form)
            throw new Error("Question not found");
        return await this.formRepository.update(data);
    }
}
exports.UpdateUseCase = UpdateUseCase;
//# sourceMappingURL=update.js.map