import styled from "styled-components";

const Checkout = () => {
  return <CheckoutOuter>結帳</CheckoutOuter>;
};

export default Checkout;

const CheckoutOuter = styled.div`
    width:100%;
    height:fit-content;
    min-height:calc(100vh - 100px);
    background:linear-gradient(to top, #384551, #242424);
    color:#fff;
    margin-top:100px;
`
