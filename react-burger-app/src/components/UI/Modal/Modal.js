import React, { Component } from "react";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== props.show ||
  //     nextProps.children !== props.children
  //   );
  // }

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
