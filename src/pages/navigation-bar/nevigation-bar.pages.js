import { LRLogo } from '../../assets/index.js';
import { CartImg } from '../../assets/index.js';
import { Outlet } from 'react-router-dom';
import {
  Hamburger,
  Rectangle,
	StyledOuter,
	Logo,
  NavContainer,
	NavLink,
	CartOuter,
  CartInner,
  CartImgOuter,
} from './navigation.styles';

// var hamburger = document.querySelector('#hamburger');
// var menu = document.querySelector('#menu');

// hamburger.addEventListener('click', function (e) {
//   console.log('click!');
//   menu.style.display = 'flex';
// }, false);

function NavigationBar() {
    return (
      <>
        <StyledOuter id='navbar'>
          <Hamburger id="hamburger">
            <Rectangle></Rectangle>
            <Rectangle></Rectangle>
            <Rectangle></Rectangle>
          </Hamburger>
          <Logo src={LRLogo} className="logo" alt="Logo" />
          <NavContainer id='menu'>
            <NavLink to="/">關於LR</NavLink>
            <NavLink to="/music">音樂作品</NavLink>
            <NavLink to="/slashie">斜槓人生</NavLink>
            <NavLink to="/shop">樂譜商店</NavLink>
            <NavLink to="/contact">聯絡我們</NavLink>
          </NavContainer>
          <CartOuter>
            <CartImgOuter src={CartImg} alt="Cart"/>
            <CartInner>0</CartInner>
          </CartOuter>
        </StyledOuter>
        <Outlet />
      </>
      
    );
  }

export default NavigationBar;

