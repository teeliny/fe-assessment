import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../data.json';

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

function Subscription() {
  const planQuestions = data.StoredQuestions;
  const [isCapsule, setIsCapsule] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0.00);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [state, setState] = useState<IState>({
    'How do you drink your coffee?': '',
    'What type of coffee?': '',
    'How much would you like?': '',
    'Want us to grind them?': '',
    'How often should we deliver?': ''
  });
  // Get keys and use it to update Form menu
  const stateKeys = Object.keys(state);

  // Function that update the fields for the summary section
  const updateState = (key: string, value: string) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  // Check if capsule is selected or not. This help disabling the grind option
  useEffect(() => {
    if (state['How do you drink your coffee?'] === 'Capsule') {
      setIsCapsule(true);
    }
    else {
      setIsCapsule(false);
    }
  }, [state]);

  // Check if both quantity and duration are supplied
  useEffect(() => {
    if (state['How much would you like?'].length > 0 && state['How often should we deliver?'].length > 0) {
      const quantity: string = state['How much would you like?'];
      const duration = state['How often should we deliver?'];
      const prices = JSON.parse(JSON.stringify(data.prices));
      if (duration.includes('Every week')) {
        setAmount(prices[quantity][duration] * 4);
      }
      if (duration.includes('Every 2 weeks')) {
        setAmount(prices[quantity][duration] * 2);
      }
      if (duration.includes('Every month')) {
        setAmount(prices[quantity][duration] * 1);
      }
    }
  }, [state])

  // Check if correctly filled before enabling button
  useEffect(() => {
    const stateValues = Object.values(state);
    // Remove grind option if capsule is selected
    if (stateValues[0] === 'Capsule') {
      stateValues.splice(3, 1);
    }
    const checkIfFilled = stateValues.every(value => value.length > 0);
    if (checkIfFilled) {
      setIsSubmitting(true);
    }
    else {
      setIsSubmitting(false);
    }
  }, [state])
  console.log(state)
  return (
    <div style={{width: '100vw'}}>
      {openModal && <CheckOutModal state={state} isCapsule={isCapsule} amount={amount} />}
      {/* Subscription Banner section */}
      <CreateWrapper>
        <h2 className="create__header">Create a plan</h2>
        <p className="create__text">Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.</p>
      </CreateWrapper>

      {/* Subscription Steps section */}
      <SubscriptionWrapper>
        <div className="circle__wrapper">
          <hr className="subscription__line"/>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="group__steps">
          {/* Single row */}
          <div className="subscription__step">
            <h1 className="step">01</h1>
            <h4 className="step__header">Pick your coffee</h4>
            <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
          </div>
          {/* Single row */}
          <div className="subscription__step">
            <h1 className="step">02</h1>
            <h4 className="step__header">Choose the frequency</h4>
            <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
          </div>
          {/* Single row */}
          <div className="subscription__step">
            <h1 className="step">03</h1>
            <h4 className="step__header">Receive and enjoy!</h4>
            <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
            world-class coffees curated to provide a distinct tasting experience.</p>
          </div>  
        </div>
      </SubscriptionWrapper>

      {/* Question Section  */}
      <QuestionsWrapper>
        <div className="questions__menu">
          {/* Single Question Menu  */}
          <a href="#question__1" className={`${state[stateKeys[0]].length > 0 ? 'menu__container filled__menu' : 'menu__container'}`}>
            <h4 className="menu__number">01</h4>
            <h4 className="menu__text">Preferences</h4>
          </a>
          <hr className="question__horizontal" />
          {/* Single Question Menu  */}
          <a href="#question__2" className={`${state[stateKeys[1]].length > 0 ? 'menu__container filled__menu' : 'menu__container'}`}>
            <h4 className="menu__number">02</h4>
            <h4 className="menu__text">Bean Type</h4>
          </a>
          <hr className="question__horizontal" />
          {/* Single Question Menu  */}
          <a href="#question__3" className={`${state[stateKeys[2]].length > 0 ? 'menu__container filled__menu' : 'menu__container'}`}>
            <h4 className="menu__number">03</h4>
            <h4 className="menu__text">Quantity</h4>
          </a>
          <hr className="question__horizontal" />
          {/* Single Question Menu  */}
          <a href="#question__4" className={`${state[stateKeys[3]].length > 0 ? 'menu__container filled__menu' : 'menu__container'}`}>
            <h4 className="menu__number">04</h4>
            <h4 className="menu__text">Grind Option</h4>
          </a>
          <hr className="question__horizontal" />
          {/* Single Question Menu  */}
          <a href="#question__5" className={`${state[stateKeys[4]].length > 0 ? 'menu__container filled__menu' : 'menu__container'}`}>
            <h4 className="menu__number">05</h4>
            <h4 className="menu__text">Delivers</h4>
          </a>
        </div>
        <div>
          {planQuestions.map((question, index) => (
            <CompleteQuestion
              id={`question__${index + 1}`}
              key={index}
              inputData={question}
              state={state}
              updateState={updateState}
            />
          ))}
      {/* Subscription Summary Section */}
          <SummaryWrapper>
            <p className="summary__header">
              Order Summary
            </p>
            <h4 className="summary__text">
              "I drink my coffee as 
              <span className="summary__variable"> {state['How do you drink your coffee?'].length > 0 ? state['How do you drink your coffee?'] : '__________'}</span>, with a
              <span className="summary__variable"> {state['What type of coffee?'].length > 0 ? state['What type of coffee?'] : '__________'} </span>type of bean. 
              <span className="summary__variable"> {state['How much would you like?'].length > 0 ? state['How much would you like?'] : '__________'} </span>{`${isCapsule ? '' : 'ground ala'}`}
              {!isCapsule && <span className="summary__variable"> {state['Want us to grind them?'].length > 0 ? state['Want us to grind them?'] : '__________'}</span>}, sent to me 
              <span className="summary__variable"> {state['How often should we deliver?'].length > 0 ? state['How often should we deliver?'] : '__________'} </span>."
            </h4>
          </SummaryWrapper>
          {/* Submit Button Section  */}
          <div className="submit__button">
            <button disabled={!isSubmitting} onClick={() => setOpenModal(true)}>Create my plan!</button>
          </div>
        </div>
      </QuestionsWrapper>
    </div>
  )
}

export default Subscription;

const CreateWrapper = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/assets/plan/desktop/image-hero-blackcup.jpg'});
  background-size: 120vw 100%;
  background-repeat: no-repeat;
  background-position: center; 
  margin: 0 1rem;
  padding: 4rem 1.5rem 7rem 1.5rem;
  border-radius: 10px;
  color: #ffffff;

  .create__header {
    margin-bottom: 2rem;
    color: #ffffff;
  }

  .create__text {
    color: #c9c7c1;
  }
  
  @media(min-width: 401px) {
    padding: 6rem 3rem 6rem 3rem;
    .create__text {
      width: 60%;
    }
  }

  @media(min-width: 769px) {
    margin: 0 2rem;
    padding: 6rem;
    .create__header {
      margin-bottom: 3rem;
    }
    .create__text {
      width: 30%;
      font-size: 20px;
    }
  }
`;

const SubscriptionWrapper = styled.div`
  position: relative;
  background-color: #2C343E;
  color: #ffffff;
  padding: 3rem 1rem;
  margin: 8rem auto;

  .circle__wrapper {
    display: none;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .circle {
    width: 31px;
    height: 31px;
    border-radius: 50%;
    border: 2px solid #0E8784
  }

  .subscription__line {
    display: none;
    position: absolute;
    top: 0.275rem;
    left: 1rem;
    border: 2px solid #FDD6BA;
    width: 66.67%;
  }
  
  .group__steps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .subscription__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .step {
    color: #FDD6BA;
  }

  .step__header {
    margin: 1.5rem auto;
  }

  @media(min-width: 401px) {
  .circle__wrapper {
    display: grid;
  }

  .subscription__line {
    display: block;
  }
    .group__steps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: flex-start;
      gap: 1rem;
    }

    .subscription__step {
      align-items: flex-start;
    }

    .step__header {
      font-size: 20px;
      margin: 1.5rem 0;
    }

    .subscription__step p {
      font-size: 14px;
    }
  }

  @media(min-width: 769px) {
    margin: 8rem 2rem;
    padding: 6rem;

    .circle__wrapper {
      gap: 4rem;
    }

    .subscription__line {
      width: calc(66.67% + 2.5rem);
    }

    .group__steps {
      gap: 4rem;
    }

    .step__header {
      font-size: 28px;
      width: 60%;
    }

    .subscription__step p {
      font-size: 16px;
      width: 60%;
    }
  }
`;

const QuestionsWrapper = styled.div`
  margin: 2rem 1rem;
  display: block;

  
  .questions__menu {
    display: none;
  }
  
  .single__question {
    margin: 5rem auto;
  }

  .question__header {
    color: #83888F;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .question__header__disabled {
    color: #83888F;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.25;
  }

  .question__arrow {
    transform: rotate(180deg);
  }

  .question__options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .single__option {
    height: 140px;
    padding: 1.5rem 1rem;
    background-color: #F4F1EB;
    border-radius: 8px;
  }
  
  .single__option:hover {
    background-color: #FDD6BA;
  }
    
  .selected__option {
    height: 140px;
    padding: 1.5rem 1rem;
    background-color: #0E8784;
    border-radius: 8px;
  }

  .option__header {
    color: #333D4B;
    padding-bottom: 0.5rem;
  }

  .option__value {
    color: #333D4B;
    margin-right: 2rem;
  }

  .submit__button {
    margin: 4rem auto;
    width: 217px;
  }

  .submit__button button {
    font-size: 18px;
  }

  @media(min-width: 401px) {
    .question__options {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    
    .single__option {
      height: 250px;
    }
     .selected__option {
       height: 250px;
     }

    .option__header {
      padding-bottom: 1.5rem;
    }
  }

  @media(min-width: 769px) {
    margin: 10rem;
    display: grid;
    grid-template-columns: 16rem 1fr;
    gap: 7rem;

    .questions__menu {
      display: block;
    }
    
    .menu__container {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      margin: 1rem auto;
      text-decoration: none;
      color: #cdcfd1;
    }

    .filled__menu {
      color: #333D4B;
    }

    .menu__container:first-child {
      margin-top: 0;
    }

    .menu__text:hover {
      color: #83888F;
    }

    .question__horizontal {
      border: 1px solid #83888F;
      opacity: 0.25;
    }

    .single__question:first-child {
      margin-top: 0;
    }
  }

`;

const SummaryWrapper = styled.div`
  background-color: #2C343E;
  padding: 2rem 4rem;

  .summary__header {
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .summary__text {
    color: #ffffff;
  }

  .summary__variable {
    color: #0E8784;
  }
`;

interface IOptions {
  header: string;
  value: string;
}

function QuestionOptions({ inputOptions, updateState, currentQuestion }: { inputOptions: IOptions[]; currentQuestion: string; updateState: (key: string, value: string) => void}) {
  const defaultBackground = ['single__option', 'single__option', 'single__option'];
  const [backgroundShade, setBackgroundShade] = useState<string[]>(defaultBackground);
  const [baseIndex, setBaseIndex] = useState<number | null>(null);

  const handleSelectOption = (index: number, currentQuestion: string, answer: string) => {
    setBaseIndex(index);
    updateState(currentQuestion, answer)
  }

  useEffect(() => {
    if (baseIndex !== null) {
      const newBackground = ['single__option', 'single__option', 'single__option'];
      newBackground[baseIndex] = 'selected__option';
      setBackgroundShade(newBackground);
    }
  }, [baseIndex]);
  
  return (
    <div className="question__options">
      {inputOptions.map((option, index) => (
        <div key={index} className={`${backgroundShade[index]}`} onClick={() => handleSelectOption(index, currentQuestion, option.header)}>
          <h4 className="option__header">
            {option.header}
          </h4>
          <p className="option__value">
            {option.value}
          </p>
        </div>
      ))}
    </div>
  )
}

interface IComplete {
  inputData: IPlanQuestions;
  id: string;
  state: IState;
  updateState: (key: string, value: string) => void
}
function CompleteQuestion({ inputData, id, state, updateState }: IComplete) {
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
      {toggleArrow && <QuestionOptions inputOptions={inputData.options} updateState={updateState} currentQuestion={inputData.question} />}
    </div>
  )
}

function CheckOutModal({ state, isCapsule, amount }: { state: IState; isCapsule: boolean; amount: number }) {
 
  return (
    <ModalWrapper>
      <div className="inner__wrapper">
        <div className="modal__header">
          <h3>Order Summary</h3>
        </div>
        <div className="modal__summary">
          <h4 className="summary__text">
            "I drink my coffee as 
            <span className="summary__variable"> {state['How do you drink your coffee?'].length > 0 ? state['How do you drink your coffee?'] : '__________'}</span>, with a
            <span className="summary__variable"> {state['What type of coffee?'].length > 0 ? state['What type of coffee?'] : '__________'} </span>type of bean. 
            <span className="summary__variable"> {state['How much would you like?'].length > 0 ? state['How much would you like?'] : '__________'} </span>{`${isCapsule ? '' : 'ground ala'}`}
            {!isCapsule && <span className="summary__variable"> {state['Want us to grind them?'].length > 0 ? state['Want us to grind them?'] : '__________'}</span>}, sent to me 
            <span className="summary__variable"> {state['How often should we deliver?'].length > 0 ? state['How often should we deliver?'] : '__________'} </span>."
          </h4>
        </div>
        <p className="modal__subtext">
          Is this correct? You can proceed to checkout or go back
          to plan selection if something is off. Subscription
          discount codes can also be redeemed at the checkout.
        </p>
        <div className="modal__button">
          <h3 className="amount">${amount.toFixed(2)} / mo</h3>
          <button>Checkout</button>
        </div>
        
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  /* position: absolute; */
  z-index: 9;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: #ff0;

  .inner__wrapper {
    border-radius: 0.5rem;
    background-color: #ffffff;
  }

  .modal__header {
    padding: 0 1.5rem;
    background-color: #2C343E;
    border-top: 0.5rem;
  }
  
  .modal__header h3 {
    color: #ffffff;
    padding: 1rem 0;
    text-align: left;
  }

  .modal__summary {
    margin: 3rem 0 1rem 0;
  }

  .summary__text {
    background-color: #ffffff;
    color: #83888F;
  }

  .summary__variable {
    color: #0E8784;
  }

  .modal__subtext {
    padding: 0 1.5rem;
    font-family: Barlow;
  }

  .modal__button {
    display: block;
    padding: 0 1.5rem;
    margin: 3rem auto;
  }

  .modal__button button {
    font-size: 18px;
  }

  @media(min-width: 401px) {

    .inner__wrapper {
      width: 540px;
    }
    
    .modal__header {
      padding: 0 3.5rem;
    }
    .modal__summary {
      padding: 0 3.5rem;
    }
    .modal__subtext {
      padding: 0 3.5rem;
    }
    .modal__button {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
      padding: 0 3.5rem;
      align-items: center;
    }
  }
`;