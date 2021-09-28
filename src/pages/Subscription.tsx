import React from 'react';
import styled from 'styled-components';

function Subscription() {
  return (
    <div>
      This is subscription
      <CreateWrapper>
        <h2 className="create__header">Create a plan</h2>
        <p className="create__text">Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.</p>
      </CreateWrapper>

      {/* Another section */}
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
    margin: 0 2rem;
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
    }

    .subscription__step p {
      font-size: 16px;
    }
  }
`;
