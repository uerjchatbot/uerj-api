"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            question: Validator_1.schema.string.optional(),
            title: Validator_1.schema.string.optional(),
        });
        this.messages = {};
    }
}
exports.UpdateValidator = UpdateValidator;
//# sourceMappingURL=update.js.map