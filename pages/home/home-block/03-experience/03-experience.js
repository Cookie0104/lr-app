import SerialNumber from "../serial-number.js";
import Subtitle from "../../../../components/subtitle.js";
import {
  TeamIntroOuter,
  TeamIntroInner,
  ImgBlockOuter,
  ImgBlock,
  BlackMask,
  WordBlockOuter,
  ExperienceTitle,
  ExperienceContent,
} from "./03-experience.style.js";
import EXPERINCE from "../../../../data/EXPERIENCE.json"

     
function ExperienceWord({name,intro}){
   return (
    <>
        <ExperienceTitle>{name}</ExperienceTitle>
        <ExperienceContent>{intro}</ExperienceContent>
    </>
   )
 }

const Experience = () => {
    return (
        <TeamIntroOuter>
            <SerialNumber number="02"/>
            <TeamIntroInner><Subtitle title="演出經歷"/></TeamIntroInner>
                <ImgBlockOuter>
                    {EXPERINCE.map(({imgLink,concertName})=><ImgBlock url={imgLink}>
                        <BlackMask>{concertName}</BlackMask>
                        </ImgBlock>)}
                </ImgBlockOuter>
                <WordBlockOuter>
                    {EXPERINCE.map(({name,intro}) => 
                    <ExperienceWord name={name} intro={intro} />
                    )}
                </WordBlockOuter>
        </TeamIntroOuter>
    )
};

export default Experience ;



