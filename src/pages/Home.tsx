import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeWrapper>
      <BannerWrapper>
        <h2 className="banner__header">Great coffee made simple.</h2>

        <p className="banner__text">Start your mornings with the world’s best coffees. Try our expertly curated artisan 
        coffees from our best roasters delivered directly to your door, at your schedule.</p>

        <button className="banner__button">Create your plan</button>
      </BannerWrapper>

      <CollectionWrapper>
        <h1 className="collection__header">
          Our collection 
        </h1>
        <div className="collection__content">
        {/* Single Collection */}
          <div className="single__content">
            <img className="content__image" src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-gran-espresso.png`} alt="gran espresso" />
            <div className="text__container">
              <h4 className="text__header">Gran Espresso</h4>
              <p className="text__content">
                Light and flavorful blend with cocoa and black pepper for an intense experience
              </p>
            </div>
          </div>
          {/* Single Collection */}
          <div className="single__content">
            <img className="content__image" src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-gran-espresso.png`} alt="planalto" />
            <div className="text__container">
              <h4 className="text__header">Planalto</h4>
              <p className="text__content">
                Brazilian dark roast with rich and velvety body, and hints of fruits and nuts
              </p>
            </div>
          </div>
          {/* Single Collection */}
          <div className="single__content">
            <img className="content__image" src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-piccollo.png`} alt="piccollo" />
            <div className="text__container">
              <h4 className="text__header">Piccollo</h4>
              <p className="text__content">
                Mild and smooth blend featuring notes of toasted almond and dried cherry
              </p>
            </div>
          </div>
          {/* Single Collection */}
          <div className="single__content">
            <img className="content__image" src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-danche.png`} alt="danche" />
            <div className="text__container">
              <h4 className="text__header">Danche</h4>
              <p className="text__content">
                Ethiopian hand-harvested blend densely packed with vibrant fruit notes
              </p>
            </div>
          </div>
          
        </div>
      </CollectionWrapper>


      Why choose us?

      A large part of our role is choosing which particular coffees will be featured 
      in our range. This means working closely with the best coffee growers to give 
      you a more impactful experience on every level.

      Best quality
      Discover an endless variety of the world’s best artisan coffee from each of our roasters.

      Exclusive benefits
      Special offers and swag when you subscribe, including 30% off your first shipment.

      Free shipping 
      We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.

      How it works

      01
      Pick your coffee
      Select from our evolving range of artisan coffees. Our beans are ethically 
      sourced and we pay fair prices for them. There are new coffees in all profiles 
      every month for you to try out.

      02
      Choose the frequency
      Customize your order frequency, quantity, even your roast style and grind type. 
      Pause, skip or cancel your subscription with no commitment through our online portal.

      03
      Receive and enjoy!
      We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
      world-class coffees curated to provide a distinct tasting experience.

      Create your plan
    </HomeWrapper>
    
  )
}

export default Home;


const HomeWrapper = styled.div`
  margin: 0 1.5rem;


  @media(min-width: 401px) {
    margin: 0 2.5rem;
  }

  @media(min-width: 769px) {
    margin: 0 5rem;
  }
`;

const BannerWrapper = styled.div`
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

const CollectionWrapper = styled.div`
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
