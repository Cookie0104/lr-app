import SerialNumber from "../serial-number.js";
import SubTitle from "../../../../components/subtitle.js";
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

const experienceWord = [
       {index:1,
        imgLink:"https://imgur.com/AXM8wpo.png",
        name:"2019《從前從前》東吳管樂社期末音樂會",
        concertName:"《從前從前》",
        intro: "以加藤大輝的擊樂三重奏《The Last Game》，是團體首次獨立登上舞台，也是東吳管樂社首度有打擊重奏的演出。從曲目選擇、練習安排到技巧的進修，皆由團員多次討論而成，用大學最後的舞台，開啟新的扉頁。",
       },
       {index:2,
        imgLink:"https://imgur.com/G8UbK4O.png",
        name:"2022《查無此聲》薩克斯風與擊樂重奏聯合音樂會",
        concertName:"《查無此聲》",
        intro:"後疫情時代，即使褪卻口罩，許多熟稔的關係依舊尷尬，或在過往習以為常的空間，成為最熟悉的陌生人。因此與限定組合「SAturday」共同舉辦重奏音樂會，並以「查無此聲」為主軸，用演出者內心最熟悉的聲音，喚起大眾聆聽現場演奏的記憶。期間演奏《舞姬》、《Dama-Dance2》、《Riverdance》等樂曲，全場掌聲四起、座無虛席。",
       },
       {index:3,
        imgLink:"https://imgur.com/0m7axVG.png",
        name:"2023《一觸擊發》薈萃擊樂重奏團與 LR Percussion 聯合音樂會",
        concertName:"《一觸擊發》",
        intro:"有感於以擊樂重奏形式的音樂會較少見，希望能將擊樂推廣給更多民眾知道，因此與「薈萃擊樂重奏團」聯合舉辦擊樂重奏音樂會，並演出《Triomania》、《Fiesta Colores》等曲目，分享擊樂的美妙與樂趣。",
       },
     ];
     
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
            <TeamIntroInner><SubTitle title="演出經歷"/></TeamIntroInner>
                <ImgBlockOuter>
                    {experienceWord.map(({imgLink,concertName})=><ImgBlock url={imgLink}>
                        <BlackMask>{concertName}</BlackMask>
                        </ImgBlock>)}
                </ImgBlockOuter>
                <WordBlockOuter>
                    {experienceWord.map(({name,intro}) => 
                    <ExperienceWord name={name} intro={intro} />
                    )}
                </WordBlockOuter>
        </TeamIntroOuter>
    )
};

export default Experience ;



