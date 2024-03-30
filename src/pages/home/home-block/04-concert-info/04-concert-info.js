import styled from "styled-components";
import SerialNumber from "../serial-number.js";
import SubTitle from "../../../../components/subtitle.js";
import {
  TeamIntroOuter,
  TeamIntroInner,
	Outer,
	ConcertPoster,
  WordOuter,
	ConcertName,
	ConcertDate,
  ConcertVenue,
  ConcertContent,
} from './04-concert-info.style.js';

const concertInformation = [
    {index:"1",
     imgLink:"https://imgur.com/f1nVHDv.png",
     concertName:"從前從前",
     date:"2024/06/06",
     venue:"中山堂",
     info: `以其藝術造詣而聞名的波蘭鋼琴家和教育家卡米爾·特卡爾斯基博士，榮登世界各地舞台，與大眾分享他深沉的音樂熱情。
     為鋼琴和大鍵琴演奏家，特卡爾斯基對巴洛克傑作的詮釋充滿深厚的興趣。`,
    },
    {index:"2",
     imgLink:"https://imgur.com/wW0q6xC.png",
     concertName:`林士偉單簧管獨奏會`,
     date:"2024/06/06",
     venue:"誠品音樂廳",
     info:"限定組合「SAturday」共同舉辦重奏音樂會，並以「查無此聲」為主軸，用演出者內心最熟悉的聲音，喚起大眾聆聽現場演奏的記憶。期間演奏《舞姬》、《Dama-Dance2》、《Riverdance》等樂曲，全場掌聲四起、座無虛席。",
    },
    {index:"3",
     imgLink:"https://imgur.com/kTLjtm2.png",
     concertName:"一觸擊發",
     date:"2024/06/06",
     venue:"新北市藝文中心",
     info:"本場演出將精選多首歌劇改編之作品，讓聽眾有如聆聽歌劇般的饗宴。單簧管將用他那有如絲絨般的音色和寬廣的音域，表達出歌劇那哀切、感傷和浪漫的意境，並透過如同花腔女高音般的音色的變化以及絢爛技巧，唱出優美的詠嘆調，帶領聽眾進入歌劇的世界。",
    },
  ];

function ConcertRecommend({imgLink,concertName,date,info,venue,index}){
return (
 <Outer index={index}>
    <ConcertPoster src={imgLink} alt='123'/>
    <WordOuter index={index}>
        <ConcertContent>{info}</ConcertContent>
        <ConcertVenue>{venue}</ConcertVenue>
        <ConcertDate>{date}</ConcertDate>
        <ConcertName>{concertName}</ConcertName> 
    </WordOuter>
 </Outer>
)
}

const ConcertInfo = () => {
 return (
     <TeamIntroOuter>
         <SerialNumber position="right" number="03"/>
         <TeamIntroInner><SubTitle title="音樂會報報"/>
            {concertInformation.map(({imgLink,concertName,date,info,venue,index}) => 
            <ConcertRecommend imgLink={imgLink} concertName={concertName} date={date} info={info} venue={venue} index={index}/>
                )}  
         </TeamIntroInner>
          
     </TeamIntroOuter>
 )
};

export default ConcertInfo ;
