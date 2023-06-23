"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SignupValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string(),
            email: Validator_1.schema.string({}, [
                Validator_1.rules.email(),
                Validator_1.rules.unique({ table: "users", column: "email" }),
            ]),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(6), Validator_1.rules.maxLength(32)]),
        });
        this.messages = {
            "email.unique": "Já existe um usuário com este email",
        };
    }
}
exports.SignupValidator = SignupValidator;
//# sourceMappingURL=signup.js.map