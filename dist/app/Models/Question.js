"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Base_1 = require("./Base");
class Question extends Base_1.Base {
}
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Question.prototype, "chatbot_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Question.prototype, "node_chatbot_id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Question.prototype, "question", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Object)
], Question.prototype, "title", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Boolean)
], Question.prototype, "response", void 0);
exports.default = Question;
//# sourceMappingURL=Question.js.map