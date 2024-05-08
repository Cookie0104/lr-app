import styled from "styled-components";
import SHOP from "../data/SHOP.json"

function MemberIntroduceWord({name}){
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
                        <MemberIntroduceWord name={name} />
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
position:absolute;
z-index:20;
background:#fff;
right:0;
`