"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFactory = void 0;
const comunication_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/comunication-repository");
const update_1 = global[Symbol.for('ioc.use')]("App/UseCases/Comunication/update");
function UpdateFactory() {
    const comunicationRepository = new comunication_repository_1.LucidComunicationRepository();
    const useCase = new update_1.UpdateUseCase(comunicationRepository);
    return useCase;
}
exports.UpdateFactory = UpdateFactory;
//# sourceMappingURL=update.js.map