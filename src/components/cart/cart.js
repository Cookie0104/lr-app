import styled from "styled-components";
import { CartContext } from "../cart/cart.context";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../pages/shop/shop-inner.page/shop-inner.page.style";

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
  const { cartTotal } = useContext(CartContext);
  const { clearItemFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

  return (
    <>
      <Outer>
        我是購物車
        <div>
          {cartItems.map((score) => (
            <CartContent key={score.id} name={score.name} price={score.price}/>
          ))}
            <div>總額：{cartTotal}</div>
        </div>
        <Button onClick={goToCheckoutHandler}>結帳</Button>
        <Button onClick={clearItemFromCart}>清空購物車</Button>
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
