import styled from "styled-components";

const SerialNumber = (props) => {
    return (
        <SerialNo>{props.number}</SerialNo>
    )
};

export default SerialNumber ;

const SerialNo = styled.h1`
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 300px;
    color:rgba(288,232,227,0.1);
    position:absolute;left:-120px;top:30px;
`