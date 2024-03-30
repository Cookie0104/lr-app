import { Cover1 } from '../../assets/index.js';
import styled from "styled-components";
import Title from '../../components/title.js';
import TeamIntro from "./home-block/01-team-intro/01-team-intro.js";
import Footer from '../../components/footer.js';
import MemberIntro from './home-block/02-member-intro/02-member-intro.js';
import Experience from './home-block/03-experience/03-experience.js';
import ConcertInfo from './home-block/04-concert-info/04-concert-info.js';

const Home = () => {
    return (
        <div>
            <div id='banner'>
                <HomeBannerCover1 src={Cover1} alt="homeBanner" />
                <Title title="LR PERCCUSSION"/>
            </div>
            <TeamIntro/>
            <MemberIntro/>
            <Experience/>
            <ConcertInfo/>
            <Footer/>
        </div>
    )
};



export default Home ;

const HomeBannerCover1 = styled.img`
  width:100vw; height:auto;
  margin:100px 0px 0px 0px ;
`



