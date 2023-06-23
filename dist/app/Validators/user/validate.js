"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class ValidateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            access_token: Validator_1.schema.string(),
        });
        this.messages = {};
    }
}
exports.ValidateValidator = ValidateValidator;
//# sourceMappingURL=validate.js.map