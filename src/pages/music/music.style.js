import styled from "styled-components";

export const CoverPhoto = styled.img`
  width: 100vw;
  height: auto;
  margin: 100px 0px 0px 0px;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 425px) {
    margin-top: 60px;
  }
`;
export const MusicOuter = styled.div`
  width: 100%;
  height: fit-content;
  background: linear-gradient(#384551, #242424);
  position: relative;
  padding: 40px 0px;
`;
export const IntroTitle = styled.div`
  font-size: 32px;
  color: #fff;
  letter-spacing: 4px;
  padding-left: 8vw;
  line-height: 60px;
  margin: 40px 0px 16px 0px;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 425px) {
    font-size: 7vw;
  }
`;

export const IntroWord = styled.div`
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  padding-left: 8vw;
  width: 60%;
  line-height: 30px;
  opacity:0.5;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
    width: calc(100% - 16vw);
  }
`;

export const VideoOuter = styled.div`
  height: 60vh;
  width: 100%;
  position: relative;
  margin-top: 80px;

  &:after {
    content: "";
    width: 30%;
    height: 100%;
    background: #899385;
    position: absolute;
    right: 0;
    top: 0;
  }

  @media screen and (min-width: 425px) and (max-width: 768px) {
    height: 400px;
    margin-top: 40px;
  }

  @media screen and (max-width: 425px) {
    height: 280px;
    margin-top: 20px;
  }
`;

export const ButtonOuter = styled.div`
  padding-top: 40px;
  margin: 0px auto;
  width: 300px;
`;


export const Videobox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & iframe {
    top: 0;
    left: 0;
    width: calc(55vh / 9 * 16);
    max-width: 80vw;
    height: 55vh;
    max-height: calc(80vw / 16 * 9);
    z-index: 2;
  }
  
  & >div{
    width: calc(55vh / 9 * 16);
    max-width: 80vw;
    height: 55vh;
    max-height: calc(80vw / 16 * 9);
    z-index: 2;
  }
`;

