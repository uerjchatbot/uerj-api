"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUseCase = void 0;
const formatter_1 = global[Symbol.for('ioc.use')]("App/Utils/formatter");
class UpdateUseCase {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async execute(data) {
        const question = await this.questionRepository.findBy("id", String(data.id));
        if (!question)
            throw new Error("Question not found");
        const formatted = {
            question: (0, formatter_1.convertHtmlToWhatsappText)(String(data.question)),
            title: (0, formatter_1.convertHtmlToWhatsappText)(String(data.title)),
        };
        const { title, question: content, ...rest } = await this.questionRepository.update({
            id: data.id,
            ...formatted,
        });
        return {
            title: (title && (0, formatter_1.convertWhatsappTextToHtml)(title)) ?? "",
            question: (content && (0, formatter_1.convertWhatsappTextToHtml)(content)) ?? "",
            ...rest,
        };
    }
}
exports.UpdateUseCase = UpdateUseCase;
//# sourceMappingURL=update.js.map