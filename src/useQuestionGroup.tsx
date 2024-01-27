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

  const getKeyWithOrder = (key: string) => {
    const item = questions.find((x) => x.name === key);
    return `${item.order}_${item.name}`;
  };

  const handleRadioClick = (value: "yes" | "no", name: string) => {
    if (value === "no") {
      questions
        .filter((q: Question) => q.dependsOn?.includes(name))
        .map((q: Question) => getKeyWithOrder(q.name))
        .forEach((name: string) => resetField(`${formKey}.${name}`));
    }
  };

  const renderQuestionContent = ({
    type,
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
            getKeyWithOrder={getKeyWithOrder}
            register={register}
            handleRadioClick={handleRadioClick}
          />
        );

      case "checkbox":
        return (
          <Checkbox
            question={question}
            keyPrefix={formKey}
            getKeyWithOrder={getKeyWithOrder}
            register={register}
          />
        );

      case "text":
        return (
          <Text
            question={question}
            keyPrefix={formKey}
            getKeyWithOrder={getKeyWithOrder}
            register={register}
          />
        );

      default:
        return <div>field {type} is not configured.</div>;
    }
  };

  return {
    getKeyWithOrder,
    handleRadioClick,
    renderQuestionContent,
    sectionFieldValues,
    questions,
  };
}

export default useQuestionGroup;
