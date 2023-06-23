"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            node_chatbot_id: Validator_1.schema.number(),
            question: Validator_1.schema.string.optional(),
            title: Validator_1.schema.string.optional(),
            response: Validator_1.schema.boolean(),
        });
        this.messages = {};
    }
}
exports.CreateValidator = CreateValidator;
//# sourceMappingURL=create.js.map