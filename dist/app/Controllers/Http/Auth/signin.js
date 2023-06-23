"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const signin_1 = global[Symbol.for('ioc.use')]("App/Validators/user/signin");
async function signin({ request, auth, response, }) {
    const { email, password } = await request.validate(signin_1.SigninValidator);
    const token = await auth.use("api").attempt(email, password, {
        expiresIn: "7 days",
    });
    return response.ok(token);
}
exports.signin = signin;
//# sourceMappingURL=signin.js.map