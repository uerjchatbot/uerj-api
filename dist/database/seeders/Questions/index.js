"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Question_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Question"));
const doctor_1 = require("./doctor");
const egress_1 = require("./egress");
const master_1 = require("./master");
const student_1 = require("./student");
class default_1 extends Seeder_1.default {
    async run() {
        await Question_1.default.createMany([
            {
                chatbot_id: 0,
                node_chatbot_id: null,
                response: false,
                question: "Inicio",
                title: "Olá, como vai? Você acessou o portal online do *Programa de Pós Graduação em Educação - Processos Formativos e Desigualdades Sociais da Faculdade de Formação de Professores da UERJ*. Aqui você encontra informações sobre os cursos de mestrado e doutorado, bolsas, editais e tutoriais. Selecione a opção referente ao seu título de ingresso no PPGEdu:",
            },
            {
                chatbot_id: 1,
                node_chatbot_id: 0,
                response: false,
                question: "Aluno",
                title: "Olá Aluno PPGEdu, Seja bem-vindo ao nosso sistema de comunicação offline, seu auxiliar estudantil na pós-graduação. Estamos à disposição sempre que precisar. Escolha entre as opções abaixo:",
            },
            {
                chatbot_id: 2,
                node_chatbot_id: 0,
                response: false,
                question: "Candidato de Doutorado",
                title: "Olá, ficamos felizes porque você nos procurou para obter informações sobre o Curso de Doutorado do nosso Programa  de Pós-Graduação. Estamos a sua disposição para prestar mais informações e tirar as suas dúvidas. Fique sempre atento às datas dos nossos processos seletivos e procure conhecer ao máximo o que podemos lhe oferecer. Aqui no chat, temos as mais diversas informações sobre PPGEdu. Seja bem-vindo.",
            },
            {
                chatbot_id: 3,
                node_chatbot_id: 0,
                response: false,
                question: "Candidato de Mestrado",
                title: "Olá, ficamos felizes porque você nos procurou para obter informações sobre o Curso de Mestrado do nosso Programa  de Pós-Graduação. Estamos a sua disposição para prestar mais informações e tirar as suas dúvidas. Fique sempre atento às datas dos nossos processos seletivos e procure conhecer ao máximo o que podemos lhe oferecer. Aqui no chat, temos as mais diversas informações sobre PPGEdu. Seja bem-vindo.",
            },
            {
                chatbot_id: 4,
                node_chatbot_id: 0,
                response: false,
                question: "Egresso",
                title: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Aqui no chat, temos as mais diversas informações.`,
            },
            ...student_1.StudentQuestions,
            ...doctor_1.DoctorQuestions,
            ...master_1.MasterQuestions,
            ...egress_1.EgressQuestions,
        ]);
    }
}
exports.default = default_1;
default_1.environment = ["dev", "staging", "test"];
//# sourceMappingURL=index.js.map