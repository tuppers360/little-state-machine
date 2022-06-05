import * as React from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import Form from "./Form";
import "./styles.css";

createStore({
  yourDetails: {
    firstname: "bill",
    lastname: "luo"
  }
});

export default function App() {
  return (
    <StateMachineProvider>
      <div className="App">
        <h1>Little State Machine</h1>
        <Form />
      </div>
    </StateMachineProvider>
  );
}
