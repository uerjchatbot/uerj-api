"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = void 0;
async function redirect({ ally }) {
    return ally.use("google").redirect();
}
exports.redirect = redirect;
//# sourceMappingURL=redirect.js.map