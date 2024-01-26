import React, { useState } from "react";

function Question({
  register,
  formKey,
  dirtyFields,
  getValues,
  watch,
  resetField,
}) {
  const sectionFieldValues = watch(formKey) || {};

  console.log("formDirtyFields", sectionFieldValues);

  const schema = [
    {
      question: "do you speak languages?",
      type: "radio",
      name: "speak_languages",
      options: ["yes", "no"],
      required: true,
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
  ];

  const keyPrefix = formKey;

  const getKeyWithOrder = (key) => {
    const item = schema.find((x) => x.name === key);
    return `${item.order}_${item.name}`;
  };

  const handleRadioClick = (value, name) => {
    if (value === "no") {
      const dependsFeilds = schema
        .filter((x) => x.dependsOn?.includes(name))
        .map((x) => getKeyWithOrder(x.name))
        .forEach((x) => resetField(`${keyPrefix}.${x}`));

      console.log("got dependsFeilds", dependsFeilds);
    }
  };

  return (
    <div>
      {schema.map((q, i) => {
        if (
          !q.dependsOn ||
          (q.dependsOn &&
            q.dependsOn.every(
              (x) => sectionFieldValues[getKeyWithOrder(x)] === "yes"
            ))
        ) {
          return (
            <div key={i}>
              <h3>{q.question}</h3>
              {q.type === "checkbox" ? (
                <>
                  <div>{q.question}</div>
                  {q.options.map((qc, checkboxIndex) => {
                    return (
                      <span key={checkboxIndex}>
                        <input
                          type="checkbox"
                          {...register(
                            `${keyPrefix}.${getKeyWithOrder(q.name)}.${qc}`
                          )}
                        />
                        <span>{qc}</span>
                      </span>
                    );
                  })}
                </>
              ) : q.type === "radio" ? (
                <>
                  {q.options.map((qc, radioIndex) => {
                    const key = `${keyPrefix}.${getKeyWithOrder(q.name)}`;

                    return (
                      <span key={radioIndex}>
                        <input
                          type="radio"
                          id={`field-${qc}`}
                          value={qc}
                          {...register(key, { required: q.required })}
                          onClick={() => handleRadioClick(qc, q.name)}
                        />
                        <span>{qc}</span>
                      </span>
                    );
                  })}
                </>
              ) : q.type === "text" ? (
                <input
                  {...register(`${keyPrefix}.${getKeyWithOrder(q.name)}`, {
                    required: q.required,
                  })}
                />
              ) : null}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Question;
