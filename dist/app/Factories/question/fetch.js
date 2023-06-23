"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchFactory = void 0;
const question_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/question-repository");
const fetch_1 = global[Symbol.for('ioc.use')]("App/UseCases/Question/fetch");
function FetchFactory() {
    const userRepository = new question_repository_1.LucidQuestionRepository();
    const useCase = new fetch_1.FetchUseCase(userRepository);
    return useCase;
}
exports.FetchFactory = FetchFactory;
//# sourceMappingURL=fetch.js.map