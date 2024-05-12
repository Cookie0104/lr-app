import styled from "styled-components";
import SHOP from "../data/SHOP.json"

function CartContent({name}){
    return (
     <div>
       <div>{name}</div>
     </div>
    )
  }

const Cart = () => {
    return(
        <>
            <Outer>我是購物車
            {SHOP.map(({name}) => {
                return (
                    <>
                        <CartContent name={name} />
                    </>
                    )
                })} 
            </Outer>
        </>
        
    )
};

export default Cart;

const Outer = styled.div`
width:400px;
height:400px;
position:fixed;
z-index:300;
background:#F3F3F3;
right:10px;
top:80px;
border-radius:4px;
box-shadow: #0000001f 0px 0px 10px 0px;
`