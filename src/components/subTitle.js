import styled from "styled-components";

const SubTitle = (props) => {
    return (
        <SubTitleOuter>
            <SubTitleStyle>{props.title}</SubTitleStyle>
        </SubTitleOuter>
    )
};

export default SubTitle ;

const SubTitleOuter = styled.div`
    width:100%;
    top:160px;
`

const SubTitleStyle = styled.div`
  font-size:3.5vh;text-align:center;line-height:60px;
  margin:0px -60px;padding:0px 8vw 0px calc(8vw + 56px);
  width:fit-content;
  color:rgba(255,255,255,0.7);
  border: solid; border-width:1px 0px;
  font-family: "Orienta", sans-serif;
  font-weight: regular;
  letter-spacing: 20px;
`