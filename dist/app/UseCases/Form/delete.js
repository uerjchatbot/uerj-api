"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUseCase = void 0;
class DeleteUseCase {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async execute(id) {
        const form = await this.formRepository.findBy("id", String(id));
        if (!form)
            throw new Error("Form not found");
        await this.formRepository.delete(form.id);
    }
}
exports.DeleteUseCase = DeleteUseCase;
//# sourceMappingURL=delete.js.map