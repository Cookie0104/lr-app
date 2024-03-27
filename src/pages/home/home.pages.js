import { Cover1 } from '../../assets/index.js';
import styled from "styled-components";
import Title from '../../components/title.js';
import TeamIntro from "./homeBlock/teamIntro.js";
import Footer from '../../components/footer.js';
import MemberIntro from './homeBlock/memberIntro.js';
import Experience from './homeBlock/experience.js';

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
            <Footer/>
        </div>
    )
};



export default Home ;

const HomeBannerCover1 = styled.img`
  width:100%; height:auto;
  margin:100px 0px 0px 0px ;
`



