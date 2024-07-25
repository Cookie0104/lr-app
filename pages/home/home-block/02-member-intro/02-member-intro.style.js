import styled,{css} from "styled-components";

export const MemberIntroOuter = styled.div`
  width:100%;height:fit-content;
  background:#384551;
  position:relative;
`

export const MemberIntroInner = styled.div`
    width: calc(100% - 120px) ;height:100%;
    padding:100px 0px 100px 0px;margin:0 auto;
    border: solid;
    border-width: 0px 1px;
    border-image: linear-gradient(to bottom, rgba(255,255,255,0.6)50%, rgba(255,255,255,0.3)) 1;
    position:relative;
    display:flex;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
      width: calc(100% - 96px);
      padding:100px 8px;
    }
  
    @media screen and (max-width: 425px){ 
      width: calc(100% - 48px);
      display:flex;
      flex-direction:column;
      gap:80px;
    }
`

export const MemberOuter = styled.div`
display:flex;
flex-direction:column;
padding:0px 3vw;
width:calc( 100% / 3 );

@media screen and (min-width: 425px) and (max-width: 768px){ 
  padding:0px 2vw;
}

@media screen and (max-width: 425px){ 
  padding:0px 16px;
  width:calc( 100% - 32px);
}
`
export const Name = styled.div`
  font-family:"Orienta", sans-serif;letter-spacing: 10px;
  font-size:22px;text-align:center;line-height:40px;
  color:#FFFFFF;opacity:0.6;
  border-top: solid 2px #ffffff;
  border-bottom: solid 2px #ffffff;
  margin-top:40px;

 ${(props) => {
  switch (props.position) {
    case "photoDown":
      return css`
       order: -1;
       margin-bottom:40px;
       margin-top:0px;

        @media screen and (max-width: 425px){ 
          order: unset;
          margin-bottom:00px;
          margin-top:40px;
        }
      `;
    default:
      return css`
        order: unset;
      `;
  }
}}
`
export const Intro = styled.div`
 font-size:16px;text-align:left;line-height:30px;
 color:#FFFFFF;opacity:0.5;
 padding-top:50px;

 @media screen and (max-width: 425px){ 
  padding-top:24px;
}
`
export const PhotoOuter = styled.img`
  width:100%;
  height:;fit-content;
`