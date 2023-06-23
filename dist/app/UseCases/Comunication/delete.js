"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUseCase = void 0;
class DeleteUseCase {
    constructor(comunicationRepository) {
        this.comunicationRepository = comunicationRepository;
    }
    async execute(id) {
        const comunication = await this.comunicationRepository.findBy("id", String(id));
        if (!comunication)
            throw new Error("Form not found");
        await this.comunicationRepository.delete(comunication.id);
    }
}
exports.DeleteUseCase = DeleteUseCase;
//# sourceMappingURL=delete.js.map