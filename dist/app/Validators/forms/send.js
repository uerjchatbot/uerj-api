"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SendValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            degree: Validator_1.schema.enum(["master", "doctor", "union"]),
        });
        this.messages = {};
    }
}
exports.SendValidator = SendValidator;
//# sourceMappingURL=send.js.map