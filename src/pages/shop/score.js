import {
    ScoreImg,
    ScoreInner,
    ScoreInfoOuter,
    Price,
    Name,
    Introduction,
    TagOuter,
    LinkOuter,
    TagStyle
  } from './shop.style.js';

function ShowTag ({scoreTag}){
    return(
        <TagStyle>{scoreTag}</TagStyle>
    )
}

const Score = ({id,name,image,price,introduction,tag}) => {
    const scoreTag = Object.values(tag);
    return(
        <ScoreInner>
            <LinkOuter to={`/shop/${id}`}><ScoreImg src={image} alt="123" /></LinkOuter>
            <ScoreInfoOuter>
                <Price>$ {price}</Price>
                <Name>{name}</Name>
                <Introduction>{introduction}</Introduction>
                <TagOuter>
                    {scoreTag.map((scoreTag) => <ShowTag scoreTag={scoreTag}/>)}
                </TagOuter>
            </ScoreInfoOuter>
        </ScoreInner>
    );
};

export default Score;


