"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFactory = void 0;
const form_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/form-repository");
const list_1 = global[Symbol.for('ioc.use')]("App/UseCases/Form/list");
function ListFactory() {
    const formRepository = new form_repository_1.LucidFormRepository();
    const useCase = new list_1.ListUseCase(formRepository);
    return useCase;
}
exports.ListFactory = ListFactory;
//# sourceMappingURL=list.js.map