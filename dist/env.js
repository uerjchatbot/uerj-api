"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
exports.default = Env_1.default.rules({
    HOST: Env_1.default.schema.string({ format: "host" }),
    PORT: Env_1.default.schema.number(),
    APP_KEY: Env_1.default.schema.string(),
    APP_NAME: Env_1.default.schema.string(),
    DRIVE_DISK: Env_1.default.schema.enum(["local"]),
    NODE_ENV: Env_1.default.schema.enum(["dev", "staging", "production", "test"]),
    PREFIX: Env_1.default.schema.string(),
    SESSION_DRIVER: Env_1.default.schema.string(),
    PG_HOST: Env_1.default.schema.string({ format: "host" }),
    PG_PORT: Env_1.default.schema.number(),
    PG_USER: Env_1.default.schema.string(),
    PG_PASSWORD: Env_1.default.schema.string.optional(),
    PG_DB_NAME: Env_1.default.schema.string(),
    GOOGLE_CLIENT_ID: Env_1.default.schema.string(),
    GOOGLE_CLIENT_SECRET: Env_1.default.schema.string(),
    GOOGLE_REFRESH_TOKEN: Env_1.default.schema.string(),
    GOOGLE_CALLBACK_URL: Env_1.default.schema.string(),
    FORM_DEFAULT_ID: Env_1.default.schema.string(),
    SMTP_HOST: Env_1.default.schema.string(),
    SMTP_PORT: Env_1.default.schema.number(),
    SMTP_USERNAME: Env_1.default.schema.string(),
    SMTP_PASSWORD: Env_1.default.schema.string(),
});
//# sourceMappingURL=env.js.map