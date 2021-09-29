import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin: 0 1.5rem;


  @media(min-width: 401px) {
    margin: 0 2.5rem;
  }

  @media(min-width: 769px) {
    margin: 0 5rem;
  }
`;

export const BannerWrapper = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/assets/home/mobile/image-hero-coffeepress.jpg'});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 1.5rem;
  color: #ffffff;

  .banner__header {
    text-align: center;
  }
  
  .banner__text {
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 3.5rem;
    color: #FEFCF7;
    font-family: Barlow;
  }

  .banner__button {
    font-size: 1.5rem;
  }

  @media(min-width: 401px) {
    background-image: url(${process.env.PUBLIC_URL + '/assets/home/tablet/image-hero-coffeepress.jpg'});
    align-items: flex-start;
    padding: 6rem 6rem;
    
    .banner__header {
      text-align: left;
      width: 60%;
    }
    
    .banner__text {
      text-align: left;
      width: 70%;
    }
  }


  @media(min-width: 769px) {
    background-image: url(${process.env.PUBLIC_URL + '/assets/home/desktop/image-hero-coffeepress.jpg'});
    padding: 6rem 6rem;

    .banner__header {
      font-size: 4rem;
      width: 30%;
      line-height: 1.05;
    }

    .banner__text {
      width: 30%;
      font-size: 1rem;
      margin-bottom: 5rem;
    }
  }
`;

export const CollectionWrapper = styled.div`
  position: relative;
  margin-left: 3rem;
  margin-right: 3rem;

  .collection__header {
    text-transform: lowercase;
    font-size: 4.2rem;
    color: #83888F;
    box-shadow: 0 -3px 10px rgba(0 0 0 0.2);; 
  }
  .collection__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .single__content {
    text-align: center;
  }

  .content__image {
    width: 200px;
    height: 150px;
    margin-top: 1.5rem;
  }

  .text__header {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .text__content {
    margin-bottom: 3rem;
  }

  @media(min-width: 401px) {

    .collection__header {
      text-align: center;
      font-size: 5rem;
      letter-spacing: 12px;
    }
    .single__content {
      display: flex;
      align-items: center;
      gap: 2rem;
      text-align: left;
    }

    .content__image {
      width: 255px;
      height: 193px;
      margin-top: 1.5rem;
    }
  }

  @media(min-width: 769px) {
    margin: 6rem auto;

    .collection__header {
      font-size: 7rem;
      letter-spacing: 20px;
    }
    
    .single__content {
      display: block;
      text-align: center;
    }

    .collection__content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      gap: 1rem;
    }

    .text__content {
      width: 255px;
      margin: 0 auto;
    }
  }
`;

export const ChooseWrapper = styled.div`
  background-color: #2C343E;
  color: #ffffff;
  height: 103.5rem;
  position: relative;
  margin-bottom: 83rem;

  .choose__text {
    /* margin: 0 1.5rem; */
    padding: 4rem 3rem 4rem 3rem;
    text-align: center;
  }

  .choose__header {
    margin-bottom: 1.5rem;
  }

  .cards__wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 26.5rem;
  }

  .card__container {
    background-color: #0E8784;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
    padding: 12rem 6rem 9rem 6rem;
  }

  .image__container {
    width: 4.5rem;
    height: 4.5rem;
    margin-bottom: 10em;
  }

  .card__header {
    margin-bottom: 3.5rem;
  }
`;

export const SubscriptionWrapper = styled.div`
  position: relative;
  text-align: center;
  background-color: #ffffff;
  color: #333D4B;
  padding: 3rem 1rem;
  margin: 8rem auto;

  .main__subscribe {
    margin-bottom: 2rem;
  }

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
    text-align: left;
    
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