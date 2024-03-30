import styled,{css} from "styled-components";

const SerialNumber = ({number,position}) => {
    return (
        <SerialNo position={position}>{number}</SerialNo>
    )
};

export default SerialNumber ;

const SerialNo = styled.h1`
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 300px;
    color:rgba(288,232,227,0.1);

    ${(props) => {
        switch (props.position) {
          case "right":
            return css`
                position:absolute;
                right:-50px;top:280px;

                @media screen and (min-width: 425px) and (max-width: 768px){ 
                    right:-30px;top:200px;
                  }
                
                  @media screen and (max-width: 425px){ 
                    right:-10px;top:190px;
                  }
            `;
          default:
            return css`
                position:absolute;
                left:-120px;top:30px;

                @media screen and (min-width: 425px) and (max-width: 768px){ 
                    left:-64px;top:30px;
                  }
                
                  @media screen and (max-width: 425px){ 
                    left:-44px;top:30px;
                  }
            `;
        }
      }}

      @media screen and (min-width: 425px) and (max-width: 768px){ 
        font-size: 200px;
      }
    
      @media screen and (max-width: 425px){ 
        font-size: 150px;
      }
`