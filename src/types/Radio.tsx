import React from "react";

function Radio({
  question,
  keyPrefix,
  getKeyWithOrder,
  register,
  handleRadioClick,
}) {
  return (
    <div className="flex gap-4">
      {question.options.map((value, i) => {
        const key = `${keyPrefix}.${getKeyWithOrder(question.name)}`;
        const id = `field-${value}`
        return (
          <span key={i} className="flex gap-1 items-center">
            <input
              type="radio"
              id={id}
              value={value}
              {...register(key, { required: question.required })}
              onClick={() => handleRadioClick(value, question.name)}
            />
            <label htmlFor={id}>{value}</label>
          </span>
        );
      })}
    </div>
  );
}

export default Radio;
