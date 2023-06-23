"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFactory = void 0;
const question_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/question-repository");
const create_1 = global[Symbol.for('ioc.use')]("App/UseCases/Question/create");
function CreateFactory() {
    const userRepository = new question_repository_1.LucidQuestionRepository();
    const useCase = new create_1.CreateUseCase(userRepository);
    return useCase;
}
exports.CreateFactory = CreateFactory;
//# sourceMappingURL=create.js.map