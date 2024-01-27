import "./App.css";
import { useForm } from "react-hook-form";
import QuestionGroup from "./QuestionGroup";
import { questionsByGroup } from "./scripts/questionsByGroup";
import { COUNTRIES, LANGUAGES } from "./consts/questionKeys";

function App() {
  const { register, handleSubmit, watch, formState, getValues, resetField } =
    useForm();

  const { errors, dirtyFields } = formState;

  const onSubmit = (data) => {
    const dataKeyArr = Object.keys(data);

    const sorted = dataKeyArr.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/) || "0", 10);
      const numB = parseInt(b.match(/\d+/) || "0", 10);

      return numB - numA;
    });

    console.log(dataKeyArr);

    console.log("sorted", sorted);

  };


  const defaultProps = {
    register,
    watch,
    dirtyFields,
    getValues,
    resetField,
    questionsByGroup,
    errors,
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <QuestionGroup {...defaultProps} formKey={LANGUAGES} />
      <QuestionGroup {...defaultProps} formKey={COUNTRIES} />

      <button type="submit" className="mt-10">
        Send form
      </button>
    </form>
  );
}

export default App;
