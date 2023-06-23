"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const build_1 = global[Symbol.for('ioc.use')]("App/Factories/forms/build");
async function build({ request, response, }) {
    try {
        const build = request.body();
        const buildUseCase = (0, build_1.BuildFactory)();
        const form = await buildUseCase.execute(build);
        return response.ok(form);
    }
    catch (error) {
        if (error instanceof Error) {
            return response.badRequest({ message: error.message });
        }
        console.log(error);
        return response.conflict(error);
    }
}
exports.build = build;
//# sourceMappingURL=build.js.map