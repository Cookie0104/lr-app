import styled from "styled-components";
import WORKS from "../../data/WORKS.json";
import { Close } from "../../assets/index";
import { useContext } from "react";
import { PopupContext } from "./popup.context";

const Popup = () => {
  const { getIndex } = useContext(PopupContext);
  const { ClosePopUp } = useContext(PopupContext);
  const thisData = WORKS.find((WORKS) => WORKS.id === getIndex);
  console.log(thisData);

  return (
    <BlackMask>
      <PopupBg>
        <CloseBtn src={Close} onClick={ClosePopUp} alt="close" />
        <ScrollOuter>
          <ScrollInner>
            <WorkTitle>{thisData.name}</WorkTitle>
            <InfoOuter>
              <div>{thisData.time}</div>
              <div>{thisData.catagory}</div>
            </InfoOuter>
            <WorkImg src={thisData.src} alt="image" />
            <WorkIntro>{thisData.intro}</WorkIntro>
          </ScrollInner>
        </ScrollOuter>
      </PopupBg>
    </BlackMask>
  );
};

export default Popup;

const BlackMask = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupBg = styled.div`
  width: 80vw;
  max-width: 900px;
  height: 80vh;
  max-height: 600px;
  background: #f3f3f3;
  border-radius: 8px;
  position: relative;
  padding: 40px 60px;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: calc(80vw - 32px);
    max-width: 900px;
    height: 80vh;
    max-height: 600px;
    padding: 32px 44px;
  }

  @media screen and (max-width: 425px) {
    width: calc(80vw - 32px);
    height: 90vh;
    padding: 24px 32px;
  }
`;

const ScrollOuter = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
`;

const ScrollInner = styled.div`
  height: fit-content;
`;

const CloseBtn = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 24px;
  right: 24px;
  opacity: 0.6;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

const WorkTitle = styled.div`
  font-size: 44px;
  color: #384551;
  letter-spacing: 1px;
  font-weight: bold;
  line-height: 60px;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
  }

  @media screen and (max-width: 425px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const InfoOuter = styled.div`
  display: flex;
  color: #384551;
  line-height: 40px;
  font-size: 18px;
  letter-spacing: 1px;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const WorkImg = styled.img`
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const WorkIntro = styled.div`
  font-size: 16px;
  color: #384551;
  letter-spacing: 1px;
  line-height: 32px;
  margin-top: 24px;

   @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
