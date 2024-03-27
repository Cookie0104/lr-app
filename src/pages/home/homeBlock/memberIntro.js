import { Raccoon } from '../../../assets/index.js';
import { Star } from '../../../assets/index.js';
import { Cookie } from '../../../assets/index.js';
import styled from "styled-components";
import "./home.css";

const memberintroduceWord = [
       {name:"Raccoon",
       photo:"Raccoon",
       intro:"7 歲開始學習小提琴，師事阮子恬老師與詹青青老師。高中參與師大音樂系孫愛光教授成立的金色陽光青少年樂團擔任協奏曲獨奏，從而接觸打擊樂器。現職為機率工程師，並擔任 LR Percussion 的編曲及音樂剪輯一職，同時也是大稻埕樂團、奇岩室內樂團的小提琴、中提琴及打擊樂手，並與朋友自組各式室內樂團，多次受邀於開幕典禮及婚宴場合演出。" ,
      },
       {name:"Star",
       photo:"Star",
       intro:"6 歲始接觸打擊樂，國小加入管樂團，曾師事魏華瑤老師、楊雅茹老師。國中參加校內管弦樂團及打擊樂團，擁有各類全國學生音樂比賽與音樂會演出經驗。高中再師事余沁芸老師，曾隨校內管樂團赴馬來西亞交流，並擔任木琴協奏曲獨奏。現職為國文老師，並擔任 LR Percussion 的粉專管理一職，同時也在山嵐管樂團從事樂團行政，持續推廣音樂教育。",
      },
       {name:"Cookie",
       photo:"Cookie",
       intro:"4 歲因緣際會由郭景淑老師啟蒙學習鋼琴，開啟音樂學習之路。國小參加校內打擊樂團學習打擊樂，師事楊絢雯老師，另學習中國笛，師事莊喜淑老師、胡俊賢老師。 國中加入高雄市國樂團附設青少年國樂團，隨團參與多場音樂會演出。現職為 UIUX Designer，並負責 LR Percussion 的影片剪輯，也時常受邀主導海報及文宣商品的策劃，對視覺設計有高敏銳度。",
      },
     ];
function MemberIntroduceWord(props){
   return (
    <MemberOuter>
      <Name>{props.name}</Name>
      <Intro>{props.intro}</Intro>
    </MemberOuter>
   )
 }

function ImgDiv(props){
  console.log(props.name);
  return (
   <ImgOuter imgUrl="${props.name}"></ImgOuter>
  )
}

const MemberOuter = styled.div`
display:block;
padding:0px 3vw;
`
const Name = styled.div`
 font-family:"Orienta", sans-serif;letter-spacing: 10px;
 font-size:22px;text-align:center;line-height:40px;
 color:#FFFFFF;opacity:0.6;
 border-top: solid 2px #ffffff;
 border-bottom: solid 2px #ffffff;
`
const Intro = styled.div`
 font-size:16px;text-align:left;line-height:30px;
 color:#FFFFFF;opacity:0.5;
 padding-top:50px;
`
const ImgOuter = styled.div`
  background:url(${(props)=>props.imgUrl}); 
`


const MemberIntro = () => {
    return (
      <MemberIntroOuter>
        <MemberIntroInner>
          {memberintroduceWord.map((memberintroduceWord, index) => {
          return (
          <>
            <MemberIntroduceWord name={memberintroduceWord.name} intro={memberintroduceWord.intro} photo={memberintroduceWord.photo} key={index} index={index} />
            <ImgDiv imgUrl={memberintroduceWord.photo} ></ImgDiv>
          </>
          )
        })}
        </MemberIntroInner>
      </MemberIntroOuter>        
    )
};

export default MemberIntro ;

const MemberIntroOuter = styled.div`
  width:100%;height:fit-content;
  background:#384551;
  position:relative;
`

const MemberIntroInner = styled.div`
    width: calc(100% - 120px) ;height:100%;
    padding:100px 0px 170px 0px;margin:0 auto;
    border: solid;
    border-width: 0px 1px;
    border-image: linear-gradient(to bottom, rgba(255,255,255,0.6)50%, rgba(255,255,255,0.3)) 1;
    position:relative;
    display:flex;
`