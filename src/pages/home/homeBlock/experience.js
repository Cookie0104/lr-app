import { Concert1 } from '../../../assets/index.js';
import { Concert2 } from '../../../assets/index.js';
import { Concert3 } from '../../../assets/index.js';
import styled from "styled-components";
import SerialNumber from "./serialNumber.js";
import SubTitle from "../../../components/subTitle.js";
import "./home.css";
import SetLinearGradientPosition from '../../../components/setSubTitlePosition.js';

const experienceWord = [
       {index:1,
        name:"2019《從前從前》東吳管樂社期末音樂會",
        intro: "以加藤大輝的擊樂三重奏《The Last Game》，是團體首次獨立登上舞台，也是東吳管樂社首度有打擊重奏的演出。從曲目選擇、練習安排到技巧的進修，皆由團員多次討論而成，用大學最後的舞台，開啟新的扉頁。",
       },
       {index:2,
        name:"2022《查無此聲》薩克斯風與擊樂重奏聯合音樂會",
        intro:"後疫情時代，即使褪卻口罩，許多熟稔的關係依舊尷尬，或在過往習以為常的空間，成為最熟悉的陌生人。因此與限定組合「SAturday」共同舉辦重奏音樂會，並以「查無此聲」為主軸，用演出者內心最熟悉的聲音，喚起大眾聆聽現場演奏的記憶。期間演奏《舞姬》、《Dama-Dance2》、《Riverdance》等樂曲，全場掌聲四起、座無虛席。",
       },
       {index:3,
        name:"2023《一觸擊發》薈萃擊樂重奏團與 LR Percussion 聯合音樂會",
        intro:"有感於以擊樂重奏形式的音樂會較少見，希望能將擊樂推廣給更多民眾知道，因此與「薈萃擊樂重奏團」聯合舉辦擊樂重奏音樂會，並演出《Triomania》、《Fiesta Colores》等曲目，分享擊樂的美妙與樂趣。",
       },
     ];
function ExperienceWord(props){
   return (
    <>
        <ExperienceTitle>{props.name}</ExperienceTitle>
        <ExperienceContent>{props.intro}</ExperienceContent>
    </>
   )
 }

 const ExperienceTitle = styled.p`
    width: 75% ;height:100%;
    font-size: 20px;font-weight:600;text-align:center;
    color:#fff;
    line-height:70px;
    margin:0 auto;
    letter-spacing:5px;
`

const ExperienceContent = styled.p`
    width: 70% ;height:100%;
    font-size: 16px;font-weight:300;text-align:center;
    color:#fff;
    line-height:30px;
    margin:0 auto;
    opacity:0.6;
`


const Experience = () => {

    if( props.leftTitle ){
        const linearGradientPosition = "linear-gradient(to right, rgba(255,255,255,0.6)50%, rgba(255,255,255,0)) 1";
        const SubTitle = styled.div`
            border-image:${linearGradientPosition};
        `
    }else{
        const linearGradientPosition = "linear-gradient(to left, rgba(255,255,255,0.6)50%, rgba(255,255,255,0)) 1";
        const SubTitle = styled.div`
            border-image:${linearGradientPosition};
        `
    }
    
    return (
        <TeamIntroOuter>
            <SerialNumber number="02"/>
            <TeamIntroInner><SubTitle leftTitle={false} title="演出經歷"/></TeamIntroInner>
                <ImgBlockOuter>
                    <ImgBlock></ImgBlock>
                    <ImgBlock></ImgBlock>
                    <ImgBlock></ImgBlock>
                </ImgBlockOuter>
                    {experienceWord.map((experienceWord) => {
                    return <ExperienceWord name={experienceWord.name} intro={experienceWord.intro} />
                    })}
        </TeamIntroOuter>
    )
};

export default Experience ;


const TeamIntroOuter = styled.div`
    width:100%;height:fit-content;
    background:linear-gradient(#384551, #242424);
    position:relative;
    border: solid;border-width: 0px 0px 1px 0px;border-color: #fff;
    padding-bottom:100px;
`
const TeamIntroInner = styled.div`
    width: calc(100% - 120px) ;height:100%;
    padding:28vw 0px 170px 0px;margin:0 auto;
    border: solid;
    border-width: 0px 1px;
    border-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0)30%) 1;
    position:relative;
`
const ImgBlockOuter = styled.div`
    width:100%;
    height:50vh;
    margin-bottom:40px;
    display:flex;
`

const ImgBlock = styled.div`
    width:calc(100% / 3);
    height:50vh;
    max-height:600px;
    margin-bottom:40px;
    background-image: url(${Concert1});
    background-position: 50% 65%;
    background-size: 120%;

    &:hover {
        animation-name: broaden;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;

      }
      @keyframes broaden {
        0%   { width:calc(100% / 3);}
        100% { width:calc(100% / 2);}
      }
`
