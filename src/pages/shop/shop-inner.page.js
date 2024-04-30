import styled,{css} from "styled-components";
import SHOP from "../../data/SHOP.json";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StarGrade } from '../../assets/index.js';
import { nonStarGrade } from '../../assets/index.js';

const Scorepage = () => {
    let { id } = useParams();

    //指定Data
    const thisData = SHOP.find((SHOP) => SHOP.id === id);
    const thisDataIndex = SHOP.findIndex((SHOP) => SHOP.id === id);
    const scoreTag = thisData.tag;
    let PrevPage = +thisDataIndex - 1 >= 0 ? SHOP[thisDataIndex - 1] : null;
    let NextPage = +thisDataIndex + 1 === SHOP.length ? null : SHOP[thisDataIndex + 1];

    //星星數量
    window.onload = function() {
        printStar(thisData.grade);
    };
    function printStar(n) {
        let result = "";
        for (let i = 1; i <= n; i += 1) {
            result += "<div class='greenstar'></div>";
        }
        let graystar = (5 - n);
        for(let j = 1 ; j <= graystar ; j += 1){
            result += "<div class='graystar'></div>";
        }
        document.getElementById("starOuter").innerHTML = result;
    }

    return (
        <ScorepageOuter>
            <ButtonArea>
                <Link to="/shop">
                    <Button color="blue">← 回樂譜列表</Button>
                </Link>
                <div>
                    {PrevPage && ( <Link to={`/shop/${PrevPage.id}`}><Button onClick={() => printStar(thisData.grade)} color="blue">← 前一曲</Button></Link> )}
                    {!PrevPage && ( <Button disabled id="prevBtn" color="blue">← 前一曲</Button> )}
                    {NextPage && ( <Link to={`/shop/${NextPage.id}`}><Button onClick={() => printStar(thisData.grade)} color="blue">後一曲 →</Button></Link> )}
                    {!NextPage && ( <Button disabled id="nextBtn" color="blue">後一曲 →</Button> )}
                </div>
            </ButtonArea>
            <ScoreInfo>
                <LeftArea>
                    <div>
                        <ScoreImg src={thisData.image} alt="123" />
                    </div>
                    <div>
                        <Audio controls src={thisData.url}></Audio>
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
gap:4px;

& div.greenstar{
    background-image:url(${StarGrade});
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
    height:16px;width:16px;
}

& div.graystar{
    background-image:url(${nonStarGrade});
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100% 100%;
    height:16px;width:16px;
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

const Audio = styled.audio`
-webkit-transition:all 0.5s linear;
-moz-transition:all 0.5s linear;
-o-transition:all 0.5s linear;
transition:all 0.5s linear;
-moz-border-radius:7px 7px 7px 7px ;
-webkit-border-radius:7px 7px 7px 7px ;
border-radius:7px 7px 7px 7px ;
width:100%;
`