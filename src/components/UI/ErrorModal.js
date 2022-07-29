import React from "react";

import Button from "./Button";
import Card from "./Card";

import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div  onClick={props.onRemoveModal} className="backdrop">
      <Card className="modal">
        <header className="header">
          <h2>{props.header}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <div onClick={props.onRemoveModal} className="actions">
          <Button>{props.action}</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
