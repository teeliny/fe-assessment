import React, { useState, useEffect } from 'react';
import BannerSection from '../components/banner';
import { HomeWrapper, CommitWrapper, QualityWrapper } from '../components/styles/about.style';

function About() {

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [commitUrl, setCommitUrl] = useState<string>(`${process.env.PUBLIC_URL}/assets/about/mobile/image-commitment.jpg`);
  const [qualityUrl, setQualityUrl] = useState<string>(`${process.env.PUBLIC_URL}/assets/about/mobile/image-quality.jpg`);
  
  // Set the current window size
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  });
  
  //Set the correct url for commitment based on the current window size
  useEffect(() => {
    if (width > 768) {
      setCommitUrl(`${process.env.PUBLIC_URL}/assets/about/desktop/image-commitment.jpg`)
      setQualityUrl(`${process.env.PUBLIC_URL}/assets/about/desktop/image-quality.jpg`)
    }
    if (width > 400 && width <= 768) {
      setCommitUrl(`${process.env.PUBLIC_URL}/assets/about/tablet/image-commitment.jpg`)
      setQualityUrl(`${process.env.PUBLIC_URL}/assets/about/tablet/image-quality.jpg`)
    }
    if (width <= 400) {
      setCommitUrl(`${process.env.PUBLIC_URL}/assets/about/mobile/image-commitment.jpg`)
      setQualityUrl(`${process.env.PUBLIC_URL}/assets/about/mobile/image-quality.jpg`)
    }
  }, [width]);
  
  const imageUrls = [
    `${process.env.PUBLIC_URL}/assets/about/mobile/image-hero-whitecup.jpg`,
    `${process.env.PUBLIC_URL}/assets/about/tablet/image-hero-whitecup.jpg`,
    `${process.env.PUBLIC_URL}/assets/about/desktop/image-hero-whitecup.jpg`,
  ];

  return (
    <HomeWrapper>
      <BannerSection
        title={`About us`}
        body={`Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.`}
        button={false}
        imageUrls={imageUrls}
      />

      <CommitWrapper>
        <div className="tea__pour">
          <img
            src={commitUrl}
            alt="tea pour" />
        </div>

        <div className="commitment">
          <h3 className="commitment__header">
            Our commitment
          </h3>
          <p className="commitment__text">
            We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
          </p>
        </div>
      </CommitWrapper>
      
      <QualityWrapper>
        <div className="quality__image">
          <img
            src={qualityUrl}
            alt="quality" />
        </div>
        <div className="quality">
          <h3 className="quality__header">
            Uncompromising quality
          </h3>
          <p className="quality__text">
            Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
          </p>
        </div>
      </QualityWrapper>
    </HomeWrapper>
  )
}

export default About;

