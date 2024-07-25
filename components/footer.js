import { Instagram } from '../assets/index.js';
import { Facebook } from '../assets/index.js';
import { Youtube } from '../assets/index.js';
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterOuter>
            <LinkOuter>
                <LinkInner>
                    <a href="https://www.facebook.com/lrpercussion" rel="noreferrer" target="_blank"><img src={Facebook} alt="fb"/></a>
                    <a href="https://instagram.com/lr_percussion" rel="noreferrer" target="_blank"><img src={Instagram} alt="ig" /></a>
                    <a href="https://www.youtube.com/@lrpercussion3766" rel="noreferrer" target="_blank"><img src={Youtube} alt="yt" /></a>
                </LinkInner>
                <Copyright>2022 © LR Slashie</Copyright>
            </LinkOuter>
        </FooterOuter>
    )
};



export default Footer ;

const FooterOuter = styled.div`
    width:100%;height:140px;
    background:#384551;
    display: flex;justify-content: center;align-items: center;
`

const LinkOuter = styled.div`
    width:fit-content;height:fit-content;
    display:block;
    gap:24px;
`

const LinkInner = styled.div`
    width:100%;height:fit-content;
    display:flex;justify-content: center;align-items: center;
    gap:24px;
`

const Copyright = styled.p`
    color:#fff;
    line-height:40px;
    font-size:12px;
    letter-spacing: 5px;
    color:rgba(255,255,255,0.5)
`