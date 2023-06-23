"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LucidComunicationRepository = void 0;
const Comunication_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Comunication"));
class LucidComunicationRepository {
    async list(query) {
        const fetchComunications = await Comunication_1.default.query()
            .if(query.search, (build) => build.where("title", "ilike", `%${query.search}%`))
            .orderBy("title", query.order)
            .paginate(Number(query.page), Number(query.limit));
        const comunications = fetchComunications?.toJSON();
        return comunications;
    }
    async create(data) {
        const createdComunications = await Comunication_1.default.create(data);
        const comunication = createdComunications?.toJSON();
        return comunication;
    }
    async update(data) {
        const fetchComunication = await Comunication_1.default.findOrFail(data.id);
        const updatedComunication = await fetchComunication.merge(data).save();
        const comunication = updatedComunication?.toJSON();
        return comunication;
    }
    async delete(id) {
        const fetchComunication = await Comunication_1.default.findOrFail(id);
        await fetchComunication.delete();
    }
    async findBy(key, value) {
        const fetchComunication = await Comunication_1.default.findBy(key, value);
        const comunication = fetchComunication?.toJSON();
        return comunication ?? null;
    }
    async findMany(key, value) {
        const fetchComunications = await Comunication_1.default.query()
            .where(key, value)
            .orderBy("title", "asc");
        const comunications = fetchComunications.map((question) => question.toJSON());
        return comunications;
    }
}
exports.LucidComunicationRepository = LucidComunicationRepository;
//# sourceMappingURL=comunication-repository.js.map