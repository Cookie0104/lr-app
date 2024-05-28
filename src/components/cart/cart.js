import styled from "styled-components";
import { CartContext } from "../cart/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../pages/shop/shop-inner.page/shop-inner.page.style";
import { Delete } from '../../assets/index.js';
import SHOP from "../../data/SHOP.json";

function CartContent({ name, price ,id}) {
  const { removeItemFromCart } = useContext(CartContext);
  const thisData = SHOP.find((SHOP) => SHOP.id === id);
  const remove = () => {
    removeItemFromCart(thisData);
  };
  return (
    <CartContentOuter>
      <CartContentName>{name}</CartContentName>
      <CartContentPrice>${price}</CartContentPrice>
      <DeleteBtn id="DeleteBtn" src={Delete} alt="Delete" onClick={remove}></DeleteBtn>
    </CartContentOuter>
  );
};



const CartContentOuter = styled.div`
  border-bottom: 1px solid rgba(137, 147, 133, 0.3);
  padding: 16px 24px;
  &:hover {
    background: rgba(137, 147, 133, 0.05);
  }
  position:relative;

  &:hover #DeleteBtn{
    opacity:0.3;
  }

  &:hover #DeleteBtn:hover{
    opacity:0.5;
    cursor:pointer;
  }
`;
const CartContentName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #384551;
  line-height: 30px;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    font-size: 16px;
  }

  @media screen and (max-width: 425px){ 
    font-size: 16px;
  }
`;
const CartContentPrice = styled.div`
  font-size: 18px;
  color: #384551;
  line-height: 24px;
`;

const DeleteBtn = styled.img`
  font-size: 18px;
  color: #384551;
  line-height: 24px;
  width:24px;
  height:24px;
  position:absolute;
  right:16px;
  top:calc(50% - 12px);
  opacity:0;
`;

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { cartTotal } = useContext(CartContext);
  const { isCartEmpty } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };



  return (
    <>
      <Outer>
        <ScrollOuter>
          <ScrollInner>
            {isCartEmpty && <CartEmpty>尚無選購</CartEmpty>}
            {cartItems.map((score) => (
              <CartContent
                key={score.id}
                name={score.name}
                price={score.price}
                id={score.id}
              />
            ))}
          </ScrollInner>
        </ScrollOuter>
        <CartTotal>
          <div>Total：</div>
          <div> $ {cartTotal}</div>
          </CartTotal>
        <ButtonArea>
          {!isCartEmpty && <Button id="checkOutBtn" onClick={goToCheckoutHandler}>結帳</Button>}
          
        </ButtonArea>
      </Outer>
    </>
  );
};

export default Cart;

const Outer = styled.div`
  width: 260px;
  height: fut-content;
  position: fixed;
  z-index: 300;
  background: #f3f3f3;
  right: 10px;
  top: 80px;
  border-radius: 4px;
  box-shadow: #0000001f 0px 0px 10px 0px;
  padding: 8px 0px;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    top: 60px;
  }

  @media screen and (max-width: 425px){ 
    top: 60px;
    right: 0px;
    width: 100%;
    border-radius: 0px;
    box-shadow: unset;
  }
`;

const ScrollOuter = styled.div`
width:100%;
overflow-y:scroll;
height:fit-content;
max-height:300px;
`

const ScrollInner = styled.div`
width:100%;
height:fit-content;
`

const CartTotal = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #899385;
  line-height: 30px;
  padding: 12px 24px 0px 24px;
  border-top:1px solid rgba(137, 147,133,0.5);
  display:flex;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  display: flex;
  padding: 12px 24px;
`;

const CartEmpty = styled.div`
height:100px;
width:100%;
text-align:center;
letter-spacing:1px;
color: rgba(137, 147,133,0.5);
line-height:100px;
`