import { useState,useEffect } from 'react';
import { Cover2 } from '../../assets/index';
import { CoverPhoto } from '../../components/coverphoto';
import Footer from '../../components/footer';
import Title from '../../components/title';
import Input from '../../components/inputField';
import Textarea from '../../components/textarea';
import Button from '../../components/button';
import emailjs from "@emailjs/browser";
import LottieAnimate from './animate';
import {
    InputBackGround,
    InputOuter,
    Mask
}from "./contact.style"

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
    const [hasFillIn,setHasFillIn] = useState(false);

    useEffect(()=>{
        form.name !== "" && form.email !== "" && form.message !== "" ? setHasFillIn(true) : setHasFillIn(false)
    },[form]);

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
                    {hasFillIn && <Button id="submitBtn" type="submit" name="送出"></Button>}
                    {!hasFillIn && <Button id="submitBtn" type="submit" name="送出" disabled="disabled"></Button>}
                </InputOuter>
            </InputBackGround>
            <Footer/>
            {loading &&
                <Mask id='mask'>
                    <div id='maskOuter'>
                        <LottieAnimate/>
                        <p>傳送中...</p>
                    </div>
                </Mask>
            }
            {/* <Mask id='mask'>
                <div id='maskOuter'>
                    <LottieAnimate/>
                    <p>傳送中...</p>
                </div>
            </Mask> */}
        </div>
    )
};

export default Contact ;