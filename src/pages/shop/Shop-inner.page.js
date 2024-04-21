import styled from "styled-components";
const Scorepage = () => {
    return (
        <ScorepageOuter>
            <ButtonArea>
                <Button>返回</Button>
                <div>
                    <Button>前一曲</Button>
                    <Button>後一曲</Button>
                </div>
            </ButtonArea>
            <ScoreInfo>
                <LeftArea>123123
                </LeftArea>
                <RightArea>123123
                </RightArea>
            </ScoreInfo>
            
        </ScorepageOuter>
    )
};

export default Scorepage ;

const ScorepageOuter = styled.div`
position:absolute;
width:100%;
height:100%;
top:0px;
left:0px;
background:linear-gradient(to top, #384551, #242424);
color:#fff;
margin-top:140px;

display:none;
`

const ButtonArea = styled.div`
display:flex;
padding:0px 80px;
`
const Button = styled.button`
background:#384551;
button-style:none;
`

const ScoreInfo = styled.div`
display:flex;
justify-content:center;
gap:40px;
`


const LeftArea = styled.div`
width:calc(50% - 20px - 80px);
height:100px;
background:#F3F3F3;
`

const RightArea = styled.div`
width:calc(50% - 20px - 80px);
height:100px;
background:#F3F3F3;
`