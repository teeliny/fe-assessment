import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function HeaderComponent() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('click', toggleDropDownDisplay, false);
    return () =>
      window.removeEventListener('click', toggleDropDownDisplay, false);
  });

  const toggleDropDownDisplay = (e: MouseEvent) => {
    e.preventDefault();
    if (showMenu) {
      if (e.target !== ref.current) {
        setShowMenu(false);
        return;
      }
    }
  };
  return (
    <HeaderContainer>
      <div className="header__logo">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo.svg`}
          alt="logo"
        />
      </div>
      
      <div className="header__menu">
        {/* Mobile Menu Section */}
        <div
          ref={ref}
          className="mobile__menu"
          onClick={() => setShowMenu(!showMenu)}
        >
        {showMenu ? (
          <>
            <img
            className=""
            src={`${process.env.PUBLIC_URL}/assets/shared/mobile/icon-close.svg`}
            alt="close menu"
            />
            <div className="menu__container">
              <h4><a href="/">home</a></h4>
              <h4 className="menu__separator"><a href="/about">about us</a></h4>
              <h4><a href="/subscription">create your plan</a></h4>
            </div>
          </>
        ) : (
          <img
          className=""
          src={`${process.env.PUBLIC_URL}/assets/shared/mobile/icon-hamburger.svg`}
          alt="open menu"
            />
        )}
        </div>
        {/* Tablet and desktop Menu Section */}
        <div className="main__menu">
          <h4><a href="/">home</a></h4>
          <h4 className="main__separator"><a href="/about">about us</a></h4>
          <h4><a href="/subscription">create your plan</a></h4>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default HeaderComponent;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;

  .logo {
    width: calc(50vw - 1rem);
  }

  .menu__container {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #ffffff;
    padding: 2.5rem;
    box-shadow: 0px 0px 134px 6px #ffffff;
  }

  .menu__container h4 a {
    text-decoration: none;
    text-transform: capitalize;
  }

  .menu__separator {
    margin: 1.5rem auto;
  }

  .main__menu {
    display: none;
  }

  @media(min-width: 500px) {
    margin: 1rem 2rem;

    .logo {
      width: calc(33.33vw - 1.5rem);
    }
    
    .mobile__menu {
      display: none;
    }

    .main__menu {
      display: flex;
      justify-content: flex-end;
      gap: 4rem;
      width: 35vw;
    }

    .main__menu h4 {
      font-size: 12px;
      text-transform: uppercase;
    }
    
    .main__menu h4 a {
      text-decoration: none;
      color: #83888F;
    }
  }
`;
