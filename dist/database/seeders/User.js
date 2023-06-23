"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class default_1 extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                email: "ppgedu.ffp@gmail.com",
                password: "admin@chatbot",
                name: "ppgedu",
            },
            {
                email: "jhollyfer.fr@gmail.com",
                password: "developer",
                name: "Jhollyfer Developer",
            },
            {
                email: "Jhollyfer.rodrigues@clicksoft.com.br",
                password: "developer",
                name: "Jhollyfer Developer",
            },
        ]);
    }
}
exports.default = default_1;
default_1.environment = ["dev", "staging", "test"];
//# sourceMappingURL=User.js.map