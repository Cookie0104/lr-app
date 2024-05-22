import SHOP from "../../data/SHOP.json";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/cart/cart.context.js";
import Star from "../../components/star.js";
import {
  ScorepageOuter,
  ButtonArea,
  Button,
  ScoreInfo,
  LeftArea,
  RightArea,
  ScoreImg,
  TagStyle,
  TagOuter,
  Name,
  Introduction,
  Price,
  Arranger,
  Audio,
} from "./shop-inner.page.style.js";

const Scorepage = () => {
  let { id } = useParams();

  //指定Data
  const thisData = SHOP.find((SHOP) => SHOP.id === id);
  const thisDataIndex = SHOP.findIndex((SHOP) => SHOP.id === id);
  const scoreTag = thisData.tag;
  let PrevPage = +thisDataIndex - 1 >= 0 ? SHOP[thisDataIndex - 1] : null;
  let NextPage =
    +thisDataIndex + 1 === SHOP.length ? null : SHOP[thisDataIndex + 1];

  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(thisData);
  const { checkIfItemExist } = useContext(CartContext);
  const { isItemExist } = useContext(CartContext);

  checkIfItemExist(thisData);
  console.log(isItemExist);

  return (
    <ScorepageOuter>
      <ButtonArea>
        <Link to="/shop">
          <Button color="blue">← 回樂譜列表</Button>
        </Link>
        <div>
          {PrevPage && (
            <Link to={`/shop/${PrevPage.id}`}>
              <Button color="blue">← 前一曲</Button>
            </Link>
          )}
          {!PrevPage && (
            <Button disabled id="prevBtn" color="blue">
              ← 前一曲
            </Button>
          )}
          {NextPage && (
            <Link to={`/shop/${NextPage.id}`}>
              <Button color="blue">後一曲 →</Button>
            </Link>
          )}
          {!NextPage && (
            <Button disabled id="nextBtn" color="blue">
              後一曲 →
            </Button>
          )}
        </div>
      </ButtonArea>
      <ScoreInfo>
        <LeftArea>
          <div>
            <ScoreImg src={thisData.image} alt="123" />
          </div>
          <div>
            <Audio controls src={thisData.url}></Audio>
          </div>
          <div>
            Description
            <Arranger>{thisData.arranger}</Arranger>
          </div>
        </LeftArea>
        <RightArea>
          <div>
            <Name>{thisData.name}</Name>
            <Star n={thisData.grade} />
            <Introduction>{thisData.introduction}</Introduction>
            <TagOuter>
              {scoreTag.map((scoreTag) => (
                <TagStyle>{scoreTag}</TagStyle>
              ))}
            </TagOuter>
          </div>

          <div>
            <Price>$ {thisData.price}</Price>
            {!isItemExist && (
              <Button
                id={`addToCart${thisData.id}`}
                color="green"
                onClick={addProductToCart}
              >
                ＋ 加入購物車
              </Button>
            )}
            {isItemExist && <Button color="green">已加入</Button>}
          </div>
        </RightArea>
      </ScoreInfo>
    </ScorepageOuter>
  );
};

export default Scorepage;
