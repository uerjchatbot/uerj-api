"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const update_1 = global[Symbol.for('ioc.use')]("App/Factories/forms/update");
const update_2 = global[Symbol.for('ioc.use')]("App/Validators/forms/update");
async function update({ request, response, }) {
    try {
        const { id } = request.params();
        const update = await request.validate(update_2.UpdateValidator);
        const updateUseCase = (0, update_1.UpdateFactory)();
        const form = await updateUseCase.execute({
            id,
            ...update,
        });
        return response.ok(form);
    }
    catch (error) {
        console.log(error);
        return response.conflict(error);
    }
}
exports.update = update;
//# sourceMappingURL=update.js.map