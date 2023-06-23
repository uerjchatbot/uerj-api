"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@adonisjs/mail/build/config");
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
exports.default = (0, config_1.mailConfig)({
    mailer: "gmail",
    mailers: {
        gmail: {
            driver: "smtp",
            host: Env_1.default.get("SMTP_HOST"),
            port: Env_1.default.get("SMTP_PORT"),
            auth: {
                type: "login",
                user: Env_1.default.get("SMTP_USERNAME"),
                pass: Env_1.default.get("SMTP_PASSWORD"),
            },
        },
    },
});
//# sourceMappingURL=mail.js.map