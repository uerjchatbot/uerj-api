"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetAPI = exports.FormAPI = void 0;
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const googleapis_1 = require("googleapis");
const auth = new googleapis_1.google.auth.OAuth2({
    clientId: Env_1.default.get("GOOGLE_CLIENT_ID"),
    clientSecret: Env_1.default.get("GOOGLE_CLIENT_SECRET"),
    redirectUri: Env_1.default.get("GOOGLE_CALLBACK_URL"),
});
auth.setCredentials({
    refresh_token: Env_1.default.get("GOOGLE_REFRESH_TOKEN"),
});
exports.FormAPI = googleapis_1.google.forms({ version: "v1", auth }).forms;
exports.SheetAPI = googleapis_1.google.sheets({
    version: "v4",
    auth,
}).spreadsheets;
//# sourceMappingURL=google.js.map