import "./App.css";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import QuestionGroup from "./QuestionGroup";
import { questionsByGroup } from "./scripts/questionsByGroup";
import { COUNTRIES, LANGUAGES } from "./consts/questionKeys";

function App() {
  const SignUpSchema = z.object({
    firstname: z.string().min(1).max(18),
    email: z.string().email(),
    english__code: z.boolean(),
  });

  const { register, handleSubmit, watch, formState, getValues, resetField } =
    useForm();

  const { errors, dirtyFields } = formState;

  const onSubmit = (data) => console.log(data);

  console.log("errors", errors);

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
      {/* <QuestionGroup {...defaultProps} formKey={COUNTRIES} /> */}

      <button type="submit" className="mt-10">Send form</button>
    </form>
  );
}

export default App;
