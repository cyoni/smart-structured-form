import { FieldValues, UseFormRegister } from "react-hook-form";
import useQuestionGroup from "./useQuestionGroup";

interface IProps {
  register: UseFormRegister<FieldValues>;
  formKey: string;
  questionsByGroup;
  watch;
  resetField;
  errors;
}

function QuestionGroup({
  register,
  formKey,
  questionsByGroup,
  watch,
  resetField,
  errors,
}: IProps) {
  const {
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
    <div className="border mt-4 p-4 rounded-md">
      {questions ? (
        Object.entries(questions).map(([name, question], i) => {
          if (
            !question.dependsOn ||
            question.dependsOn?.every(
              (name: string) => sectionFieldValues[name] === "yes"
            )
          ) {
            const questionError = errors?.[formKey]
              ? errors[formKey][name]
              : null;
            return (
              <div key={i} className="[&:not(:first-child)]:mt-3">
                <h3 className="font-bold text-lg">{question.question}</h3>
                {renderQuestionContent({ type: question.type, name, question })}
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
