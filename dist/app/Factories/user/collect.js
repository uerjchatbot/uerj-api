"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectFactory = void 0;
const collect_1 = global[Symbol.for('ioc.use')]("App/UseCases/User/collect");
function CollectFactory() {
    const useCase = new collect_1.CollectUseCase();
    return useCase;
}
exports.CollectFactory = CollectFactory;
//# sourceMappingURL=collect.js.map