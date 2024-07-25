import styled,{css} from "styled-components";
import { StarGrade } from '../../../assets/index.js';
import { nonStarGrade } from '../../../assets/index.js';

export const ScorepageOuter = styled.div`
width:100%;
height:fit-content;
min-height:calc(100vh - 100px);
background:linear-gradient(to top, #384551, #242424);
color:#fff;
margin-top:100px;

@media screen and (min-width: 425px) and (max-width: 768px){ 
    margin-top: 70px;
  }

  @media screen and (max-width: 425px){ 
    margin-top: 60px;
  }

`

export const ButtonArea = styled.div`
display:flex;
justify-content: space-between;
padding:24px 80px;

& div{
    display:flex;
    gap:16px;
}

@media screen and (min-width: 425px) and (max-width: 768px){ 
    padding:16px 40px;
  }

  @media screen and (max-width: 425px){ 
    padding:8px 16px;
  }
`
export const Button = styled.button`

border: none;
color: white;
padding: 8px 40px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 14px;
letter-spacing:2px;
border-radius:4px;
width:fit-content;

${(props) => {
switch (props.color) {
    case "blue":
    return css`
        background:#384551;

        &:hover{
            background:#34414D;
        }

        &:disabled{
            background:#484E53;
            color:#848D96;
        }
    `;
    case "outline":
        return css`
        background:none;
        border:1px solid #899385;
        color:#899385;
        padding: 7px 24px;
        &:hover{
            background:rgba(137, 147, 133, 0.1);
        }

        &:disabled{
            background:#484E53;
            color:#848D96;
        }
        `;
    default:
    return css`
        background:#899385;

        &:hover{
            background:#677860;
        }

        &:disabled{
            background:#d8d8d8;
            color:#848D96;
        }
    `;
}

}}

&#checkOutBtn{
    width:100%;
  }
`

export const ScoreInfo = styled.div`
display:flex;
justify-content:center;
gap:40px;
padding-bottom:120px;


@media screen and (min-width: 425px) and (max-width: 768px){ 
    gap:24px;
  }

  @media screen and (max-width: 425px){ 
    gap:0px;
    flex-direction:column-reverse;
    align-items: center;
  }
`


export const LeftArea = styled.div`
width:calc(60% - 20px - 80px);
height:fit-content;
background:#F3F3F3;
color:#384551;
font-size:16px;
font-weight:bold;

@media screen and (min-width: 425px) and (max-width: 768px){ 
    width:calc(60% - 12px - 40px);
  }

  @media screen and (max-width: 425px){ 
    width:calc(100% - 32px);
  }

& > div{
    display:flex;
    flex-direction:column;
    border-bottom:1px solid rgba(137,147,133,0.5);
    padding:40px 80px;
    width:calc(100% - 160px);

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        padding:24px 32px;
        width:calc(100% - 64px);
      }
    
      @media screen and (max-width: 425px){ 
        padding:32px 40px;
        width:calc(100% - 80px);
      }
}
& div img{
    margin:0 auto;
}

`

export const RightArea = styled.div`
width:calc(40% - 20px - 80px);
height:fit-content;
background:#F3F3F3;
color:#384551;

@media screen and (min-width: 425px) and (max-width: 768px){ 
    width:calc(40% - 12px - 40px);
  }

  @media screen and (max-width: 425px){ 
    width:calc(100% - 32px);
  }

& > div{
    display:flex;
    flex-direction:column;
    border-bottom:1px solid rgba(137,147,133,0.5);
    padding:28px 40px;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        padding:24px 32px;
      }
    
      @media screen and (max-width: 425px){ 
        padding:28px 40px;
      }
}

& div button{
    width:100%;
    margin:16px 0px;
}
`

export const ScoreImg = styled.img`
width:86%;
`
export const TagStyle = styled.div`
background: rgba(137,147,133,0.6);
color:#fff;
font-size:12px;
padding:10px 12px;
border-radius:20px;
`

export const TagOuter = styled.div`
display:flex;
flex-direction:row;
gap:8px;
flex-wrap: wrap;
margin:16px 0px 16px -4px;

`

export const Name = styled.div`
font-size:24px;
font-weight:bold;
line-height:50px;
`

export const Grade = styled.div`
display:flex;
flex-direction:row;
gap:4px;
margin-top:16px;

& div.greenstar{
    background-image:url(${StarGrade});
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
    height:16px;width:16px;
}

& div.graystar{
    background-image:url(${nonStarGrade});
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
    height:16px;width:16px;
}
`
export const Introduction = styled.div`
font-size:14px;
font-weight:normal;
line-height:24px;
color:#899385;
padding-top:16px;
`

export const Price = styled.div`
font-size:24px;
font-weight:bold;
line-height:40px;
`

export const Arranger = styled.div`
font-size:14px;
font-weight:normal;
line-height:24px;
color:#899385;
padding-top:16px;
`

export const Audio = styled.audio`
-webkit-transition:all 0.5s linear;
-moz-transition:all 0.5s linear;
-o-transition:all 0.5s linear;
transition:all 0.5s linear;
-moz-border-radius:7px 7px 7px 7px ;
-webkit-border-radius:7px 7px 7px 7px ;
border-radius:7px 7px 7px 7px ;
width:100%;
`

export const AddtoCartArea = styled.div`
height:fit-content;
background:#F3F3F3;
color:#384551;
width:100%;

position:fixed;
bottom:0;
display:flex;
flex-direction:column;

& > div:nth-child(1){
    padding:16px 40px;
}

& div:nth-child(2){
    display:flex;
    flex-direction:row;
    padding:0;
    gap:1px;
}
& button{
    padding:12px 16px;
    border-radius:0px;
    flex-grow:1;
}

& button:disabled{
    padding:12px 16px;
    border-radius:0px;
    flex-grow:1;
}

`