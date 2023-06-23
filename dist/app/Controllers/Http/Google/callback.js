"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = void 0;
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
async function callback({ ally, response, auth, }) {
    const { email, token: { token: accessToken, refreshToken }, } = await ally.use("google").user();
    const user = (await User_1.default.findBy("email", email));
    const { token: apiToken } = await auth.use("api").generate(user, {
        expiresIn: "7 days",
    });
    return response.send({ apiToken, accessToken, refreshToken });
}
exports.callback = callback;
//# sourceMappingURL=callback.js.map