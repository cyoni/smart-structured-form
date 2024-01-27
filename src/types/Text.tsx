import React from "react";

function Text({ question, keyPrefix, name, register }) {
  return (
    <input
      {...register(`${keyPrefix}.${name}`, {
        required: question.required,
      })}
    />
  );
}

export default Text;
