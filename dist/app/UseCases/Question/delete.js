"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUseCase = void 0;
class DeleteUseCase {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async execute(id) {
        const question = await this.questionRepository.findBy("id", String(id));
        if (!question)
            throw new Error("Question not found");
        await this.questionRepository.delete(question.id);
    }
}
exports.DeleteUseCase = DeleteUseCase;
//# sourceMappingURL=delete.js.map