import styled from 'styled-components';

export const CreateWrapper = styled.div`
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

export const SubscriptionWrapper = styled.div`
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

export const QuestionsWrapper = styled.div`
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

export const SummaryWrapper = styled.div`
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
