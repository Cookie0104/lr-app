import { LRLogo } from '../../assets/index.js';
import { CartImg } from '../../assets/index.js';
import { Outlet } from 'react-router-dom';
import {
  HamburgerOuter,
  Hamburger,
  Close,
  RectangleAnimate,
  Rectangle,
	StyledOuter,
	Logo,
  NavContainer,
  NavContainerCollapse,
	NavLink,
	CartOuter,
  CartInner,
  CartImgOuter,
} from './navigation.styles';
import { useState } from 'react';

function NavigationBar() {
  const [collapse,setCollapse] = useState(false);
  const clickHandle =()=>{
    setCollapse(!collapse);
    console.log("collapse",collapse);
  }
  return (
      <>
        <StyledOuter id='navbar'>
          <HamburgerOuter onClick={clickHandle} id="hamburger">
          {collapse && 
            <Close>
              <RectangleAnimate></RectangleAnimate>
              <RectangleAnimate></RectangleAnimate>
            </Close>
          } 
          {!collapse && 
          <Hamburger>
            <Rectangle></Rectangle>
            <Rectangle></Rectangle>
            <Rectangle></Rectangle>
          </Hamburger>
          } 
          </HamburgerOuter>
          <Logo src={LRLogo} className="logo" alt="Logo" />
          {collapse && 
          
            <NavContainerCollapse id='menu'>
              <NavLink to="/">關於LR</NavLink>
              <NavLink to="/music">音樂作品</NavLink>
              <NavLink to="/slashie">斜槓人生</NavLink>
              <NavLink to="/shop">樂譜商店</NavLink>
              <NavLink to="/contact">聯絡我們</NavLink>
            </NavContainerCollapse>
          
          } 
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

