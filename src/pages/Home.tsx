import React from 'react';
import BannerSection from '../components/banner';
import {HomeWrapper, CollectionWrapper, ChooseWrapper, SubscriptionWrapper} from '../components/styles/home.style'

function Home() {
  const imageUrls = [
    `${process.env.PUBLIC_URL}/assets/home/mobile/image-hero-coffeepress.jpg`,
    `${process.env.PUBLIC_URL}/assets/home/tablet/image-hero-coffeepress.jpg`,
    `${process.env.PUBLIC_URL}/assets/home/desktop/image-hero-coffeepress.jpg`,
  ]
  return (
    <HomeWrapper>
      <BannerSection
        title={`Great coffee made simple.`}
        body={`Start your mornings with the world’s best coffees. Try our expertly curated artisan 
        coffees from our best roasters delivered directly to your door, at your schedule.`}
        button={true}
        imageUrls={imageUrls}
      />

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
            <img className="content__image" src={`${process.env.PUBLIC_URL}/assets/home/desktop/image-planalto.png`} alt="planalto" />
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

      <ChooseWrapper>
        <div className="choose__text">
          <h4 className="choose__header">Why choose us?</h4>
          <p className="choose__value">A large part of our role is choosing which particular coffees will be featured 
            in our range. This means working closely with the best coffee growers to give 
            you a more impactful experience on every level.
          </p>
        </div>
        <div className="cards__wrapper">
          <div className="card__container">
            <div className="image__container">
              <img src={`${process.env.PUBLIC_URL}/assets/home/desktop/icon-coffee-bean.svg`} alt="bean" />
            </div>
            <div className="card__text__wrapper">
              <h4 className="card__header">Best Quality</h4>
              <p className="card__value">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
            </div>
          </div>

          
          <div className="card__container">
            <div className="image__container">
              <img src={`${process.env.PUBLIC_URL}/assets/home/desktop/icon-gift.svg`} alt="bean" />
            </div>
            <div className="card__text__wrapper">
              <h4 className="card__header">Exclusive benefits</h4>
              <p className="card__value">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
            </div>
          </div>
          
          <div className="card__container">
            <div className="image__container">
              <img src={`${process.env.PUBLIC_URL}/assets/home/desktop/icon-truck.svg`} alt="bean" />
            </div>
            <div className="card__text__wrapper">
              <h4 className="card__header">Free shipping</h4>
              <p className="card__value">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
            </div>
          </div>
        </div>
      </ChooseWrapper>
    
      {/* Subscription Steps section */}
      <SubscriptionWrapper>
        <h4 className="main__subscribe">How it works</h4>
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
      <button>Create your plan</button>
      </SubscriptionWrapper>
     
    </HomeWrapper>
  )
}

export default Home;


