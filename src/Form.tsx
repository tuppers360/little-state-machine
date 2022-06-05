import React from "react";
import { updateFirstLastName } from "./yourDetailsAction";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

type FormValues = {
  firstname: string;
  lastname: string;
};

export default function Form() {
  const { handleSubmit, register } = useForm<FormValues>();
  const { state, actions } = useStateMachine({
    updateFirstLastName
  });

  const onSubmit = (data: FormValues) => {
    actions.updateFirstLastName(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name:</label>
        <input
          name="firstname"
          placeholder="First name"
          ref={register}
          defaultValue={state.yourDetails.firstname}
        />
        <label>Last name:</label>
        <input
          name="lastname"
          placeholder="Last name"
          ref={register}
          defaultValue={state.yourDetails.lastname}
        />
        <input type="submit" />
      </form>
    </section>
  );
}
