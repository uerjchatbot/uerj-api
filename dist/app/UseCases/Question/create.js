"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUseCase = void 0;
const formatter_1 = global[Symbol.for('ioc.use')]("App/Utils/formatter");
class CreateUseCase {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async execute(data) {
        const { title, question, ...rest } = await this.questionRepository.create(data);
        return {
            title: (title && (0, formatter_1.convertWhatsappTextToHtml)(String(title))) ?? "",
            question: (question && (0, formatter_1.convertWhatsappTextToHtml)(String(question))) ?? "",
            ...rest,
        };
    }
}
exports.CreateUseCase = CreateUseCase;
//# sourceMappingURL=create.js.map