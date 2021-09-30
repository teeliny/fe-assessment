import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function FooterComponent() {
  return (
    <FooterWrapper>
      <div className="footer__logo">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo-white.svg`}
          alt="logo"
        />
      </div>
      {/* Menu Section  */}
      <div className="footer__menu">
        <h4><Link to="/">home</Link></h4>
        <h4><Link to="/about">about us</Link></h4>
        <h4><Link to="/subscription">create your plan</Link></h4>
      </div>
      {/* Social Icons */}
      <div className="social__icons">
        <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-facebook.svg`} alt="facebook" className="social_item" />
        <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-twitter.svg`} alt="facebook" className="social_item" />
        <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-instagram.svg`} alt="facebook" className="social_item" />
      </div>
    </FooterWrapper>
  )
}

export default FooterComponent;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 1rem;
  padding-top: 3.4rem;
  padding-bottom: 3.4rem;
  background-color: #2C343E;

  .logo {
    width: 16rem;
  }

  .footer__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto 2rem;
  }

  .footer__menu h4 a {
    text-decoration: none;
    text-transform: uppercase;
    color: #83888F;
    font-size: 12px;
  }

  .footer__menu h4 a:hover {
    color: #ffffff;
  }

  .social__icons {
    display: flex;
    gap: 1.5rem;
  }

  .social_item {
    width: 1.25rem;
  }

  @media(min-width: 401px) {
    .footer__menu {
      flex-direction: row;
      gap: 2.5rem;
      margin: 1rem auto 3rem auto;
    }
  }

  @media(min-width: 769px) {
    flex-direction: row;
    margin: 0 2rem;
    padding: 2rem 3rem;

    .footer__menu {
      margin: 0 auto;
    }
  }
`;
