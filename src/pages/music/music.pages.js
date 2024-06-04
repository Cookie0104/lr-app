import { Cover3 } from "../../assets/index";
import Footer from "../../components/footer";
import Subtitle from "../../components/subtitle";
import Title from "../../components/title";
import styled from "styled-components";
import LIFERECORD from "../../data/LIFERECORD.json";
import RwdYoutube from "./ytrwd";

const Music = () => {
  return (
    <div>
      <div id="banner">
        <CoverPhoto src={Cover3} alt="homeBanner" />
        <Title title="MUSIC" />
      </div>
      <MusicOuter>
        <Subtitle position="left" title="LIFE RECORD" />
        {LIFERECORD.map((liferecordintro) => {
          return (
            <>
              <IntroTitle>{liferecordintro.title}</IntroTitle>
              <IntroWord>{liferecordintro.intro}</IntroWord>
            </>
          );
        })}
        <VideoOuter>
            <RwdYoutube/>
        </VideoOuter>
      </MusicOuter>
      <Footer />
    </div>
  );
};

export default Music;

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
  background: linear-gradient(#242424, #384551);
  position: relative;
  padding: 80px 0px;
`;
export const IntroTitle = styled.div`
  font-size: 32px;
  color: #fff;
  letter-spacing: 4px;
  padding-left: 8vw;
  line-height: 60px;
  margin: 40px 0px 16px 0px;
`;

export const IntroWord = styled.div`
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  padding-left: 8vw;
  width: 60%;
  line-height: 30px;
`;

export const VideoOuter = styled.div`
height:60vh;
width:100%;
position:relative;
margin-top:80px;

&:after{
    content:"";
    width:30%;
    height:100%;
    background:#899385;
    position:absolute;
    right:0;
    top:0;
    
}
`;
