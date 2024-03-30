import styled from "styled-components";

export const TeamIntroOuter = styled.div`
    width:100%;height:fit-content;
    background:linear-gradient(#384551, #242424);
    position:relative;
    border: solid; border-width: 0px 0px 1px 0px; border-color: rgba(255,255,255,0.5);
    overflow:hidden;
`
export const TeamIntroInner = styled.div`
    width: calc(100% - 120px) ;height:100%;
    padding:12vw 0px 170px 0px;margin:0 auto;
    border: solid;
    border-width: 0px 1px;
    border-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0)75%) 1;
    position:relative;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        width: calc(100% - 80px);
      }
    
      @media screen and (max-width: 425px){ 
        width: calc(100% - 48px);
      }
`
export const ImgBlockOuter = styled.div`
    width:100%;
    height:50vh;
    margin-bottom:40px;
    display:flex;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
      margin-bottom:80px;
    }
      
    @media screen and (max-width: 425px){ 
        margin-bottom:80px;
    }
`

export const ImgBlock = styled.div`
    width:calc(100% / 3);
    height:50vh;
    max-height:600px;
    margin-bottom:40px;
    background-image: url(${(props)=>props.url});
    background-position: 50% 65%;
    background-size: cover;
    background-repeat: no-repeat;
    position:relative;

    animation-name: broadenCancel;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    @keyframes broadenCancel {
        0%   { width:calc(100% / 3 + 120px);}
        100% { width:calc(100% / 3 );}
      }

    &:hover {
        animation-name: broaden;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
      }

      @keyframes broaden {
        0%   { width:calc(100% / 3);}
        100% { width:calc(100% / 3 + 120px );}
      }

      @media screen and (min-width: 425px) and (max-width: 768px){ 
        @keyframes broaden {
            0%   { width:calc(100% / 3);}
            100% { width:calc(100% / 3 + 300px );}
          }
      }
      
      @media screen and (max-width: 425px){ 
        @keyframes broaden {
            0%   { width:calc(100% / 3);}
            100% { width:calc(100% / 3 + 240px );}
          }
      }
`

export const BlackMask = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    background:rgba(0,0,0,0.4);
    color:rgba(255,255,255,0);
    font-size:18px; font-weight:bold;
    text-align: center;
    letter-spacing:5px;
    line-height:60px;

    animation-name: maskCancel;
    animation-duration: 1ss;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
  padding:0px 2vw;
}

@media screen and (max-width: 425px){ 
  padding:0px 16px;
  width:calc( 100% - 32px);
}

    @keyframes maskCancel {
        0%   { background:rgba(0,0,0,0);
            color:rgba(255,255,255,1);}
        100% { background:rgba(0,0,0,0.4);}
    }

    &:hover {
        animation-name: mask;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
    }

    @keyframes mask {
        0%   { background:rgba(0,0,0,0.4);}
        100% { background:rgba(0,0,0,0);
            color:rgba(255,255,255,1);}
    }

`

export const WordBlockOuter = styled.div`
    width:calc(100% - 120px);
    height:fit-content;
    margin:0px auto;
    border: solid;
    border-width: 0px 1px;
    border-image: linear-gradient(to top, rgba(255,255,255,0.3), rgba(255,255,255,0)50%) 1;
    padding-bottom:100px;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        width: calc(100% - 80px);
      }
    
      @media screen and (max-width: 425px){ 
        width: calc(100% - 48px);
      }
`


export const ExperienceTitle = styled.p`
    max-width: 75% ;height:100%;
    font-size: 20px;font-weight:600;text-align:center;
    color:#fff;
    line-height:70px;
    margin:0 auto;
    letter-spacing:5px;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        max-width: 90% ;
        font-size: 18px;
        line-height:40px;
        margin:30px auto;
      }
    
      @media screen and (max-width: 425px){ 
        max-width: 90% ;
        font-size: 16px;
        line-height:24px;
        margin:20px auto;
      }
`

export const ExperienceContent = styled.p`
    max-width: 70% ;height:100%;
    font-size: 16px;font-weight:300;text-align:center;
    color:#fff;
    line-height:30px;
    margin:0 auto;
    opacity:0.6;

    @media screen and (min-width: 425px) and (max-width: 768px){ 
        max-width: 80%;
        margin-bottom:140px;
      }
    
      @media screen and (max-width: 425px){ 
        max-width: 90%;
        margin-bottom:100px;
      }
`