import Score from "./score";
import styled from "styled-components";


const ScoreList = ({scores}) => (
    <ScoreListOuter>
        {scores.map(({ id,name,image,price,introduction,tag }) => {
            return <Score id={id} name={name} image={image} price={price} introduction={introduction} tag={tag}/>;
        })}
    </ScoreListOuter>
);

export default ScoreList;

const ScoreListOuter = styled.div`
width:100%;
display: flex;
flex-wrap: wrap;
`