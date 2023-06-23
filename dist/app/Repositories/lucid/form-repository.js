"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LucidFormRepository = void 0;
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Form_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Form"));
class LucidFormRepository {
    async findMany(key, value) {
        const fetchForms = await Form_1.default.query()
            .where(key, value)
            .orderBy("title", "asc");
        const forms = fetchForms.map((form) => form.toJSON());
        return forms;
    }
    async create(data) {
        const createdForm = await Form_1.default.create(data);
        const form = createdForm?.toJSON();
        return form;
    }
    async update(data) {
        const fetchForm = await Form_1.default.findOrFail(data.id);
        const updatedForm = await fetchForm.merge(data).save();
        const form = updatedForm?.toJSON();
        return form;
    }
    async delete(id) {
        const fetchForm = await Form_1.default.findOrFail(id);
        await fetchForm.delete();
    }
    async findBy(key, value) {
        const fetchForm = await Form_1.default.findBy(key, value);
        const form = fetchForm?.toJSON();
        return form ?? null;
    }
    async list(query) {
        const fetchForms = await Form_1.default.query()
            .whereNot("form_id", Env_1.default.get("FORM_DEFAULT_ID"))
            .if(query.search, (build) => build.where("title", "ilike", `%${query.search}%`))
            .orderBy("title", query.order)
            .paginate(Number(query.page), Number(query.limit));
        const forms = fetchForms?.toJSON();
        return forms;
    }
}
exports.LucidFormRepository = LucidFormRepository;
//# sourceMappingURL=form-repository.js.map