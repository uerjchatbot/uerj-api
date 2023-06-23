"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string(),
            form_id: Validator_1.schema.string(),
            form_url: Validator_1.schema.string(),
        });
        this.messages = {};
    }
}
exports.CreateValidator = CreateValidator;
//# sourceMappingURL=create.js.map