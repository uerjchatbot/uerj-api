"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const update_1 = global[Symbol.for('ioc.use')]("App/Factories/question/update");
const update_2 = global[Symbol.for('ioc.use')]("App/Validators/question/update");
async function update({ request, response, }) {
    try {
        const { id } = request.params();
        const update = await request.validate(update_2.UpdateValidator);
        const updateUseCase = (0, update_1.UpdateFactory)();
        const question = await updateUseCase.execute({
            id,
            ...update,
        });
        return response.ok(question);
    }
    catch (error) {
        if (error instanceof Error) {
            return response.badRequest({ message: error.message });
        }
        console.log(error);
        return response.conflict(error);
    }
}
exports.update = update;
//# sourceMappingURL=update.js.map