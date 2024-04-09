import styled from "styled-components";

const Title = ({title}) => {
    return (
        <TitleOuter>
            <TitleStyle>{title}</TitleStyle>
        </TitleOuter>
    )
};

export default Title ;

const TitleOuter = styled.div`
    width:100%;
    position:absolute;
    top:160px;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
    top:100px;
    }

    @media screen and (max-width: 425px){ 
    top:80px;
    }

`
const TitleStyle = styled.div`
  font-size:5vw; text-align:center; line-height:90px;
  margin:0 auto;
  width:fit-content;
  color:#FFFFFF;
  border-top: solid 2px #ffffff;border-bottom: solid 2px #ffffff;
  padding:0px 50px;
  font-family: "Orienta", sans-serif;
  font-weight: regular;
  letter-spacing: 5px;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    line-height:64px;
    padding:0px 40px;
    }

    @media screen and (max-width: 425px){ 
     line-height:44px;
     padding:0px 20px;
    }
`