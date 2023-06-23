"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
async function profile({ auth, response, }) {
    try {
        const user = await auth.authenticate();
        return response.ok(user);
    }
    catch (error) {
        return response.conflict(error);
    }
}
exports.profile = profile;
//# sourceMappingURL=profile.js.map