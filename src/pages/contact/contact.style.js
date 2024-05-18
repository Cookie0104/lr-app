import styled from 'styled-components';

export const InputBackGround = styled.div`
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
export const InputOuter = styled.form`
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

export const Mask = styled.div`
position:fixed;
background:#384551ab;
top:0;
right:0;
z-index:200;
height:100vh;
width:100%;
display:flex;
justify-conteant:center;
align-items: center;


& p{
    color:#fff;
    letter-spacing:2px;
    text-align:center;
    line-height:40px;
    width:100%;

}

& div#maskOuter{
    width:50%;
    max-width:200px;
    height:fit-content;
    display:flex;
    flex-direction:column;
    margin:0 auto;
}
`