import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import "./UserInput.css";

const UserInput = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const userChangeHandler = (event) => {
    setUsernameInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        header: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
        action: "Okay",
      });

      return;
    }

    if (+ageInput < 1) {
      setError({
        header: "Invalid Age",
        message: "Please enter a valid age (> 0)",
        action: "Okay",
      });

      return;
    }

    const userData = {
      id: Math.random().toString(),
      username: usernameInput,
      age: +ageInput,
    };

    //To store entered inputs into state
    props.onAddUser(userData);

    //To clear input fields
    setUsernameInput("");
    setAgeInput("");
  };

  const removeModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          header={error.header}
          message={error.message}
          action={error.action}
          onRemoveModal={removeModalHandler}
        ></ErrorModal>
      )}
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input
            type="text"
            value={usernameInput}
            onChange={userChangeHandler}
          ></input>

          <label>Age (Years)</label>
          <input
            type="number"
            value={ageInput}
            onChange={ageChangeHandler}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
