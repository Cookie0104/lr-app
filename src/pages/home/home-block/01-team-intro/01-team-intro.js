import { Teamphoto1 } from '../../../../assets/index.js';
import { Teamphoto2 } from '../../../../assets/index.js';
import SerialNumber from "../serial-number.js";
import SubTitle from "../../../../components/subtitle.js";
import "./home.css";
import {
  TeamIntroOuter,
  TeamIntroInner,
  IntroduceWordStyle,
  ContentOuter,
  ImgOuter,
} from "./01-team-intro.style.js"

const introduceWord = [
       {
         intro: "LR Percussion 是國內少見的擊樂三重奏樂團，起源於 2016 年冬天，一個舞台、兩盞燈、三雙琴槌，讓來自三所學校、三個科系的 Raccoon、Cookie、Star 邂逅。「L」與「R」是打擊樂手一定會接觸的基本練習，也象徵著成員的一步一腳 印，在左擁右抱的加持下，能有左右逢源的奇蹟，成為彼此的左膀右臂。不同於坊間藝術團體，LR Percussion 的成員皆非科班出身，小至練習的時間及曲目，大到活動的策劃與安排，全由團員自發完成。在組合成立以前，成員本來都只是普通的大學生，由於參加了各自學校的管樂團，有了去彼此學校協演的機會，成就了組合成立的契機。此後成員活躍於各大學生及社會樂團，累積許多演出經驗，也培養無可取代的默契。直至 2019 年，成員決定合演一首打擊重奏作為大學生涯的美好句點，LR Percussion 也正式獨立躍上檯面。畢業後，為了在工作之餘能維持對音樂的喜愛，除了每週團練，也開始音樂的創作與編寫。擊樂對我們而言不僅是生活的調劑，更是興趣的綿延，因此在 2022 年開啟了「Life Record」企劃，分享團練日常及所改編的樂曲，於粉專及頻道收穫一片讚聲。由於成員各自擁有本科專業，平時也以 LR Slashie 的名義，嘗試網頁及 APP 的開發與設計，為專業與興趣的共融鋪路，更榮獲坊間程式比賽的肯定，在紀錄作品的同時，期許揮灑更多協槓人生。",
       }
     ];
function IntroduceWord(props){
   return <IntroduceWordStyle>{props.intro}</IntroduceWordStyle>
 }


const TeamIntro = () => {
    return (
        <TeamIntroOuter>
            <SerialNumber number="01"/>
            <TeamIntroInner>
                <SubTitle position="left" title="團隊介紹"/>
                <ContentOuter>
                  {introduceWord.map((introduceWord) => {
                      return <IntroduceWord intro={introduceWord.intro} />
                      })}
                  <ImgOuter>
                    <img className='photo position1' src={Teamphoto1} alt="Teamphoto" />
                    <img className='photo position2' src={Teamphoto2} alt="Teamphoto" />
                  </ImgOuter>
                </ContentOuter>
            </TeamIntroInner>
        </TeamIntroOuter>
    )
};

export default TeamIntro ;


