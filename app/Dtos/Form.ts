import { Base } from "./Base";

export interface Form extends Base {
  title: string;
  form_id: string;
  form_url: string;
}

export type Create = Omit<Form, "id" | "created_at" | "updated_at">;
export type Update = Partial<Omit<Form, "created_at" | "updated_at">>;

export type Send = {
  degree: "master" | "doctor";
};

export interface SendBody {
  id: string;
  degree: "master" | "doctor";
}

export interface FormQuestionOption {
  value: string;
}

export interface FormQuestion {
  type: "CHECKBOX" | "RADIO";
  title: string;
  options: FormQuestionOption[];
}

export interface FormBuild {
  questions: FormQuestion[];
  title: string;
}

// FROM GOOGLE FORMS API
export interface CreateFormAPI {
  title: string;
  documentTitle?: string;
}

export interface CreateFormRequestAPI {
  info: CreateFormAPI;
}

export interface CreateFormResponseAPI {
  formId: string;
  info: CreateFormAPI;
  revisionId: string;
  responderUri: string;
}

export type QuestionOptionType = "CHECKBOX" | "RADIO";

export interface OptionsFormAPI {
  value: string;
}

export interface FormQuestion {
  title: string;
  type: QuestionOptionType;
  options: OptionsFormAPI[];
}

interface ChoiceQuestionFormAPI {
  type: QuestionOptionType;
  options: OptionsFormAPI[];
}

interface QuestionFormAPI {
  // textQuestion?: TextQuestionFormAPI;
  choiceQuestion?: ChoiceQuestionFormAPI;
}

interface QuestionItemFormAPI {
  question: QuestionFormAPI;
}

export interface ItemFormAPI {
  title: string;
  description?: string;
  questionItem: QuestionItemFormAPI;
}

interface LocationFormAPI {
  index: number;
}

export interface CreateItemFomAPI {
  item: ItemFormAPI;
  location: LocationFormAPI;
}

export interface RequestFormAPI {
  createItem?: CreateItemFomAPI;
}

export interface CreateQuestions {
  formId: string;
  requests: RequestFormAPI[];
}

export interface FormResponse {
  formId: string;
  revisionId: string;
  responderUri: string;
  linkedSheetId: string;
}
