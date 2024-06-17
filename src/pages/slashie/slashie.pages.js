import styled from "styled-components";
import { Cover4 } from "../../assets/index";
import Footer from "../../components/footer";
import Subtitle from "../../components/subtitle";
import Title from "../../components/title";
import SLASHIE from "../../data/SLASHIE.json";
import WorksCard from "./worksCard";
import WORKS from "../../data/WORKS.json";
import { useContext } from "react";
import { PopupContext } from "./popup.context";
import Popup from "./workPopUp";

const Slashie = () => {
  const { isPopup } = useContext(PopupContext);
  return (
    <div>
      <div id="banner">
        <CoverPhoto src={Cover4} alt="homeBanner" />
        <Title title="SLASHIE" />
      </div>
      <SlashieOuter>
        <SlashieInner>
          <Subtitle position="left" title="我們的斜槓人生" />
          {SLASHIE.map((liferecordintro) => {
            return (
              <>
                <IntroWord>{liferecordintro.intro}</IntroWord>
              </>
            );
          })}
          <WorksOuter>
            <WorksCard works={WORKS} />
          </WorksOuter>
        </SlashieInner>
      </SlashieOuter>
      <Footer />
      {isPopup && <Popup />}
    </div>
  );
};

export default Slashie;

export const CoverPhoto = styled.img`
  width: 100vw;
  height: auto;
  margin: 100px 0px 0px 0px;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 425px) {
    margin-top: 60px;
  }
`;

export const SlashieInner = styled.div`
  width: calc(100% - 120px);
  height: 100%;
  padding: 4vw 0px 40px 0px;
  margin: 0 auto;
  position: relative;
  border: solid;
  border-width: 0px 1px;
  border-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0)
    )
    1;
  position: relative;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: calc(100% - 80px);
  }

  @media screen and (max-width: 425px) {
    width: calc(100% - 48px);
    padding: 28vw 0px 100px 0px;
  }
`;

export const SlashieOuter = styled.div`
  width: 100%;
  height: fit-content;
  background: linear-gradient(#384551, #242424);
  position: relative;
  padding: 40px 0px 0px 0px;
`;

export const IntroWord = styled.div`
  margin-top: 40px;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  padding-left: 8vw;

  width: 60%;
  line-height: 30px;
  opacity: 0.5;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
    width: calc(100% - 16vw);
  }
`;

const WorksOuter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 8vw;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    flex-wrap: wrap;
    gap:24px;
    justify-content: space-around;
  }

  @media screen and (max-width: 425px) {
    justify-content: space-between;
    flex-direction: column;
  }
`;
