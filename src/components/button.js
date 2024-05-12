import styled from "styled-components";

const Button = ({name,id,disabled}) => {
    return(
        <ButtonStyle id={id} disabled={disabled} >{name}</ButtonStyle>
    )
};

export default Button ;


const ButtonStyle = styled.button`
    color:#FFF;
    background:#899385;
    letter-spacing:1px;
    font-size:14px;
    border:0px;
    border-radius:4px;
    padding:10px 0px;
    width:100%;

    &:hover{
        background:#677860;
    }

    &:active{
        background:#565D53;
    }

    &:disabled{
        background:#D6D6D6;
        color:#B0B0B0;
    }
`
