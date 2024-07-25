import styled from "styled-components";

export const TeamIntroOuter = styled.div`
    width:100%;height:fit-content;
    background:linear-gradient(#899385, #384551);
    position:relative;
    border: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #fff;
`
export const TeamIntroInner = styled.div`
    width: calc(100% - 120px) ;height:100%;
    padding:28vw 0px 170px 0px;margin:0 auto;
    position:relative;
    border: solid;
    border-width: 0px 1px;
    border-image: linear-gradient(to top, rgba(255,255,255,0.6)50%, rgba(255,255,255,0)) 1;
    position:relative;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        width: calc(100% - 80px);
      }
    
      @media screen and (max-width: 425px){ 
        width: calc(100% - 48px);
        padding:28vw 0px 100px 0px;
      }

`
export const IntroduceWordStyle = styled.p`
    width: 50% ;height:100%;
    font-size: 16px;font-weight:300;
    color:#fff;
    line-height:40px;
    padding-top:48px;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        width: calc( 100% - 40px );
      }
    
      @media screen and (max-width: 425px){ 
        width: calc( 100% - 16px );
        line-height:32px;
      }
`
export const ContentOuter = styled.div`
  margin:0px 0px 0px 8vw;
  display:flex;
  position:relative;
  height:100%;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    flex-direction:column;
    gap:40px;
  }

  @media screen and (max-width: 425px){ 
    flex-direction:column;
    gap:80px;
    margin:0px 0px 0px 16px;
  }
`

export const ImgOuter = styled.div`
  width: 50%;
  height:100%;      
  position:relative;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    width: calc(100% - 40px);
    height:80vw;
    margin-right:40px;
  }

  @media screen and (max-width: 425px){ 
    width: calc(100% - 24px);
    height:100vw;
    margin-right:24px;
  }
`