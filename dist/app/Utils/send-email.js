"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailToAcceptEmailForm = void 0;
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
async function sendEmailToAcceptEmailForm(data, entity) {
    const sendTo = data?.flatMap((item) => item.email).join(",");
    const formContent = `
  Olá, aqui está o link para formulário <strong>${entity.title}.</strong><br/>
    ${entity?.form_url}`;
    const comunicationContent = `${entity.text}`;
    const formSubject = `Formulário: ${entity.title}`;
    const comunicationSubject = `Comunicação: ${entity.title}`;
    const content = "form_url" in entity ? formContent : comunicationContent;
    const subject = "form_url" in entity ? formSubject : comunicationSubject;
    await Mail_1.default.use("gmail").send((message) => {
        message
            .from(Env_1.default.get("SMTP_USERNAME"))
            .envelope({
            to: sendTo,
        })
            .subject(subject)
            .html(content);
    });
}
exports.sendEmailToAcceptEmailForm = sendEmailToAcceptEmailForm;
//# sourceMappingURL=send-email.js.map