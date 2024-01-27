import Radio from "./types/Radio";
import Checkbox from "./types/Checkbox";
import Text from "./types/Text";

function useQuestionGroup({
  watch,
  questionsByGroup,
  resetField,
  formKey,
  register,
}) {
  const questions = questionsByGroup ? questionsByGroup[formKey] : null;

  const sectionFieldValues = watch(formKey) || {};

  const handleRadioClick = (value: "yes" | "no", name: string) => {
    if (value === "no") {
      console.log(
        "Object.values(questions)",
        Object.values(questions),
        "name",
        name
      );
      Object.entries(questions).forEach(([key, q]) => {
        if (q.dependsOn?.includes(name)) {
          resetField(`${formKey}.${key}`);
        }
      });
    }
  };

  const renderQuestionContent = ({
    type,
    name,
    question,
  }: {
    type: string;
    question: Question;
  }) => {
    switch (type) {
      case "radio":
        return (
          <Radio
            question={question}
            keyPrefix={formKey}
            name={name}
            register={register}
            handleRadioClick={handleRadioClick}
          />
        );

      case "checkbox":
        return (
          <Checkbox
            question={question}
            keyPrefix={formKey}
            name={name}
            register={register}
          />
        );

      case "text":
        return (
          <Text
            question={question}
            keyPrefix={formKey}
            name={name}
            register={register}
          />
        );

      default:
        return <div>field {type} is not configured.</div>;
    }
  };

  return {
    handleRadioClick,
    renderQuestionContent,
    sectionFieldValues,
    questions,
  };
}

export default useQuestionGroup;
