import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  const { clicked } = props;
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(" ")}
      onClick={clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
