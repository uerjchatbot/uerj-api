"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Form_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Form"));
class default_1 extends Seeder_1.default {
    async run() {
        await Form_1.default.create({
            form_id: "16gqbcG268jALqMRhe6jmytN4COKzPpkqZ7GVtYU6Z8w",
            form_url: "https://docs.google.com/forms/d/e/1FAIpQLSfgoQoI4gZg1q29PpBjlbDiN4DsAPBeNDBp7L0UPBx9hPVo8w/viewform",
            title: "Informações de contato - UERJ (Cópia Teste)",
        });
    }
}
exports.default = default_1;
default_1.environment = ["dev", "staging", "test"];
//# sourceMappingURL=Form.js.map