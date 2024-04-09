import {
  MemberIntroOuter,
  MemberIntroInner,
  MemberOuter,
  Name,
  Intro,
  PhotoOuter,
} from "./02-member-intro.style"
import MEMBERINTRODUCTION from "../../../../data/MEMBERINTRODUCTION.json"


function MemberIntroduceWord({name,intro,photo,position}){
   return (
    <MemberOuter>
      <PhotoOuter src={photo} alt='name'/>
      <Name position={position}>{name}</Name>
      <Intro>{intro}</Intro>
    </MemberOuter>
   )
 }

const MemberIntro = () => {
    return (
      <MemberIntroOuter>
        <MemberIntroInner>
          {MEMBERINTRODUCTION.map(({name,intro,photo,position},index) => {
          return (
          <>
            <MemberIntroduceWord position={position} name={name} intro={intro} photo={photo} index={index} />
          </>
          )
        })}
        </MemberIntroInner>
      </MemberIntroOuter>        
    )
};

export default MemberIntro ;

