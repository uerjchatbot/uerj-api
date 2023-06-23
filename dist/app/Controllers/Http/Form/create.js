"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const create_1 = global[Symbol.for('ioc.use')]("App/Factories/forms/create");
const create_2 = global[Symbol.for('ioc.use')]("App/Validators/forms/create");
async function create({ request, response, }) {
    try {
        const create = await request.validate(create_2.CreateValidator);
        const createUseCase = (0, create_1.CreateFactory)();
        const form = await createUseCase.execute(create);
        return response.ok(form);
    }
    catch (error) {
        console.log(error);
        return response.conflict(error);
    }
}
exports.create = create;
//# sourceMappingURL=create.js.map