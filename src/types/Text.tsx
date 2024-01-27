import React from "react";

function Text({ question, keyPrefix, getKeyWithOrder, register }) {
  return (
    <input
      {...register(`${keyPrefix}.${getKeyWithOrder(question.name)}`, {
        required: question.required,
      })}
    />
  );
}

export default Text;
