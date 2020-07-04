import React from "react";
import { Button } from "react-bootstrap";
const Buttons = props => {
  let classes = props.classes;
  let clickHandler = props.clickHandler;
  return (
    <React.Fragment>
      <Button className={classes} onClick={clickHandler} />
    </React.Fragment>
  );
};

export default Buttons;
