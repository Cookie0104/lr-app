import styled from "styled-components";
import SHOP from "../../data/SHOP.json";
import { CartContext } from "../cart/cart.context";
import { useContext } from 'react';

function CartContent({ name,price }) {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Outer>
        我是購物車
        <div>
          {cartItems.map((score) => (
            <CartContent key={score.id} name={score.name} price={score.price}/>
          ))}
            <div></div>
        </div>
      </Outer>
    </>
  );
};

export default Cart;

const Outer = styled.div`
  width: 400px;
  height: 400px;
  position: fixed;
  z-index: 300;
  background: #f3f3f3;
  right: 10px;
  top: 80px;
  border-radius: 4px;
  box-shadow: #0000001f 0px 0px 10px 0px;
`;
