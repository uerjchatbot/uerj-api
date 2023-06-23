"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFactory = void 0;
const question_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/question-repository");
const delete_1 = global[Symbol.for('ioc.use')]("App/UseCases/Question/delete");
function DeleteFactory() {
    const userRepository = new question_repository_1.LucidQuestionRepository();
    const useCase = new delete_1.DeleteUseCase(userRepository);
    return useCase;
}
exports.DeleteFactory = DeleteFactory;
//# sourceMappingURL=delete.js.map