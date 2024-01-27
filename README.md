## Smart form in React

This application simplifies the process of constructing forms by allowing you to focus solely on the structure of the form, without the need to deal with complex logic. The form is managed through a straightforward editing of a form object. 

Technologies used: React+Vite and React Hook Form.

## Getting Started
To get started, utilize the questionsByGroup object, which acts as a central hub for organizing your form questions.

### For example:

```javascript
export const questionsByGroup = {
  [LANGUAGES]: Q_Language,
  [COUNTRIES]: Q_Country,
};
``` 

In the example above, questionsByGroup is an object that categorizes form questions based on different groups, such as languages and countries.

Adding Questions
To add new questions to your form, follow the simple process of editing the appropriate object within questionsByGroup. Here's an example:

```javascript
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

```


<img src="https://github.com/cyoni/smart-structured-form/assets/44746539/0133d8c5-bf59-4bcb-a957-8ca7456dbd03" height=600>
