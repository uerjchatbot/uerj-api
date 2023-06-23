"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFactory = void 0;
const comunication_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/comunication-repository");
const list_1 = global[Symbol.for('ioc.use')]("App/UseCases/Comunication/list");
function ListFactory() {
    const comunicationRepository = new comunication_repository_1.LucidComunicationRepository();
    const useCase = new list_1.ListUseCase(comunicationRepository);
    return useCase;
}
exports.ListFactory = ListFactory;
//# sourceMappingURL=list.js.map