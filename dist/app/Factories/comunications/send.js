"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendFactory = void 0;
const comunication_repository_1 = global[Symbol.for('ioc.use')]("App/Repositories/lucid/comunication-repository");
const send_1 = global[Symbol.for('ioc.use')]("App/UseCases/Comunication/send");
function SendFactory() {
    const comunicationRepository = new comunication_repository_1.LucidComunicationRepository();
    const useCase = new send_1.SendUseCase(comunicationRepository);
    return useCase;
}
exports.SendFactory = SendFactory;
//# sourceMappingURL=send.js.map