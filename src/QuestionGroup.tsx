import useQuestionGroup from "./useQuestionGroup";

function QuestionGroup({
  register,
  formKey,
  questionsByGroup,
  dirtyFields,
  getValues,
  watch,
  resetField,
  errors,
}) {
  const {
    getKeyWithOrder,
    renderQuestionContent,
    questions,
    sectionFieldValues,
  } = useQuestionGroup({
    watch,
    questionsByGroup,
    resetField,
    formKey,
    register,
  });

  return (
    <div>
      {questions ? (
        questions.map((question, i) => {
          if (
            !question.dependsOn ||
            (question.dependsOn &&
              question.dependsOn.every(
                (name) => sectionFieldValues[getKeyWithOrder(name)] === "yes"
              ))
          ) {
            const questionError = errors?.[formKey]
              ? errors[formKey][getKeyWithOrder(question.name)]
              : null;
            return (
              <div key={i}>
                <h3 className="font-bold text-lg">{question.question}</h3>
                {renderQuestionContent({ type: question.type, question })}
                <div style={{ color: "red" }}>
                  {questionError
                    ? questionError.message || "This field is required."
                    : null}
                </div>
              </div>
            );
          }
        })
      ) : (
        <div>error: key {formKey} does not exist </div>
      )}
    </div>
  );
}

export default QuestionGroup;
