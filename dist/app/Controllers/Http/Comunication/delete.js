"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const delete_1 = global[Symbol.for('ioc.use')]("App/Factories/comunications/delete");
async function remove({ request, response, }) {
    try {
        const { id } = request.params();
        const deleteUseCase = (0, delete_1.DeleteFactory)();
        await deleteUseCase.execute(String(id));
        return response.ok({ message: "deleted" });
    }
    catch (error) {
        if (error instanceof Error) {
            return response.badRequest({ message: error.message });
        }
        console.log(error);
        return response.conflict(error);
    }
}
exports.remove = remove;
//# sourceMappingURL=delete.js.map