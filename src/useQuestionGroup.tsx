import Radio from "./types/Radio";
import Checkbox from "./types/Checkbox";
import Text from "./types/Text";

function useQuestionGroup({ watch, questionsByGroup, resetField, formKey, register }) {
  const questions = questionsByGroup ? questionsByGroup[formKey] : null;

  const sectionFieldValues = watch(formKey) || {};
  console.log("formDirtyFields", sectionFieldValues);

  const getKeyWithOrder = (key: string) => {
    const item = questions.find((x) => x.name === key);
    return `${item.order}_${item.name}`;
  };

  const handleRadioClick = (value, name) => {
    if (value === "no") {
      const dependsFeilds = questions
        .filter((x) => x.dependsOn?.includes(name))
        .map((x) => getKeyWithOrder(x.name))
        .forEach((x) => resetField(`${formKey}.${x}`));

      console.log("got dependsFeilds", dependsFeilds);
    }
  };

  const renderQuestionContent = ({ type, question }) => {
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
