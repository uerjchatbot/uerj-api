"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildUseCase = void 0;
const form_header_1 = global[Symbol.for('ioc.use')]("App/Utils/form-header");
const form_questions_builder_1 = global[Symbol.for('ioc.use')]("App/Utils/form-questions-builder");
const google_1 = global[Symbol.for('ioc.use')]("App/Utils/google");
class BuildUseCase {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async execute(data) {
        const { data: created } = await google_1.FormAPI.create({
            requestBody: {
                info: {
                    title: data.title,
                    documentTitle: data.title,
                },
            },
        });
        await google_1.FormAPI.batchUpdate({
            formId: created?.formId,
            requestBody: {
                requests: [...form_header_1.FormHeader, ...(0, form_questions_builder_1.formQuestionsBuilder)(data.questions)].map(({ createItem }, index) => ({
                    createItem: { item: createItem?.item, location: { index } },
                })),
            },
        });
        return await this.formRepository.create({
            form_id: created.formId,
            form_url: created.responderUri,
            title: data.title,
        });
    }
}
exports.BuildUseCase = BuildUseCase;
//# sourceMappingURL=build.js.map