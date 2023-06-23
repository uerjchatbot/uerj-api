"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const databaseConfig = {
    connection: Env_1.default.get("DB_CONNECTION"),
    connections: {
        pg: {
            client: "pg",
            connection: {
                host: Env_1.default.get("PG_HOST"),
                port: Env_1.default.get("PG_PORT"),
                user: Env_1.default.get("PG_USER"),
                password: Env_1.default.get("PG_PASSWORD", ""),
                database: Env_1.default.get("PG_DB_NAME"),
                ssl: Env_1.default.get("NODE_ENV") !== "production"
                    ? false
                    : { rejectUnauthorized: false },
            },
            migrations: {
                naturalSort: true,
            },
            seeders: {
                paths: ["./database/seeders/MainSeeder"],
            },
            healthCheck: false,
            debug: false,
        },
        sqlite: {
            client: "sqlite",
            connection: {
                filename: "testdb/db.sqlite3",
            },
            pool: {
                afterCreate: (conn, cb) => {
                    conn.run("PRAGMA foreign_keys=true", cb);
                },
            },
            migrations: {
                naturalSort: true,
            },
            seeders: {
                paths: ["./database/seeders/MainSeeder"],
            },
            useNullAsDefault: true,
            healthCheck: false,
            debug: false,
        },
    },
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map