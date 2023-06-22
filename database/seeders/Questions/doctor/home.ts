import { ProcessQuestions } from "./process";
import { ProgramQuestions } from "./program";

export const HomeQuestions = [
  {
    chatbot_id: 75,
    node_chatbot_id: 2,
    response: true,
    question: "Cronograma",
    title:
      "O cronograma do processo seletivo, Link para ao calendário *www.calendario.com.br*",
  },
  {
    chatbot_id: 76,
    node_chatbot_id: 2,
    response: false,
    question: "Processo seletivo",
    title: "",
  },
  {
    chatbot_id: 77,
    node_chatbot_id: 2,
    response: false,
    question: "Programa",
    title: "",
  },
  {
    chatbot_id: 78,
    node_chatbot_id: 2,
    response: true,
    question: "Contato",
    title:
      "Se tiver interesse em saber mais sobre o processo, ou ainda ficou alguma dúvida sobre nosso programa, entre em contato conosco no canal",
  },
  ...ProcessQuestions,
  ...ProgramQuestions,
];
