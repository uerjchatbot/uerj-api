"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Form_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Form"));
const Question_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Question"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class default_1 extends Seeder_1.default {
    async runSeeder(Seeder) {
        await new Seeder.default(this.client).run();
    }
    async run() {
        const users = await User_1.default.query();
        const questions = await Question_1.default.query();
        const forms = await Form_1.default.query();
        if (users.length === 0) {
            await this.runSeeder(await Promise.resolve().then(() => __importStar(require("../User"))));
        }
        if (questions.length === 0) {
            await this.runSeeder(await Promise.resolve().then(() => __importStar(require("../Questions"))));
        }
        if (forms.length === 0) {
            await this.runSeeder(await Promise.resolve().then(() => __importStar(require("../Form"))));
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=Index.js.map