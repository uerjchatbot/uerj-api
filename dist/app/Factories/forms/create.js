"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFactory = void 0;
const form_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/form-repository");
const create_1 = global[Symbol.for('ioc.use')]("App/UseCases/Form/create");
function CreateFactory() {
    const formRepository = new form_repository_1.LucidFormRepository();
    const useCase = new create_1.CreateUseCase(formRepository);
    return useCase;
}
exports.CreateFactory = CreateFactory;
//# sourceMappingURL=create.js.map