import { CalendarQuestions } from "./calendar";
import { DisciplineQuestions } from "./discipline";
import { EventQuestions } from "./event";
import { FacultyQuestions } from "./faculty";
import { HourQuestions } from "./hour";
import { ProcessQuestions } from "./process";
import { TutorialQuestions } from "./tutorials";

export const HomeQuestions = [
  {
    chatbot_id: 5,
    node_chatbot_id: 1,
    response: false,
    question: "Calendário letivo",
    title:
      "O Calendário Letivo é composto por datas fixadas para o cumprimento do semestre letivo no Programa de Pós Graduação em Educação. Escolha a opção de interesse:",
  },
  {
    chatbot_id: 6,
    node_chatbot_id: 1,
    response: false,
    question: "Corpo docente",
    title:
      "Nesta aba, você encontra informações sobre a direção da Faculdade de Formação de Professores da UERJ, a coordenação do Programa, os professores e a representação estudantil. Conheça um pouco mais sobre eles:",
  },
  {
    chatbot_id: 7,
    node_chatbot_id: 1,
    response: false,
    question: "Disciplinas",
    title:
      "Aqui você encontrará todas as disciplinas que compõem seu curso de pós-graduação no semestre, sejam elas, obrigatórias ou eletivas. A cada semestre, você escolhe as disciplinas eletivas e obrigatórias paracursar. Você pode ler um pouco mais sobre cada uma no link: http://ppgedu.org/estrutura",
  },
  {
    chatbot_id: 8,
    node_chatbot_id: 1,
    response: false,
    question: "Eventos",
    title:
      "A área de Eventos é composta por diversas atividades acadêmicas referentes a nossa área de estudos e pesquisas, organizadas pelo nosso Programa, pela UERJ ou por outras instituições externas. Fique atento para não perder nada e, periodicamente, consulte a área de eventos acessando os links dos eventos.",
  },
  {
    chatbot_id: 9,
    node_chatbot_id: 1,
    response: false,
    question: "Horários",
    title:
      "O planejamento das aulas da pós-graduação é formulado anualmente, de modo que você pode se programar para cursar as disciplinas obrigatórias e eletivas que são do seu interesse, o que facilita a obtenção dos créditos obrigatórios para a conclusão do seu curso.  Você pode acessar o calendário de aula no link: http://ppgedu.org/horarios  Além das disciplinas, é obrigatório que você participe, semanalmente, dos Encontros de Pesquisa, reuniões do grupo de pesquisa lideradas pelo seu orientador, e que são oferecidos, anualmente, com horário fixo.",
  },
  {
    chatbot_id: 10,
    node_chatbot_id: 1,
    response: false,
    question: "Instruções e tutorias",
    title:
      "Esse espaço é destinado à facilitação da gestão acadêmica de processos burocráticos que envolvem a Secretaria do Programa. Caso sua dúvida persista, entre em contato com o nosso canal de comunicação.",
  },
  {
    chatbot_id: 11,
    node_chatbot_id: 1,
    response: false,
    question: "Processo seletivo de bolsas",
    title:
      "O Programa concede bolsas de mestrado e de doutorado para os estudantes que atendem às normas das agências financiadoras das bolsas, com duração de até 24 meses (mestrado) e 48 meses (doutorado).",
  },
  ...CalendarQuestions,
  ...FacultyQuestions,
  ...DisciplineQuestions,
  ...EventQuestions,
  ...HourQuestions,
  ...TutorialQuestions,
  ...ProcessQuestions,
];
