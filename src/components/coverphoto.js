import styled from "styled-components";

export const CoverPhoto = styled.img`
  width:100vw; height:auto;
  margin:100px 0px 0px 0px ;

  @media screen and (min-width: 425px) and (max-width: 768px){ 
    margin-top: 70px;
  }

  @media screen and (max-width: 425px){ 
    margin-top: 60px;
  }
`