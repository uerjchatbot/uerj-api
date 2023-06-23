"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFactory = void 0;
const comunication_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/comunication-repository");
const delete_1 = global[Symbol.for('ioc.use')]("App/UseCases/Comunication/delete");
function DeleteFactory() {
    const comunicationRepository = new comunication_repository_1.LucidComunicationRepository();
    const useCase = new delete_1.DeleteUseCase(comunicationRepository);
    return useCase;
}
exports.DeleteFactory = DeleteFactory;
//# sourceMappingURL=delete.js.map