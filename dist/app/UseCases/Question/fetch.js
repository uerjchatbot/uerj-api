"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchUseCase = void 0;
const formatter_1 = global[Symbol.for('ioc.use')]("App/Utils/formatter");
class FetchUseCase {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    async execute({ chatbot_id }) {
        const question = await this.questionRepository.findBy("chatbot_id", Number(chatbot_id));
        if (!question)
            throw new Error("Question not found");
        const childrens = await this.questionRepository.findMany("node_chatbot_id", Number(chatbot_id));
        const { title, question: content, ...rest } = question;
        const formattedChildrens = childrens.map(({ title, question, ...rest }) => ({
            title: (title && (0, formatter_1.convertWhatsappTextToHtml)(title)) ?? "",
            question: (question && (0, formatter_1.convertWhatsappTextToHtml)(question)) ?? "",
            ...rest,
        }));
        return {
            title: (title && (0, formatter_1.convertWhatsappTextToHtml)(title)) ?? "",
            question: (content && (0, formatter_1.convertWhatsappTextToHtml)(content)) ?? "",
            ...rest,
            childrens: formattedChildrens,
        };
    }
}
exports.FetchUseCase = FetchUseCase;
//# sourceMappingURL=fetch.js.map