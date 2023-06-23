"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFactory = void 0;
const comunication_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/comunication-repository");
const create_1 = global[Symbol.for('ioc.use')]("App/UseCases/Comunication/create");
function CreateFactory() {
    const comunicationRepository = new comunication_repository_1.LucidComunicationRepository();
    const useCase = new create_1.CreateUseCase(comunicationRepository);
    return useCase;
}
exports.CreateFactory = CreateFactory;
//# sourceMappingURL=create.js.map