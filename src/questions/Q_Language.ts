// LANGUGAES
const SPEAK_LANGUAGES = "1#speak_languages";
const WHICH_LANG = "2#which_languages";
const LEARN_MORE = "3#languages_explain";
const LANG_FREE_TEXT = "4#languages_explain_input";

export const Q_Language = {
  [SPEAK_LANGUAGES]: {
    question: "Do you speak any languages?",
    type: "radio",
    options: ["yes", "no"],
    required: "Please fill this field.",
  },
  [WHICH_LANG]: {
    question: "Which languages?",
    type: "checkbox",
    options: ["hebrew", "english", "german", "franch"],
    dependsOn: [SPEAK_LANGUAGES],
  },
  [LEARN_MORE]: {
    question: "Do you plan to study more languages?",
    type: "radio",
    options: ["yes", "no"],
    dependsOn: [SPEAK_LANGUAGES],
    required: true,
  },
  [LANG_FREE_TEXT]: {
    question: "Please explain",
    type: "text",
    options: null,
    dependsOn: [SPEAK_LANGUAGES, LEARN_MORE],
    required: true,
  },
};
