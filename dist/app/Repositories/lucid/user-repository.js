"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LucidUserRepository = void 0;
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class LucidUserRepository {
    async create(data) {
        const createdUser = await User_1.default.create(data);
        const user = createdUser?.toJSON();
        return user;
    }
    async findBy(key, value) {
        const fetchUser = await User_1.default.findBy(key, value);
        const user = fetchUser?.toJSON();
        return user ?? null;
    }
    async list(query) {
        const fetchUsers = await User_1.default.query()
            .if(query.search, (build) => build.where("name", "ilike", `%${query.search}%`))
            .orderBy("name", query.order)
            .paginate(Number(query.page), Number(query.limit));
        const users = fetchUsers?.toJSON();
        return users;
    }
}
exports.LucidUserRepository = LucidUserRepository;
//# sourceMappingURL=user-repository.js.map