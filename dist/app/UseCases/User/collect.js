"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectUseCase = void 0;
const get_template_form_data_1 = global[Symbol.for('ioc.use')]("App/Utils/get-template-form-data");
class CollectUseCase {
    async execute() {
        const data = await (0, get_template_form_data_1.getTemplateFormData)();
        return data;
    }
}
exports.CollectUseCase = CollectUseCase;
//# sourceMappingURL=collect.js.map