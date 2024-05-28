import styled from "styled-components";
import { CartContext } from "../../components/cart/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../shop/shop-inner.page/shop-inner.page.style";
import SHOP from "../../data/SHOP.json";
import { Delete } from "../../assets/index";
import Title from "../../components/title";

function CartContent({ name, price, id, image, introduction }) {
  const { removeItemFromCart } = useContext(CartContext);
  const thisData = SHOP.find((SHOP) => SHOP.id === id);
  const remove = () => {
    removeItemFromCart(thisData);
  };
  return (
    <CartContentOuter>
      <div>
        <img src={image} alt="123" />
        <CartInner>
          <CartContentName>{name}</CartContentName>
          <CartContentintroduction>{introduction}</CartContentintroduction>
          <CartContentPrice>${price}</CartContentPrice>
        </CartInner>
      </div>

      <DeleteBtn
        id="DeleteBtn"
        src={Delete}
        alt="Delete"
        onClick={remove}
      ></DeleteBtn>
    </CartContentOuter>
  );
}

const Checkout = () => {
  const { clearItemFromCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const { cartTotal } = useContext(CartContext);
  const { isCartEmpty } = useContext(CartContext);

  const navigate = useNavigate();

  const goToShopHandler = () => {
    navigate("/Shop");
  };

  return (
    <CheckoutOuter>
      <Title title="CHECK OUT" />
      <ScoreInfo>
        <LeftArea>
          {isCartEmpty && <CartEmpty>尚無選購</CartEmpty>}
          {cartItems.map((score) => (
            <CartContent
              key={score.id}
              name={score.name}
              price={score.price}
              id={score.id}
              image={score.image}
              introduction={score.introduction}
            />
          ))}
        </LeftArea>
        <RightArea>
          <TotalArea>
            <div>Total：</div>
            <div> $ {cartTotal}</div>
          </TotalArea>
          <ButtonArea>
            <Button>付款</Button>
          </ButtonArea>
          <ButtonArea>
            <Button color="outline" onClick={clearItemFromCart}>
              清空購物車
            </Button>
            <Button color="outline" onClick={goToShopHandler}>
              繼續購物
            </Button>
          </ButtonArea>
        </RightArea>
      </ScoreInfo>
    </CheckoutOuter>
  );
};

export default Checkout;

const CheckoutOuter = styled.div`
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - 100px);
  background: linear-gradient(to top, #384551, #242424);
  color: #fff;
  margin-top: 100px;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    margin-top: 70px;
    min-height: calc(100vh - 70px);
  }

  @media screen and (max-width: 425px){ 
    margin-top: 60px;
    min-height: calc(100vh - 60px);
  }
`;

const CartContentOuter = styled.div`
  border-bottom: 1px solid rgba(137, 147, 133, 0.3);
  padding: 16px 24px;

  
  &:hover {
    background: rgba(137, 147, 133, 0.05);
  }
  position: relative;

  &:hover #DeleteBtn {
    opacity: 0.3;
  }

  &:hover #DeleteBtn:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  & > div {
    display: flex;
  }

  & > div img {
    width: 30%;
    margin: 0px 24px 0px 0px;
    max-width: 100px;
  }

  
`;

const CartInner = styled.div`
  padding-right: 40px;
  flex-grow: 1;
`;

const CartContentName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #384551;
  line-height: 32px;
  margin-bottom: 8px;
`;
const CartContentPrice = styled.div`
  font-size: 20px;
  color: #384551;
  line-height: 24px;
`;

const CartContentintroduction = styled.div`
  font-size: 14px;
  color: #899385;
  line-height: 24px;
  font-weight: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 16px;
`;

const DeleteBtn = styled.img`
  font-size: 18px;
  color: #384551;
  line-height: 24px;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 32px;
  top: calc(50% - 12px);
  opacity: 0;
`;

const ScoreInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-bottom: 80px;
  padding-top: 220px;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    padding-top: 130px;
    gap:24px;
  }

  @media screen and (max-width: 425px){ 
    padding-top: 90px;
    flex-direction:column;
    align-items: center;
    gap:0px;
  }
  
`;

const LeftArea = styled.div`
  width: calc(60% - 20px - 80px);
  height: fit-content;
  background: #f3f3f3;
  color: #384551;
  font-size: 16px;
  font-weight: bold;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    width:calc(60% - 12px - 40px);
  }

  @media screen and (max-width: 425px){ 
    width:calc(100% - 32px);
  }

  & > div {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(137, 147, 133, 0.5);
    padding: 32px 48px;
    width: calc(100% - 96px);

    @media screen and (min-width: 425px) and (max-width: 768px){ 
      padding:24px 32px;
      width:calc(100% - 64px);
    }
  
    @media screen and (max-width: 425px){ 
      padding:32px 40px;
      width:calc(100% - 80px);
    }
  }
`;

const CartEmpty = styled.div`
  height: 100px;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  color: rgba(137, 147, 133, 0.5);
  line-height: 100px;
`;

export const RightArea = styled.div`
  width: calc(40% - 20px - 80px);
  height: fit-content;
  background: #f3f3f3;
  color: #384551;
  padding-bottom:16px;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    width:calc(40% - 12px - 40px);
  }

  @media screen and (max-width: 425px){ 
    width:calc(100% - 32px);
  }

  & div button {
    width: 100%;
    margin: 0px 0px 16px 0px;
    
  }
`;

const ButtonArea = styled.div`
display:flex;
gap:16px;
flex-direction: row;
padding: 0px 32px 0px 32px;

@media screen and (min-width: 425px) and (max-width: 768px){ 
  padding: 0px 24px 0px 24px;
  flex-direction:column;
  gap:0px;
}

@media screen and (max-width: 425px){ 
  padding: 0px 24px 0px 24px;
}

`
const TotalArea = styled.div`
padding:40px 32px;
color:#899385;
display:flex;
font-size:18px;
font-weight:bold;

@media screen and (min-width: 425px) and (max-width: 768px){ 
  padding:32px 24px;
}

@media screen and (max-width: 425px){ 
  padding:32px 24px;
}
`