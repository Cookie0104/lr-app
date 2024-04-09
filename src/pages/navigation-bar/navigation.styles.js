import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledOuter = styled.div`
  background-color: #F3F3F3;
  height: 100px;width: 100%;
  display: flex;justify-content: space-between; align-items: center;
  position:fixed; top:0px;
  z-index:200;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    height: 70px;
  }

  @media screen and (max-width: 425px){ 
    height: 60px;
  }
`;

export const HamburgerOuter = styled.div`
 height:24px;width:24px;
 padding:4px;
 display:none;
 margin-left:16px;
 
 @media screen and (max-width: 425px){ 
    display:block;
}
`

export const Hamburger = styled.div`
 height:24px;width:24px;
 display:flex;
 flex-direction:column;
 justify-content: space-around;
`

export const Close = styled.div`
  height:24px;width:24px;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`

export const RectangleAnimate = styled.div`
  width:100%; height:2px;
  background-color:#899385;
  position:absolute;

  animation-name: rotate1;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  transform-origin: 50% 50%;

  @keyframes rotate1 {
    0%   { rotate: 0deg; width:100%; }
    100% { rotate: -45deg; width:100%;}
  }

  &:nth-last-child(2) {
      animation-name: rotate2;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      transform-origin: 50% 50%;

      @keyframes rotate2 {
        0%   { rotate: 0deg; width:100%;}
        100% { rotate: 45deg; width:100%;}
      }
  
    }
`

export const Rectangle = styled.div`
 width:100%; height:2px;
 background-color:#899385;
`

export const Logo = styled.img`
  height:calc(100% - 16px);
  padding:8px 16px;
`;

export const NavContainerCollapse = styled.div`
    @media screen and (max-width: 425px){ 
        display:flex;
        flex-direction:column;
        position:absolute;
        top:60px;
        background:#F3F3F3;
        width:100vw;
        padding-bottom:16px;
  }
`
export const NavContainer = styled.div`
    @media screen and (max-width: 425px){ 
        display:none;
  }
`

export const NavLink = styled(Link)`
  margin:12px;
  color: #899385;
  text-decoration: none;
  font-size:16px;

  &:hover{
    color: #677860;
    font-weight: bold;
    text-decoration: none;
  }

  @media screen and (min-width: 600px) and (max-width: 768px){ 
    font-size:14px;
    margin:8px;
  }

  @media screen and (min-width: 426px) and (max-width: 600px){ 
    font-size:12px;
    margin:4px;
  }

  @media screen and (max-width: 425px){ 
    font-size:16px;
    line-height:36px;
    padding-left:16px;
  }
`;

export const CartOuter = styled.div`
  width: fitcontent; height: 40px;
  background-color: #899385;
  border-radius: 16px;
  display:flex;align-items: center;justify-content:space-between;
  padding:0 8px;
  margin-right:10px;

  @media screen and (max-width: 425px){ 
    height: 32px;
    border-radius: 12px;
  }
`;

export const CartInner = styled.div`
  width: 24px; height: 24px;
  display: flex;justify-content: center;align-items: center;
  background-color: #F3F3F3;
  border-radius: 16px;
  color: #384551;
  font-size: 12px;
  margin:6px 0px 6px 6px;

  @media screen and (max-width: 425px){ 
    width: 20px; height: 20px;
    margin:4px 0px 4px 4px;
    border-radius: 12px;
  }
`;

export const CartImgOuter = styled.img`
    height:80%;
`