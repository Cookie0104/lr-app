import SHOP from "../../../data/SHOP.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Star from "../../../components/star.js";
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
  AddtoCartArea,
} from "./shop-inner.page.style.js";
import AddToCartBtn from "./addToCartBtn.js";

const Scorepage = () => {
  let { id } = useParams();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  window.onload =() => {
    let windowWidth = document.body.offsetWidth;
    windowWidth <= 425 ? setIsSmallScreen(true) : setIsSmallScreen(false);
  }
  window.onresize = () => {
    let windowWidth = document.body.offsetWidth;
    windowWidth <= 425 ? setIsSmallScreen(true) : setIsSmallScreen(false);
  };

  //指定Data
  const thisData = SHOP.find((SHOP) => SHOP.id === id);
  const thisDataIndex = SHOP.findIndex((SHOP) => SHOP.id === id);
  const scoreTag = thisData.tag;
  let PrevPage = +thisDataIndex - 1 >= 0 ? SHOP[thisDataIndex - 1] : null;
  let NextPage =
    +thisDataIndex + 1 === SHOP.length ? null : SHOP[thisDataIndex + 1];

  return (
    <ScorepageOuter>
      <ButtonArea>
        <Link to="/shop">
          <Button color="blue">← 回樂譜列表</Button>
        </Link>
        {!isSmallScreen && (
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
        )}
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

          {!isSmallScreen && (
            <div>
              <Price>$ {thisData.price}</Price>
              <AddToCartBtn
                thisData={thisData}
                id={`addToCart${thisData.id}`}
                color="green"
              />
            </div>
          )}
        </RightArea>
        {isSmallScreen && (
          <AddtoCartArea>
            <Price>$ {thisData.price}</Price>
            <div>
              {PrevPage && (
                <Link to={`/shop/${PrevPage.id}`}>
                  <Button color="blue">← 前一曲</Button>
                </Link>
              )}
              {!PrevPage && (
                <div>
                  <Button disabled id="prevBtn" color="blue">
                    ← 前一曲
                  </Button>
                </div>
              )}
              {NextPage && (
                <Link to={`/shop/${NextPage.id}`}>
                  <Button color="blue">後一曲 →</Button>
                </Link>
              )}
              {!NextPage && (
                <div>
                  <Button disabled id="nextBtn" color="blue">
                    後一曲 →
                  </Button>
                </div>
              )}
              <AddToCartBtn
                thisData={thisData}
                id={`addToCart${thisData.id}`}
                color="green"
              />
            </div>
          </AddtoCartArea>
        )}
      </ScoreInfo>
    </ScorepageOuter>
  );
};

export default Scorepage;
