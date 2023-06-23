"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LucidQuestionRepository = void 0;
const Question_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Question"));
class LucidQuestionRepository {
    async create(data) {
        const createdQuestion = await Question_1.default.create(data);
        const question = createdQuestion?.toJSON();
        return question;
    }
    async update(data) {
        const fetchQuestion = await Question_1.default.findOrFail(data.id);
        const updatedQuestion = await fetchQuestion.merge(data).save();
        const question = updatedQuestion?.toJSON();
        return question;
    }
    async delete(id) {
        const fetchQuestion = await Question_1.default.findOrFail(id);
        await fetchQuestion.delete();
    }
    async findBy(key, value) {
        const fetchQuestion = await Question_1.default.findBy(key, value);
        const question = fetchQuestion?.toJSON();
        return question ?? null;
    }
    async findMany(key, value) {
        const fetchQuestions = await Question_1.default.query()
            .where(key, value)
            .orderBy("chatbot_id");
        const questions = fetchQuestions.map((question) => question.toJSON());
        return questions;
    }
}
exports.LucidQuestionRepository = LucidQuestionRepository;
//# sourceMappingURL=question-repository.js.map