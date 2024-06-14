import { useState,useEffect } from 'react';
import { Cover3 } from "../../assets/index";
import Footer from "../../components/footer";
import Subtitle from "../../components/subtitle";
import Title from "../../components/title";
import LIFERECORD from "../../data/LIFERECORD.json";
import RwdYoutube from "./ytrwd";
import Button from "../../components/button";
import {CoverPhoto,
  MusicOuter,
  IntroTitle,
  IntroWord,
  VideoOuter,
  ButtonOuter
} from "./music.style"

const Music = () => {
  const [isPaused, setIsPaused] = useState(false);
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

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
          <RwdYoutube />
        </VideoOuter>
        <ButtonOuter>
          <a target="_blank" href="https://www.youtube.com/@lrpercussion3766"><Button color="blue" name="前往TY看更多>>"></Button></a>
        </ButtonOuter>
      </MusicOuter>
      <Footer />
    </div>
  );
};

export default Music;

