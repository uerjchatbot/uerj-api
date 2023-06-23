"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninValidator = void 0;
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SigninValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({}, [
                Validator_1.rules.email(),
                Validator_1.rules.exists({ table: "users", column: "email" }),
            ]),
            password: Validator_1.schema.string(),
        });
        this.messages = {
            "email.exists": "Usuário não cadastrado no sistema",
        };
    }
}
exports.SigninValidator = SigninValidator;
//# sourceMappingURL=signin.js.map