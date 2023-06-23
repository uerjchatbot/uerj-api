"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailToAcceptEmailForm = void 0;
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
async function sendEmailToAcceptEmailForm(data, form) {
    const sendTo = data?.flatMap((item) => item.email).join(",");
    await Mail_1.default.use("gmail").send((message) => {
        message
            .from(Env_1.default.get("SMTP_USERNAME"))
            .envelope({
            to: sendTo,
        })
            .subject(`Formulário ${form.title}`)
            .html(`
      Olá, aqui está o link para formulário <strong>${form.title}.</strong>
      <br/>
      ${form.form_url}
      `);
    });
}
exports.sendEmailToAcceptEmailForm = sendEmailToAcceptEmailForm;
//# sourceMappingURL=send-email.js.map