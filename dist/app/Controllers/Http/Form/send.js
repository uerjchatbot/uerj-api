"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
const send_1 = global[Symbol.for('ioc.use')]("App/Factories/forms/send");
const send_2 = global[Symbol.for('ioc.use')]("App/Validators/forms/send");
async function send({ request, response, }) {
    try {
        const { id } = request.params();
        const send = await request.validate(send_2.SendValidator);
        const sendUseCase = (0, send_1.SendFactory)();
        await sendUseCase.execute({
            id: String(id),
            degree: send.degree,
        });
        return response.ok({ message: "Email successfully sent" });
    }
    catch (error) {
        console.log(error);
        return response.conflict(error);
    }
}
exports.send = send;
//# sourceMappingURL=send.js.map