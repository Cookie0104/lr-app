import { Button } from "./shop-inner.page.style.js";
import { CartContext } from "../../../components/cart/cart.context.js";
import { useContext } from "react";

const AddToCartBtn = ({ thisData, id, color }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(thisData);
  const { checkIfItemExist } = useContext(CartContext);
  const { isItemExist } = useContext(CartContext);

  checkIfItemExist(thisData);

  return (
    <>
      {!isItemExist && (
        <Button id={id} color={color} onClick={addProductToCart}>
          ＋ 加入購物車
        </Button>
      )}
      {isItemExist && <Button color="green" disabled>已加入</Button>}
    </>
  );
};

export default AddToCartBtn;
