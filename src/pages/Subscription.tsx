import React, { useState, useEffect } from 'react';
import { CreateWrapper, SubscriptionWrapper, QuestionsWrapper, SummaryWrapper } from '../components/styles/subscriptions.style';
import CheckOutModal from '../components/CheckOutModal';
import SingleCompleteQuestion from '../components/SingleCompleteQuestion';
import data from '../data.json';

interface IState {
    [key: string]: string
}

function Subscription() {
  const planQuestions = data.StoredQuestions;
  const [isCapsule, setIsCapsule] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0.00);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentPrices, setCurrentPrices] = useState<number[]>([7.20, 9.60, 12.00]);
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

  // Get the prices for the quantity selected
  useEffect(() => {
    if (state['How much would you like?'].length > 0) {
      const quantity = state['How much would you like?'];
      const prices = JSON.parse(JSON.stringify(data.prices));
      const currentPlan = prices[quantity];
      const presentValues: number[] = Object.values(currentPlan);
      setCurrentPrices(presentValues);
    }
  }, [state])

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
  }, [state]);

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
  }, [state]);

  return (
    <div>
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
            <SingleCompleteQuestion
              id={`question__${index + 1}`}
              key={index}
              inputData={question}
              state={state}
              updateState={updateState}
              currentPrices={currentPrices}
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
            <button
              disabled={!isSubmitting}
              onClick={() => {
                setOpenModal(true);
                window.scrollTo(0, 0);
              }}
            >Create my plan!</button>
          </div>
        </div>
      </QuestionsWrapper>
    </div>
  )
}

export default Subscription;
