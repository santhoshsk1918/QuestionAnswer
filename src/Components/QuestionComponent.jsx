import React, { useState } from "react";
import { Container, Card, ButtonGroup, Button } from "react-bootstrap";
import RadioButtonGroups from "./RadioButtonGroups";

let initalQuestions = {
  1: {
    question: "Question 1",
    options: {
      a: "Options 1A",
      b: "Options 1B",
      c: "Options 1C",
      d: "Options 1D"
    },
    answer: "a",
    selectedOption: ""
  },
  2: {
    question: "Question 2",
    options: {
      a: "Options 2A",
      b: "Options 2B",
      c: "Options 3C",
      d: "Options 4D"
    },
    answer: "d",
    selectedOption: ""
  }
};

let currentQuestionNumber = 1;

const QuestionComponent = props => {
  const [questions, setQuestions] = useState(initalQuestions);
  const [quesitonNumber, setQuesiton] = useState(currentQuestionNumber);
  const currentQuestionSet = questions[quesitonNumber];
  const { question, options, selectedOption } = currentQuestionSet;

  const onChangeRadio = e => {
    e.persist();
    setQuestions(prevState => {
      let state = JSON.parse(JSON.stringify(prevState));
      state[quesitonNumber] = {
        ...state[quesitonNumber],
        selectedOption: e.target.value
      };
      return state;
    });
  };

  const submitAnswer = () => {
    if (
      currentQuestionSet.answer === questions[quesitonNumber].selectedOption
    ) {
      window.alert(`Bingo!! Correct Answer`);
    } else {
      window.alert(
        `OOPS!! Wrong the correct Answer is ${
          currentQuestionSet.options[currentQuestionSet.answer]
        }`
      );
    }
  };

  const nextQuestion = () => {
    setQuesiton(++currentQuestionNumber);
  };

  const prevQuestion = () => {
    if (currentQuestionNumber !== 1) {
      setQuesiton(--currentQuestionNumber);
    }
  };

  const showAnswer = () => {
    window.alert(currentQuestionSet.options[currentQuestionSet.answer]);
  };
  return (
    <React.Fragment>
      <Container>
        <Card>
          <Card.Header>{question}</Card.Header>
          <Card.Body>
            <RadioButtonGroups
              options={options}
              id={"radio"}
              selectedOption={selectedOption}
              changeRadio={onChangeRadio.bind()}
            />
          </Card.Body>
          <Card.Footer>
            <ButtonGroup aria-label="Button">
              <Button
                variant="secondary"
                onClick={prevQuestion}
                disabled={quesitonNumber === 1 ? true : false}
              >
                Prev
              </Button>

              <Button
                variant="success"
                onClick={submitAnswer}
                className={"ml-1"}
              >
                Submit
              </Button>

              <Button className={"ml-1"} variant="danger" onClick={showAnswer}>
                Show Answer
              </Button>

              <Button
                className={"ml-1"}
                variant="secondary"
                onClick={nextQuestion}
                disabled={
                  quesitonNumber === Object.keys(questions).length
                    ? true
                    : false
                }
              >
                Next
              </Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default QuestionComponent;
