import styled from 'styled-components';
import { Cover2 } from '../../assets/index';
import { CoverPhoto } from '../../components/coverphoto';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Input from '../../components/inputField';
import Textarea from '../../components/textarea';
import Button from '../../components/button';

const Contact = () => {
    return (
        <div>
            <CoverPhoto src={Cover2} alt="homeBanner" />
            <InputBackGround>
                <Title position="bottom" title="CONTACT US"/>
                <InputOuter>
                    <Input placeholder="請輸入暱稱"></Input>
                    <Input placeholder="請輸入Email"></Input>
                    <Textarea placeholder="想跟我們說些什麼"></Textarea>
                    <Button name="送出"></Button>
                </InputOuter>
            </InputBackGround>
            <Footer/>
        </div>
    )
};

export default Contact ;

const InputBackGround = styled.div`
background:#384551;
width:100%;
height:200px;
position:relative;
display:flex;
align-items: center;
justify-content: center;

@media screen and (min-width: 425px) and (max-width: 768px){ 
    position:relative;
    height:fit-content;
    display:block;
    }

@media screen and (max-width: 425px){ 
    position:relative;
    height:fit-content;
    display:block;
    }
`
const InputOuter = styled.div`
background:#F3F3F3;
width:50%;
min-width:420px;
height:calc(100% + 100px - 40px);
padding:20px 30px;
position:absolute;
top:-100px;
border-radius:4px;
display:flex;
flex-direction:column;
gap:16px;

@media screen and (min-width: 425px) and (max-width: 768px){ 
    position:unset;
    height:fit-content;
    top:unset;
    margin:0 auto;
    }

@media screen and (max-width: 425px){ 
    position:unset;
    height:fit-content;
    width:calc(100% - 32px);
    margin:0 auto;
    min-width:unset;
    padding:20px 16px;
    border-radius:0px;
    }
`