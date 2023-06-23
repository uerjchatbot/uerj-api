"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
require("./auth");
require("./comunication");
require("./form");
require("./question");
require("./user");
Route_1.default.get("/", async () => {
    return { message: "welcome to UERJ Chatbot API" };
});
//# sourceMappingURL=routes.js.map