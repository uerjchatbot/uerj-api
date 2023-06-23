"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const list_1 = global[Symbol.for('ioc.use')]("App/Factories/comunications/list");
async function list({ request, response, }) {
    try {
        const query = request.qs();
        const listUseCase = (0, list_1.ListFactory)();
        const paginate = await listUseCase.execute(query);
        return response.ok(paginate);
    }
    catch (error) {
        if (error instanceof Error) {
            return response.badRequest({ message: error.message });
        }
        console.log(error);
        return response.conflict(error);
    }
}
exports.list = list;
//# sourceMappingURL=list.js.map