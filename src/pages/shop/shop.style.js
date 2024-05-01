import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ShopOuter = styled.div`
padding: 280px 0px 0px 0px;
width:100% ; height:fit-content;
background:linear-gradient(to top, #384551, #242424);
position:relative;

@media screen and (min-width: 425px) and (max-width: 768px){ 
  padding: 170px 0px 0px 0px;
}

@media screen and (max-width: 425px){ 
  padding: 210px 0px 0px 0px;
}
`

export const ShopInner = styled.div`
margin:40px auto 0px auto; padding:0px 40px 80px 40px;
width:calc(100% - 240px) ; max-width:1200px; height:fit-content;
background:#F3F3F3;
position:relative;

&:before{
  content:"";
  width:50px;
  height:100%;
  position:absolute;
  top:0px;
  right:0px;
  background:#F3F3F3;
}

&:after{
  content:"";
  width:50px;
  height:100%;
  position:absolute;
  top:0px;
  left:0px;
  background:#F3F3F3;
}

@media screen and (min-width: 425px) and (max-width: 768px){ 
  width:calc(100% - 140px);
  padding:0px 30px 80px 30px;

  &:after{
    width:34px;
  }

  &:before{
    width:34px;
  }
}

@media screen and (max-width: 425px){ 
  margin:0px auto 0px auto; padding:0px 16px 80px 16px;
  width:calc(100% - 32px) ; height:fit-content;

  &:after{
    width:17px;
  }

  &:before{
    width:17px;
  }
}



`
export const SearchOuter = styled.div`
height:104px;
width:calc(100% - 20px);
margin:0px 10px;
border-bottom:1px solid rgba(56,69,81,0.5);
display:flex;
align-items: center;
justify-content: space-between;

@media screen and (min-width: 425px) and (max-width: 768px){ 
  width:calc(100% - 10px);
  margin:0px 5px;
}

@media screen and (max-width: 425px){ 
  width:calc(100% - 0px);
  margin:0px 0px;
}

`
export const SearchArea = styled.div`
display:flex;

@media screen and (max-width: 425px){ 
  width:calc(100% - 40px);
  position:absolute;
  top:-60px;
  left:20px;
}

`

export const Sorting = styled.div`
display:flex;
align-items: center;
justify-content: center;
color:#879184;
`

export const SeachBar = styled.input`
background:#fff;
border:1px solid rgba(137,147,133,0.5);
border-radius:8px 0px 0px 8px;
border-right:0px;
font-size:16px;
padding:8px 20px;
letter-spacing:1px;
line-height:30px;
width:200px;
height:40px;
color:#879184;
box-sizing:border-box;

&:focus{
    outline:1px solid rgba(137,147,133,0.5);
    height:40px;
}

&::placeholder{
    color: rgba(137,147,133,0.5);
}

@media screen and (min-width: 425px) and (max-width: 768px){ 
  width:150px;
}

@media screen and (max-width: 425px){ 
  width:100%;
}

`

export const SearchIcon = styled.div`
background:#879184;
width:40px;
height:40px;
border-radius:0px 8px 8px 0px;
display:flex;
align-items: center;
justify-content: center;
`

export const SelectStyle = styled.select`
background:#fff;
border:1px solid rgba(137,147,133,0.5);
border-radius:8px;
font-size:16px;
padding:8px 20px;
letter-spacing:1px;
line-height:30px;
width:180px;
height:40px;
color:#879184;
box-sizing:border-box;

&:focus{
    outline:1px solid rgba(137,147,133,0.5);
    height:40px;
}
`

export const ScoreImg = styled.img`
width:70%;
`

export const ScoreOuter = styled.div`
display: flex;
flex-wrap: wrap;
`

export const ScoreInner = styled.div`
width:calc(100% / 4);
display: flex;
flex-direction:column;
align-items: center;
gap:24px;
padding:64px 30px 40px 30px;
border: 0.5px solid rgba(137,147,133,0.3);
box-sizing:border-box;

&:hover{
  background:#eeeeee;
}

@media screen and (min-width: 764px) and (max-width: 1230px){ 
  width:calc(100% / 3);
}

@media screen and (max-width: 764px){ 
  flex-grow:1;
  min-width:250px;
}
`

export const LinkOuter = styled(Link)`
display: flex;
align-items: center;
justify-content:center;
`

export const ScoreInfoOuter = styled.div`
width:95%;

@media screen and (min-width: 425px) and (max-width: 768px){ 
  width:100%;
}

`

export const Price = styled.div`
font-size:23px;
font-weight:normal;
color:#384551;
line-height:48px;
padding-left:8px;
`
export const Name = styled.div`
font-size:16px;
color:#384551;
line-height:36px;
padding-left:8px;
`
export const Introduction = styled.div`
font-size:14px;
color:#899385;
line-height:20px;
padding-left:8px;

display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const TagOuter = styled.div`
display:flex;
flex-direction:row;
gap:8px;
flex-wrap: wrap;
margin-top:16px;
`

export const TagStyle = styled.div`
background: rgba(137,147,133,0.6);
color:#fff;
font-size:12px;
padding:10px 12px;
border-radius:20px;
`

export const EmptyOuter = styled.div`
width:100%;
text-align:center;
line-height:200px;
opacity:30%;
color:#899385;
font-size:30px;
`