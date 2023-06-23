"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateFormData = void 0;
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Form_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Form"));
const google_1 = require("./google");
async function getTemplateFormData() {
    const template = (await Form_1.default.query().where("form_id", Env_1.default.get("FORM_DEFAULT_ID")).first())?.toJSON();
    const { data: { linkedSheetId }, } = await google_1.FormAPI.get({
        formId: template?.form_id,
    });
    const { data: { values }, } = await google_1.SheetAPI.values.get({
        spreadsheetId: linkedSheetId,
        range: "coleta!A2:P103",
    });
    return values?.map((item) => {
        return {
            name: item
                .filter((value) => {
                const isDegree = /(Mestrado|Doutorado)/gi.test(value);
                if (isDegree)
                    return false;
                return /^[A-Za-z\s]+$/.test(value);
            })
                .join(),
            email: item
                .filter((value) => /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(value))
                .join(),
            degree: item
                .filter((value) => /\b(Mestrado|Doutorado)\b/.test(value))
                .join(),
            accept_email: item.some((value) => /Aceito receber/i.test(value)),
        };
    });
}
exports.getTemplateFormData = getTemplateFormData;
//# sourceMappingURL=get-template-form-data.js.map