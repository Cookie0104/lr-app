import { Teamphoto1 } from "../../../../assets/index.js";
import { Teamphoto2 } from "../../../../assets/index.js";
import { Parallax } from "react-parallax";
import SerialNumber from "../serial-number.js";
import Subtitle from "../../../../components/subtitle.js";
import "./home.css";
import {
  TeamIntroOuter,
  TeamIntroInner,
  IntroduceWordStyle,
  ContentOuter,
  ImgOuter,
} from "./01-team-intro.style.js";
import TEAMINTRODUCTION from "../../../../data/TEAMINTRODUCTION.json";

function IntroduceWord(props) {
  return <IntroduceWordStyle>{props.intro}</IntroduceWordStyle>;
}

const TeamIntro = () => {
  return (
    <TeamIntroOuter>
      <SerialNumber number="01" />
      <TeamIntroInner>
        <Subtitle position="left" title="團隊介紹" />
        <ContentOuter>
          {TEAMINTRODUCTION.map((introduceWord) => {
            return <IntroduceWord intro={introduceWord.intro} />;
          })}
          <ImgOuter>
            <img className="photo position1" src={Teamphoto1} alt="Teamphoto" />
            <div className="beforetest">
              <img
                className="photo position2"
                src={Teamphoto2}
                alt="Teamphoto"
              />
            </div>
          </ImgOuter>
        </ContentOuter>
      </TeamIntroInner>
    </TeamIntroOuter>
  );
};

export default TeamIntro;
