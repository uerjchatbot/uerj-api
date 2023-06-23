"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const fetch_1 = global[Symbol.for('ioc.use')]("App/Factories/question/fetch");
async function fetch({ request, response, }) {
    try {
        const { chatbot_id } = request.params();
        const fetchUseCase = (0, fetch_1.FetchFactory)();
        const question = await fetchUseCase.execute({
            chatbot_id,
        });
        return response.ok(question);
    }
    catch (error) {
        console.log(error);
        return response.conflict(error);
    }
}
exports.fetch = fetch;
//# sourceMappingURL=fetch.js.map