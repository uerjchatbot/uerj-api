"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collect = void 0;
const collect_1 = global[Symbol.for('ioc.use')]("App/Factories/user/collect");
async function collect({ response, }) {
    try {
        const collectUseCase = (0, collect_1.CollectFactory)();
        const list = await collectUseCase.execute();
        return response.ok(list);
    }
    catch (error) {
        console.log(error);
        return response.conflict(error);
    }
}
exports.collect = collect;
//# sourceMappingURL=collect.js.map