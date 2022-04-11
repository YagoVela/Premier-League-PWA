import React from 'react';

import HeadersMenu from '../../components/HeadersMenu';
import LogoMobile from '../../assets/logo-mobile.png';
import Menu from '../../assets/menu-mobile.svg';

const Header: React.FC = () => {
  return(
    <header id="header">
      <nav id="nav" className="container nav-desktop">
        <div className="mobile-nav">
          <div className="logo"><img src={LogoMobile} alt="logo" style={{width: '7rem'}} /></div>
          <div id="menu-mobile"><img src={Menu} alt="menu mobile" /></div>
        </div>

        <div className="logo-desktop">
            <img src={LogoMobile} alt="logo desktop" style={{width: '7rem'}} />
        </div>
        <HeadersMenu />
      </nav>
    </header>
  )
}

export default Header;
