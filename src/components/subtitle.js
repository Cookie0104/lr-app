import styled,{css} from "styled-components";


const Subtitle = ({title,position}) => {
    return (
        <SubTitleOuter>
            <SubTitleStyle position={position}>{title}</SubTitleStyle>
        </SubTitleOuter>
    )
};

export default Subtitle ;

const SubTitleOuter = styled.div`
    width:100%;
    top:160px;
`

const SubTitleStyle = styled.div`
  font-size: clamp(1.5rem, 3.5vw, 2.3rem);text-align:center;line-height:60px;
  margin:0px -60px;padding:0px 8vw 0px calc(8vw + 56px);
  width:fit-content;
  color:rgba(255,255,255,0.7);
  border: solid; border-width:1px 0px;
  font-family: "Orienta", sans-serif;
  font-weight: regular;
  letter-spacing: 20px;

  ${(props) => {
    switch (props.position) {
      case "left":
        return css`
            border-image: linear-gradient(to right, rgba(255,255,255,0.6)50%, rgba(255,255,255,0)) 1;
        `;
      default:
        return css`
            border-image: linear-gradient(to left, rgba(255,255,255,0.6)50%, rgba(255,255,255,0)) 1;
            position:absolute;
            right:0px;
            top:100px;
        `;
    }
  }}


  @media screen and (min-width: 425px) and (max-width: 768px){ 
    margin:0px -40px;padding:0px 8vw 0px calc(8vw + 24px);
    letter-spacing: 16px;
    line-height:56px;
  }

  @media screen and (max-width: 425px){ 
    margin:0px -24px;padding:0px 8vw 0px calc(8vw + 24px);
    letter-spacing: 8px;
    line-height:44px;
  }

`
