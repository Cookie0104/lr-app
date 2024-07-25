import SerialNumber from "../serial-number.js";
import Subtitle from "../../../../components/subtitle.js";
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
import CONCERTINFOMATION from "../../../../data/CONCERTINFORMATION.json"


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
         <TeamIntroInner><Subtitle title="音樂會報報"/>
            {CONCERTINFOMATION.map(({imgLink,concertName,date,info,venue,index}) => 
            <ConcertRecommend imgLink={imgLink} concertName={concertName} date={date} info={info} venue={venue} index={index}/>
                )}  
         </TeamIntroInner>
          
     </TeamIntroOuter>
 )
};

export default ConcertInfo ;

