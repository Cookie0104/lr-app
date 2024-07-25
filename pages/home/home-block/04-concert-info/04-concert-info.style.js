import styled,{css} from "styled-components";

export const TeamIntroOuter = styled.div`
 width:100%;height:fit-content;
 background:linear-gradient(#242424, #899385);
 position:relative;
 border: solid;border-width: 0px 0px 1px 0px;border-color: rgba(255,255,255,0.5);
 overflow:hidden;
`
export const TeamIntroInner = styled.div`
 width: calc(100% - 120px) ;height:100%;
 padding:calc(14vw + 100px ) 0px 100px 0px;margin:0 auto;
 border: solid;
 border-width: 0px 1px;
 border-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5)100%) 1;
 position:relative;

 @media screen and (min-width: 425px) and (max-width: 768px){ 
  width: calc(100% - 80px);
  padding:calc(14vw + 200px ) 0px 80px 0px;
}

@media screen and (max-width: 425px){ 
  width: calc(100% - 48px);
  padding:calc( 360px ) 0px 0px 0px;
}
`

export const Outer = styled.div`
 display:flex;
 gap:60px;
 margin-bottom:100px;
 align-items: flex-end;

 ${(props) => {
    switch (props.index) {
      case "2":
        return css`
         flex-direction:row-reverse;
        `;
      default:
        return css`
          flex-direction:row;
        `;
    }
  }}

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    flex-direction:row;
    align-items: center;
    gap:30px;

    ${(props) => {
      switch (props.index) {
        case "2":
          return css`
           flex-direction:row-reverse;
          `;
        default:
          return css`
            flex-direction:row;
          `;
      }
    }}
  }

  @media screen and (max-width: 425px){ 
    flex-direction:column;
    align-items: center;
  }
`

export const ConcertPoster = styled.img`
width:30vw; max-width:800px;
height:fit-content;

@media screen and (min-width: 425px) and (max-width: 768px){ 
  width:35vw; max-width:800px;
}

@media screen and (max-width: 425px){ 
  width:100%;
}
`

export const WordOuter = styled.div`
 display:flex;
 flex-direction:column-reverse;
 margin: 0px 100px 4px 0px;
 font-size: 16px;
 font-weight: 300;
 text-align: left;
 line-height: 30px;

 ${(props) => {
    switch (props.index) {
      case "2":
        return css`
         margin:0px 0px 0px 60px;
        `;
      default:
        return css`
            
        `;
    }
  }}

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    margin: 0px 32px 4px 0px;
    align-items: center;

    ${(props) => {
      switch (props.index) {
        case "2":
          return css`
           margin-left:40px;
           margin-right:0px;
          `;
        default:
          return css`
              
          `;
      }
    }}
  }
  
  @media screen and (max-width: 425px){ 
    margin: 0px 16px 4px 16px;
  }
`

export const ConcertName = styled.div`
width:fit-content;
padding:0px 48px; 
margin:30px 0px;
font-size: 30px;
 font-weight: 600;
 text-align: left;
 line-height: 60px;
 border-top:solid 1px rgba(255,255,255,0.6);
 border-bottom:solid 1px rgba(255,255,255,0.6);
 color:rgba(255,255,255,0.8);
 letter-spacing:5px;

 @media screen and (min-width: 425px) and (max-width: 768px){ 
    font-size: 24px;
    padding:0px 32px; 
    line-height: 56px;
  }

  @media screen and (max-width: 425px){ 
    font-size: 18px;
    padding:0px 24px; 
    line-height: 40px;
  }
`

export const ConcertDate = styled.div`
 font-size: 18px;
 font-weight: 600;
 text-align: left;
 line-height: 30px;
 color:rgba(255,255,255,0.8);
 letter-spacing:5px;
 
 @media screen and (min-width: 425px) and (max-width: 768px){ 
  font-size: 16px;
  line-height: 32px;
}

@media screen and (max-width: 425px){ 
  font-size: 14px;
  line-height: 24px;
}
`
export const ConcertVenue = styled.div`
 font-size: 18px;
 font-weight: 600;
 text-align: left;
 line-height: 30px;
 color:rgba(255,255,255,0.8);
 letter-spacing:5px;

 @media screen and (min-width: 425px) and (max-width: 768px){ 
  font-size: 16px;
  line-height: 32px;
}

@media screen and (max-width: 425px){ 
  font-size: 14px;
  line-height: 24px;
}
`

export const ConcertContent = styled.p`
color: rgba(255,255,255,0.6);
margin:40px 0px 40px 0px;

@media screen and (min-width: 425px) and (max-width: 768px){ 
  margin:40px 0px 40px 0px;
}

@media screen and (max-width: 425px){ 
  margin:24px 0px 24px 0px;
}

`
