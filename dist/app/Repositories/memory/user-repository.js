"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryUserRepository = void 0;
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const crypto_1 = require("crypto");
class MemoryUserRepository {
    constructor() {
        this.items = [];
    }
    async create(data) {
        const user = {
            id: (0, crypto_1.randomUUID)(),
            name: data.name,
            email: data.email,
            password: await Hash_1.default.make(data.password),
            created_at: new Date(),
            updated_at: new Date(),
        };
        this.items.push(user);
        return user;
    }
    async findBy(key, value) {
        return this.items.find((item) => item[key] === value) ?? null;
    }
    async list(query) {
        return {
            meta: {
                current_page: Number(query.page),
                first_page: 1,
                first_page_url: null,
                last_page: Math.ceil(this.items.length / Number(query.limit)),
                last_page_url: null,
                next_page_url: null,
                per_page: Number(query.limit),
                previous_page_url: null,
                total: this.items.length,
            },
            data: this.items
                .filter((item) => !(query.search === undefined)
                ? item.name.includes(query.search)
                : item)
                .slice((Number(query.page) - 1) * Number(query.limit), Number(query.page) * Number(query.limit)),
        };
    }
}
exports.MemoryUserRepository = MemoryUserRepository;
//# sourceMappingURL=user-repository.js.map