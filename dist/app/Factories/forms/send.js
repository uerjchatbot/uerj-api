"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendFactory = void 0;
const form_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/form-repository");
const send_1 = global[Symbol.for('ioc.use')]("App/UseCases/Form/send");
function SendFactory() {
    const formRepository = new form_repository_1.LucidFormRepository();
    const useCase = new send_1.SendUseCase(formRepository);
    return useCase;
}
exports.SendFactory = SendFactory;
//# sourceMappingURL=send.js.map