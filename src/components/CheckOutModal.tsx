import React from "react";
import styled from 'styled-components';

interface IState {
    [key: string]: string
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

export default CheckOutModal;