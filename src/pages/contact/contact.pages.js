import styled from 'styled-components';
import { useState,useEffect,useRef } from 'react';
import { Cover2 } from '../../assets/index';
import { CoverPhoto } from '../../components/coverphoto';
import Lottie from 'lottie-web';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Input from '../../components/inputField';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_648r2pu";
const TEMPLATE_ID = "template_vii04oh";
const PUBLIC_KEY = "T_5a1Fk7kS1b2sTg7";

const Contact = () => {
    const [form,setForm] = useState({
        name : "",
        email : "",
        message : "" 
    });

    const [loading,setLoading] = useState(false);

    const container = useRef(null);

    useEffect(()=>{
        Lottie.loadAnimation({
            container:container.current,
            renderer:"svg",
            autoplay: true,
            animationData:require("../../assets/lottie/loading.json")
        });
    },[])

    const handleChange = (e) => {
        const { name , value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        emailjs.send(SERVICE_ID,TEMPLATE_ID,{
            from_name : form.name,
            to_name : "test",
            from_email : form.email,
            to_email : "lrlrlrpercussion@gmail.com",
            message : form.message,
        },PUBLIC_KEY
    ).then(() => {setLoading(false);setForm({
            name : "",
            email : "",
            message : "" 
        })
    })
    .catch((error) => console.log("error",error));
    };

    return (
        <div>
            <CoverPhoto src={Cover2} alt="homeBanner" />
            <InputBackGround>
                <Title position="bottom" title="CONTACT US"/>
                <InputOuter onSubmit={handleSubmit}>
                    <Input type="text" name="name" value={form.name} placeholder="請輸入暱稱" onChange={handleChange}></Input>
                    <Input type="email" name="email" value={form.email} placeholder="請輸入Email" onChange={handleChange}></Input>
                    <Textarea name="message" value={form.message} placeholder="想跟我們說些什麼" onChange={handleChange}></Textarea>
                    <Button type="submit" name="送出"></Button>
                </InputOuter>
            </InputBackGround>
            <Footer/>
            {loading &&
                <Mask id='maskkk'>
                    <p>傳送中...</p>
                    <div ref={container}></div>
                </Mask>
            }
            {/* <Mask id='maskkk'>
                <p>傳送中...</p>
                <div ref={container}></div>
            </Mask> */}
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
const InputOuter = styled.form`
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

const Mask = styled.div`
position:fixed;
background:#384551ab;
top:0;
right:0;
z-index:200;
height:100vh;
width:100%;

& p{
    color:#fff;
    letter-spacing:2px;
    text-align:center;
    line-height:40px;
}
`