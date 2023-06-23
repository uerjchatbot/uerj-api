"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildFactory = void 0;
const form_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/form-repository");
const build_1 = global[Symbol.for('ioc.use')]("App/UseCases/Form/build");
function BuildFactory() {
    const formRepository = new form_repository_1.LucidFormRepository();
    const useCase = new build_1.BuildUseCase(formRepository);
    return useCase;
}
exports.BuildFactory = BuildFactory;
//# sourceMappingURL=build.js.map