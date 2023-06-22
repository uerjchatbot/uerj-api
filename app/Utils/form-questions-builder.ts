import { FormQuestion, OptionsFormAPI, RequestFormAPI } from "App/Dtos/Form";

export function formQuestionsBuilder(
  questions: FormQuestion[]
): RequestFormAPI[] {
  return questions.map(({ title, type, options }, index) => ({
    createItem: {
      item: {
        title,
        questionItem: {
          question: {
            required: true,
            choiceQuestion: {
              type,
              options: options as OptionsFormAPI[],
            },
          },
        },
      },
      location: { index },
    },
  }));
}
