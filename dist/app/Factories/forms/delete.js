"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFactory = void 0;
const form_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/form-repository");
const delete_1 = global[Symbol.for('ioc.use')]("App/UseCases/Form/delete");
function DeleteFactory() {
    const formRepository = new form_repository_1.LucidFormRepository();
    const useCase = new delete_1.DeleteUseCase(formRepository);
    return useCase;
}
exports.DeleteFactory = DeleteFactory;
//# sourceMappingURL=delete.js.map