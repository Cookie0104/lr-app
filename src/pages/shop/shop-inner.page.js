import styled,{css} from "styled-components";
import SHOP from "../../data/SHOP.json";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Scorepage = () => {
    const { id } = useParams();

    //指定Data
    const thisData = SHOP.find((SHOP) => SHOP.id === id);
    const scoreTag = thisData.tag;

    //星星數量
    const starAmount = thisData.grade;
    const starOuter = document.getElementById("starOuter");
    function setStar(){
        var star;
        for(star = 1; star <= starAmount ; star++){
            console.log(star);
            var newStar = document.createElement("div");
            starOuter.appendChild(newStar);
            newStar.setAttribute('class', 'greenstar');
        };
    };
    setStar();

    //上一頁下一頁
    const idNumber = thisData.id;
    let nextScore = "0" + ( +idNumber +1 );
    let prevScore = "0" + ( +idNumber -1 );
    function setNextPage(){
        if( +idNumber === SHOP.length){
            nextScore = "0" + SHOP.length ;
            document.getElementById("nextBtn").disabled = true;
        }else{
            document.getElementById("nextBtn").disabled = false;
        };
    };
    function setPrevPage(){
        if( +idNumber === 1 ){
            prevScore = "01";
            document.getElementById("prevBtn").disabled = true;
        }else{
            document.getElementById("prevBtn").disabled = false;
        };
    };
    setPrevPage();
    setNextPage();

   

    

    return (
        <ScorepageOuter>
            <ButtonArea>
                <Link to="/shop">
                    <Button color="blue">← 回樂譜列表</Button>
                </Link>
                <div>
                    <Link to={`/shop/${prevScore}`}><Button id="prevBtn" color="blue">← 前一曲</Button></Link>
                    <Link to={`/shop/${nextScore}`}><Button id="nextBtn" color="blue">後一曲 →</Button></Link>
                </div>
            </ButtonArea>
            <ScoreInfo>
                <LeftArea>
                    <div>
                        <ScoreImg src={thisData.image} alt="123" />
                    </div>
                    <div>
                        <audio controls src={thisData.url}></audio>
                    </div>
                    <div>
                         Description
                        <Arranger>{thisData.arranger}</Arranger>
                    </div>
                </LeftArea>
                <RightArea>
                    <div>
                        <Name>{thisData.name}</Name>
                        <Grade id="starOuter"></Grade>
                        <Introduction>{thisData.introduction}</Introduction>
                        <TagOuter>{scoreTag.map((scoreTag) => <TagStyle>{scoreTag}</TagStyle>)}</TagOuter>
                    </div>
                    
                    <div>
                        <Price>$ {thisData.price}</Price>
                        <Button color="green">＋ 加入購物車</Button>
                    </div>
                </RightArea>
            </ScoreInfo>
            
        </ScorepageOuter>
    )
};

export default Scorepage ;

const ScorepageOuter = styled.div`
width:100%;
height:fit-content;
min-height:calc(100vh - 100px);
background:linear-gradient(to top, #384551, #242424);
color:#fff;
margin-top:100px;

`

const ButtonArea = styled.div`
display:flex;
justify-content: space-between;
padding:24px 80px;

& div{
    display:flex;
    gap:16px;
}
`
const Button = styled.button`

border: none;
color: white;
padding: 8px 48px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 14px;
letter-spacing:2px;
border-radius:4px;
width:fit-content;

${(props) => {
switch (props.color) {
    case "blue":
    return css`
        background:#384551;

        &:hover{
            background:#34414D;
        }

        &:disabled{
            background:#484E53;
            color:#848D96;
        }
    `;
    default:
    return css`
        background:#899385;

        &:hover{
            background:#677860;
        }

        &:disabled{
            background:#484E53;
            color:#848D96;
        }
    `;
}
}}

`

const ScoreInfo = styled.div`
display:flex;
justify-content:center;
gap:40px;
padding-bottom:80px;
`


const LeftArea = styled.div`
width:calc(60% - 20px - 80px);
height:fit-content;
background:#F3F3F3;
color:#384551;
font-size:16px;
font-weight:bold;

& > div{
    display:flex;
    flex-direction:column;
    border-bottom:1px solid rgba(137,147,133,0.5);
    padding:40px 80px;
    width:calc(100% - 160px)
}
& div img{
    margin:0 auto;
}

`

const RightArea = styled.div`
width:calc(40% - 20px - 80px);
height:fit-content;
background:#F3F3F3;
color:#384551;

& > div{
    display:flex;
    flex-direction:column;
    border-bottom:1px solid rgba(137,147,133,0.5);
    padding:28px 56px;
}

& div button{
    width:100%;
    margin:16px 0px;
}
`

const ScoreImg = styled.img`
width:86%;
`
const TagStyle = styled.div`
background: rgba(137,147,133,0.6);
color:#fff;
font-size:12px;
padding:10px 12px;
border-radius:20px;
`

const TagOuter = styled.div`
display:flex;
flex-direction:row;
gap:8px;
flex-wrap: wrap;
margin:16px 0px 16px -4px;

`

const Name = styled.div`
font-size:24px;
font-weight:bold;
line-height:50px;
`

const Grade = styled.div`
display:flex;
flex-direction:row;

& div.greenstar{
background-image:url("../../assets/icon/star.png");
background-repeat: no-repeat;
background-position: center center;

height:24px;width:24px;
}
`
const Introduction = styled.div`
font-size:14px;
font-weight:normal;
line-height:24px;
color:#899385;
padding-top:16px;
`

const Price = styled.div`
font-size:24px;
font-weight:bold;
line-height:40px;
`

const Arranger = styled.div`
font-size:14px;
font-weight:normal;
line-height:24px;
color:#899385;
padding-top:16px;
`