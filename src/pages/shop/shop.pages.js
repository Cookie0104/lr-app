import styled from "styled-components";
import Title from "../../components/title.js"
import Footer from "../../components/footer.js"
import { Search } from "../../assets/index.js";
import SHOP from "../../data/SHOP.json";

function ShowScore({name,image,price,introduction}){
    return (
        <>
            <img url={image} alt="123" />
            <div>{price}</div>
            <div>{name}</div>
            <div>{introduction}</div>
        </> 
    )
    }

function Shop() {
    return (
        <>
            <ShopOuter>
                <Title title="STORE" />
                <ShpoInner>
                    <SearchArea>
                        <SeachBar placeholder="輸入關鍵字"></SeachBar>
                        <SearchIcon>
                            <img src={Search} alt="search" />
                        </SearchIcon>
                    </SearchArea>
                    {SHOP.map(({ name,image,price,introduction }) => <ShowScore name={name} image={image} price={price} introduction={introduction}/>)}
                </ShpoInner>
            </ShopOuter>
            <Footer />
        </>
    );
}

export default Shop ;

const ShopOuter = styled.div`
padding: 280px 0px 64px 0px;
width:100% ; height:fit-content;
background:linear-gradient(to top, #384551, #242424);
`

const ShpoInner = styled.div`
margin:40px 80px 0px 80px; padding:0px 40px;
width:calc(100% - 160px) ; max-width:1200px; height:fit-content;
background:#F3F3F3;
`
const SearchArea = styled.div`
height:104px;
width:calc(100% - 80px);
margin:0px 40px;
border-bottom:1px solid rgba(56,69,81,0.5);
display:flex;
align-items: center
`

const SeachBar = styled.input`
background:#fff;
border:1px solid #879184;
border-radius:8px 0px 0px 8px;
font-size:20px;
padding:12px 20px;
line-height:30px;
width:300px;
height:44px;
color:#879184;
box-sizing:border-box ;

&:focus{
    outline:1px solid #879184;
    height:42px;
}

&::placeholder{
    color: red;
}

`

const SearchIcon = styled.div`
background:#879184;
width:44px;
height:44px;
border-radius:0px 8px 8px 0px;
display:flex;
align-items: center;
justify-content: center;
`
