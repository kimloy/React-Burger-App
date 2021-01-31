import React from "react";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  const { show } = props;
  return (
    <>
      <Backdrop show={show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
