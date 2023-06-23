"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUseCase = void 0;
class CreateUseCase {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async execute(data) {
        const existFormId = await this.formRepository.findBy("form_id", data.form_id);
        const existFormUrl = await this.formRepository.findBy("form_url", data.form_url);
        if (existFormId || existFormUrl)
            throw new Error("Form already exists");
        return await this.formRepository.create(data);
    }
}
exports.CreateUseCase = CreateUseCase;
//# sourceMappingURL=create.js.map