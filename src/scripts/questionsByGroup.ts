import { COUNTRIES, LANGUAGES } from "../consts/questionKeys";

export const questionsByGroup = {
  [LANGUAGES]: [
    {
      question: "Do you speak any languages?",
      type: "radio",
      name: "speak_languages",
      options: ["yes", "no"],
      required: "Please fill this field.",
      order: 1,
    },
    {
      question: "Which languages?",
      type: "checkbox",
      name: "which_languages",
      options: ["hebrew", "english", "german", "franch"],
      dependsOn: ["speak_languages"],
      order: 2,
    },
    {
      question: "Do you plan to study more languages?",
      name: "languages_explain",
      type: "radio",
      options: ["yes", "no"],
      dependsOn: ["speak_languages"],
      required: true,
      order: 3,
    },
    {
      question: "Please explain",
      type: "text",
      name: "languages_explain_input",
      options: null,
      dependsOn: ["speak_languages", "languages_explain"],
      required: true,
      order: 4,
    },
  ],
  [COUNTRIES]: [
    {
      question: "Which countries are you going?",
      type: "checkbox",
      name: "visiting_countries",
      options: ["USA", "Germany", "Italy", "Israel"],
      order: 1,
    },
  ]
};
