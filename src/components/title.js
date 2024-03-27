import styled from "styled-components";

const Title = (props) => {
    return (
        <TitleOuter>
            <TitleStyle>{props.title}</TitleStyle>
        </TitleOuter>
    )
};

export default Title ;

const TitleOuter = styled.div`
    width:100%;
    position:absolute;
    top:160px;
`
const TitleStyle = styled.div`
  font-size:5vw;text-align:center;line-height:90px;
  margin:0 auto;
  width:fit-content;
  color:#FFFFFF;
  border-top: solid 2px #ffffff;border-bottom: solid 3px #ffffff;
  padding:0px 50px;
  font-family: "Orienta", sans-serif;
  font-weight: regular;
  letter-spacing: 5px;
`