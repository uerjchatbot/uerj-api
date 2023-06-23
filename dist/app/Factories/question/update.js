"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFactory = void 0;
const question_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/question-repository");
const update_1 = global[Symbol.for('ioc.use')]("App/UseCases/Question/update");
function UpdateFactory() {
    const userRepository = new question_repository_1.LucidQuestionRepository();
    const useCase = new update_1.UpdateUseCase(userRepository);
    return useCase;
}
exports.UpdateFactory = UpdateFactory;
//# sourceMappingURL=update.js.map