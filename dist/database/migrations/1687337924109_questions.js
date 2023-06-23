"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "questions";
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.uuid("id").primary();
            table.integer("chatbot_id").nullable();
            table.integer("node_chatbot_id").nullable();
            table.text("question").nullable();
            table.text("title").nullable();
            table.boolean("response").notNullable();
            table.timestamp("created_at", { useTz: true });
            table.timestamp("updated_at", { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1687337924109_questions.js.map