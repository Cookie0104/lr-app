import styled, { css } from "styled-components";

const Button = ({ name, id, disabled ,color}) => {
  return (
    <ButtonStyle color={color} id={id} disabled={disabled}>
      {name}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  color: #fff;
  background: #899385;
  letter-spacing: 1px;
  font-size: 14px;
  border: 0px;
  border-radius: 4px;
  padding: 10px 0px;
  width: 100%;

  &:hover {
    background: #677860;
  }

  &:active {
    background: #565d53;
  }

  &:disabled {
    background: #d6d6d6;
    color: #b0b0b0;
  }
  ${(props) => {
    switch (props.color) {
      case "blue":
        return css`
          background: #384551;

          &:hover {
            background: #34414d;
          }

          &:disabled {
            background: #484e53;
            color: #848d96;
          }
        `;
      case "outline":
        return css`
          background: none;
          border: 1px solid #899385;
          color: #899385;
          padding: 7px 24px;
          &:hover {
            background: rgba(137, 147, 133, 0.1);
          }

          &:disabled {
            background: #484e53;
            color: #848d96;
          }
        `;
      default:
        return css`
          background: #899385;

          &:hover {
            background: #677860;
          }

          &:disabled {
            background: #d8d8d8;
            color: #848d96;
          }
        `;
    }
  }}
`;
