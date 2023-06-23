"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formQuestionsBuilder = void 0;
function formQuestionsBuilder(questions) {
    return questions.map(({ title, type, options }, index) => ({
        createItem: {
            item: {
                title,
                questionItem: {
                    question: {
                        required: true,
                        choiceQuestion: {
                            type,
                            options: options,
                        },
                    },
                },
            },
            location: { index },
        },
    }));
}
exports.formQuestionsBuilder = formQuestionsBuilder;
//# sourceMappingURL=form-questions-builder.js.map