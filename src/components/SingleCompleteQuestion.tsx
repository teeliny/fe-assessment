import React, { useState, useEffect } from 'react';
import QuestionOptions from './QuestionOptions';

interface IPlanQuestions {
    question: string;
    options: {
        header: string;
        value: string;
    }[];
}
interface IState {
    [key: string]: string
}

interface IComplete {
  inputData: IPlanQuestions;
  id: string;
  state: IState;
  currentPrices: number[];
  updateState: (key: string, value: string) => void
}
function SingleCompleteQuestion({ inputData, id, state, currentPrices, updateState }: IComplete) {
  const [toggleArrow, setToggleArrow] = useState<boolean>(false);
  const [checkDisable, setCheckDisable] = useState<boolean>(false);
  
  useEffect(() => {
    if (state['How do you drink your coffee?'] === 'Capsule' && inputData.question === 'Want us to grind them?') {
      setCheckDisable(true);
      setToggleArrow(false);
    }
    else {
      setCheckDisable(false);
    }
  }, [inputData.question, state]);

  return (
    <div id={id} className="single__question">
      <div className={checkDisable ? 'question__header__disabled' : 'question__header'} onClick={() => {
        if (checkDisable) setToggleArrow(false)
        else setToggleArrow(!toggleArrow)
      }}>
        <h4>{inputData.question}</h4>
        <img
          className={toggleArrow ? "question__arrow" : ""}
          src={`${process.env.PUBLIC_URL}/assets/plan/desktop/icon-arrow.svg`}
          alt="arrow" />
      </div>
      {toggleArrow && <QuestionOptions inputOptions={inputData.options} updateState={updateState} currentQuestion={inputData.question} currentPrices={currentPrices} />}
    </div>
  )
}

export default SingleCompleteQuestion;
