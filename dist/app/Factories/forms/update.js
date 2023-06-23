"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFactory = void 0;
const form_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/form-repository");
const update_1 = global[Symbol.for('ioc.use')]("App/UseCases/Form/update");
function UpdateFactory() {
    const formRepository = new form_repository_1.LucidFormRepository();
    const useCase = new update_1.UpdateUseCase(formRepository);
    return useCase;
}
exports.UpdateFactory = UpdateFactory;
//# sourceMappingURL=update.js.map