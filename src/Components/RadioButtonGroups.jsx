import React from "react";
import { Form } from "react-bootstrap";

const RadioButtonGroups = props => {
  const KeySet = Object.keys(props.options);
  const selectedOption = props.selectedOption;
  const changeRadio = props.changeRadio;
  return (
    <>
      {KeySet.map(item => (
        <Form.Check
          key={item}
          value={item}
          label={props.options[item]}
          type="radio"
          checked={selectedOption === item}
          onChange={changeRadio}
        />
      ))}
    </>
  );
};

export default RadioButtonGroups;
