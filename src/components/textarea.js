import styled from "styled-components"

const Textarea = ({placeholder}) => {
    return (
        <InputField 
            type="input" 
            placeholder={placeholder}>
        </InputField>
    )
};

export default Textarea ;

const InputField = styled.textarea`
background:#fff;
border:1px solid rgba(137,147,133,0.5);
border-radius:8px;
font-size:16px;
padding:8px 20px;
letter-spacing:1px;
line-height:30px;
width:100%;
min-height:100px;
flex-grow:1;
color:#879184;
box-sizing:border-box;

&:focus{
    outline:1px solid rgba(137,147,133,0.5);
    height:40px;
}

&::placeholder{
    color: rgba(137,147,133,0.5);
}

`
