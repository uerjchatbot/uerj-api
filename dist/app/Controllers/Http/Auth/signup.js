"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const register_1 = global[Symbol.for('ioc.use')]("App/Factories/user/register");
const signup_1 = global[Symbol.for('ioc.use')]("App/Validators/user/signup");
async function signup({ request, auth, response, }) {
    try {
        const body = await request.validate(signup_1.SignupValidator);
        const registerUseCase = (0, register_1.RegisterFactory)();
        const user = await registerUseCase.execute(body);
        const token = await auth.use("api").generate(user, {
            expiresIn: "7 days",
        });
        return response.created(token);
    }
    catch (error) {
        return response.conflict(error);
    }
}
exports.signup = signup;
//# sourceMappingURL=signup.js.map