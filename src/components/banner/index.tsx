import React from 'react';
import { BannerWrapper } from './banner.style';

interface IBanner {
  title: string;
  body: string;
  button: boolean;
  imageUrls: string[];
}

function BannerSection({title, body, button, imageUrls }: IBanner) {
  return (
    <BannerWrapper imageUrls={imageUrls}>
      <h2 className="banner__header">{title}</h2>

      <p className="banner__text">{body}</p>

      {button && <button className="banner__button">Create your plan</button>}
    </BannerWrapper>
  )
}

export default BannerSection;

