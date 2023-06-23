"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Factory_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Factory"));
exports.default = Factory_1.default.define(User_1.default, ({ faker }) => {
    return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: '123123',
    };
}).build();
//# sourceMappingURL=UserFactory.js.map