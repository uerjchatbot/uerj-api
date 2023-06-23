"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendUseCase = void 0;
const get_template_form_data_1 = global[Symbol.for('ioc.use')]("App/Utils/get-template-form-data");
const send_email_1 = global[Symbol.for('ioc.use')]("App/Utils/send-email");
const Degree = {
    master: "Mestrado",
    doctor: "Doutorado",
};
class SendUseCase {
    constructor(comunicationRepository) {
        this.comunicationRepository = comunicationRepository;
    }
    async execute(data) {
        const comunication = await this.comunicationRepository.findBy("id", String(data.id));
        if (!comunication)
            throw new Error("Comunication not found");
        const extracts = (await (0, get_template_form_data_1.getTemplateFormData)()).filter((item) => item.accept_email && data.degree === "union"
            ? item.degree.includes(Degree["master"]) ||
                item.degree.includes(Degree["doctor"])
            : item.degree.includes(Degree[data.degree]));
        if (extracts.length === 0) {
            throw new Error("Form Template not found");
        }
        await (0, send_email_1.sendEmailToAcceptEmailForm)(extracts, comunication);
    }
}
exports.SendUseCase = SendUseCase;
//# sourceMappingURL=send.js.map