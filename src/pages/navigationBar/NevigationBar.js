import { LRLogo } from '../../assets/index.js';
import { CartImg } from '../../assets/index.js';
import { Outlet, Link } from 'react-router-dom';
import styled from "styled-components";
import './navigation.styles.css';


function NavigationBar() {
    return (
      <>
        <StyledOuter id='navbar'>
          <img src={LRLogo} className="logo" alt="Logo" />
          <Link className="nav-container" to="/">關於LR</Link>
          <Link className="nav-container" to="/music">音樂作品</Link>
          <Link className="nav-container" to="/slashie">斜槓人生</Link>
          <Link className="nav-container" to="/shop">樂譜商店</Link>
          <Link className="nav-container" to="/contact">聯絡我們</Link>
          <CartOuter>
            <img src={CartImg} alt="Cart"/>
            <CartInner>12</CartInner>
          </CartOuter>
        </StyledOuter>
        <Outlet />
      </>
      
    );
  }

export default NavigationBar;

const StyledOuter = styled.div`
  background-color: #F3F3F3;
  height: 100px;
  width: 100%;
  display: flex;justify-content: center;align-items: center;
  flex-wrap: wrap;
  position:fixed;top:0px;
  z-index:200;
`
const CartOuter = styled.div`
  width: 60px; height: 44px;
  background-color: #899385;
  position: absolute;
  right: 40px;
  top: 28px;
  border-radius: 16px;
  display:flex;align-items: center;justify-content:space-between;
  padding:0 10px;
`
const CartInner = styled.div`
  width: 24px; height: 24px;
  display: flex;justify-content: center;align-items: center;
  background-color: #F3F3F3;
  border-radius: 12px;
  color: #384551;
  font-size: 14px;
  margin:6px 0px 6px 6px;
`
