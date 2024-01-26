import { useState } from "react";
import "./App.css";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Question from "./Question";

function App() {
  const [count, setCount] = useState(0);

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
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* <div>
        <label>firstname:</label>
        <input {...register("firstname", { required: true })} />
      </div>
      <div>
        <label>email:</label>
        <input {...register("email")} />
      </div> */}

      <div>
        <div>
          <Question
            register={register}
            watch={watch}
            formKey="languages"
            dirtyFields={dirtyFields}
            getValues={getValues}
            resetField={resetField}
          />

          <Question
            register={register}
            watch={watch}
            formKey="example_another_question"
            dirtyFields={dirtyFields}
            getValues={getValues}
            resetField={resetField}
          />

          {/* <input type="radio" name="yes-1" />
          <label htmlFor="yes-1">Yes</label>
          <input type="radio" name="no-1" />
          <label htmlFor="no-1">No</label>
          <div>
            <input type="checkbox" name="Hebrew" value="Hebrew" />
            <label>Hebrew</label>
            <input type="checkbox" name="English" value={"English"} />
            <label>English</label>
            <input type="checkbox" name="German" value="German" />
            <label>German</label>

            <div>
              <p>Sub Question: Do you plan to learn more languages?</p>
              <div>
                <input type="radio" name="yes-sub-1" />
                <label htmlFor="yes-sub-1">Yes</label>
                <input type="radio" name="no-sub-1" />
                <label htmlFor="no-sub-1">No</label>
              </div>

              <p>
                Please explain: 
                <input />
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <button type="submit">send form</button>
    </form>
  );
}

export default App;
