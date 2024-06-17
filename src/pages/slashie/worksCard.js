import styled from "styled-components";
import { useContext } from "react";
import { PopupContext } from "./popup.context";

const Works = ({ src, name, brief, onClick }) => {
  return (
    <WorksContainer onClick={onClick}>
      <img src={src} alt="works" />
      <WorkName>{name}</WorkName>
      <WorkBrief>{brief}</WorkBrief>
    </WorksContainer>
  );
};

const WorksCard = ({ works }) => {
  const { toggleIsPopup } = useContext(PopupContext);
  return (
    <>
      {works.map(({ name, brief, src, id }) => {
        return (
          <Works
            onClick={() => toggleIsPopup({ id })}
            name={name}
            brief={brief}
            src={src}
          />
        );
      })}
    </>
  );
};

export default WorksCard;

export const WorksContainer = styled.div`
  width: calc((100% - 120px) / 3);
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: calc((100% - 72px) / 3);
    min-width:200px;
  }

  @media screen and (max-width: 425px) {
  width: 100%;
  margin-bottom:24px;
  }
`;

const WorkName = styled.div`
  font-size: 18px;
  color: #fff;
  letter-spacing: 1px;
  line-height: 24px;
  margin-top: 16px;
`;

const WorkBrief = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
  line-height: 24px;
  margin-top: 4px;
`;
