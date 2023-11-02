import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
`
export const Box1 = styled.div`
position: absolute;
z-index: 2;
width: 100%;
height: 100%;
background-color: #3B3B84;
clip-path: polygon(0% 0%, 44.5% 0, 49.5% 50%, 54.5% 100%, 0% 100%);
transition:clip-path 1.5s, opacity 2.5s, visibility 2.5s;
`
export const Box2 = styled.div`
position: absolute;
z-index: 2;
width: 100%;
height: 100%;
background-color: #BBBBE5;
clip-path: polygon(45.5% 0, 100% 0%, 100% 100%, 55.5% 100%, 50.5% 50%);
transition:clip-path 1.5s, opacity 2.5s, visibility 2.5s;
`
export const Img = styled.img`
z-index: 5;
width: 550px;
transform: translate(-50%, -55%);
transition: top 1.5s, left 1.5s, width 1s, opacity 2.5s, visibility 2.5s;
@media(max-width:1340px){
    width: 350px;
}
`
export const Header1 = styled.div`
position: absolute;
top:65%;
left: 5%;
transition: top 1.5s;
@media(max-width:1340px){
    top:68%;
    left: 6%;
}
`
export const Box1Title1 = styled.div`
font-size: 100px;
height: 110px;
margin: 0px;
font-weight: bold;
@media(max-width:1340px){
    font-size: 60px;
    height: 70px;
}
`
export const Box1Title2 = styled.div`
font-size: 80px;
margin: 0px;
color: #AFAFAF;
@media(max-width:1340px){
    font-size: 300%;
}
`
export const Btn1 = styled.div`
z-index: 3;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 300px;
height: 54px;
background: #BBBBE5;
border-radius: 12px;
margin: 0px 0px 0px 2%;
transition: transform 1s;
cursor: pointer;
:hover{
    transform: scale(1.1);
}
@media(max-width:1340px){
    width: 190px;
    height: 44px;
    margin: 0px 0px 0px 1%;
}
`
export const BtnName = styled.div`
font-size: 150%;
`
export const Header2 = styled.div`
z-index: 3;
position: absolute;
top:5%;
left: 75%;
transition: top 1.5s;
@media(max-width:1340px){
    top:6%;
    left: 78%;
}
`
export const Box2Title1 = styled.div`
font-size: 100px;
height: 110px;
margin: 0px;
font-weight: bold;
@media(max-width:1340px){
    font-size: 60px;
    height: 70px;
}
`
export const Box2Title2 = styled.div`
font-size: 80px;
margin: 0px;
color: #747474;
@media(max-width:1340px){
    font-size: 300%;
}
`
export const Btn2 = styled.div`
z-index: 3;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 300px;
height: 54px;
background: #3B3B84;
color: white;
border-radius: 12px;
margin: 0px 0px 0px 2%;
transition: transform 0.2s;
cursor: pointer;
:hover{
    transform: scale(1.1);
}
@media(max-width:1340px){
    width: 190px;
    height: 44px;
    margin: 0px 0px 0px 1%;
}
`
export const TeacherSignUpBox = styled.div`
position: absolute;
top:20%;
left: 60%;
height: 300px;
width: 300px;
transition: opacity 1.5s, visibility 1.5s;
@media(max-width:1340px){
    top:15%;
    left: 55%;
}
`
export const TeacherSignUpBoxTitle = styled.div`
font-size: 60px;
font-weight: bold;
color: white;
@media(max-width:1340px){
    font-size: 40px;
}
`
export const CodeCheckBox = styled.div`
display: flex;
`
export const CodeCheckBtn = styled.div`
position: relative;
top:15px;
left: 50px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100px;
height: 38px;
background: #BBBBE5;
border-radius: 8px;
font-size: 14px;
color: #000000;
cursor: pointer;
@media(max-width:1340px){
    top:12px;
}
`
export const SignUpBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 350px;
height: 48px;
background: #BBBBE5;
border-radius: 12px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #000000;
margin: 30px 0px 0px 0px;
cursor: pointer;
@media(max-width:1340px){
    margin: 20px 0px 0px 0px;
}
`
export const PasswordBox = styled.div`
display: flex;
`
export const BackIcon = styled.div`
z-index: 5;
position: absolute;
top:93%;
left: 95%;
`
export const StudentSignUpBox = styled.div`
position: absolute;
top:20%;
left: 20%;
height: 300px;
width: 300px;
transition: opacity 1.5s, visibility 1.5s;
@media(max-width:1340px){
    top:15%;
    left: 20%;
}
`
export const LoginBtn = styled.div`
position: fixed;
bottom: 0;
right: 0;
margin: 0px 10px 10px 0px;
display: flex;
justify-content: center;
align-items: center;
z-index: 6;
width: 100px;
height: 30px;
color: white;
border: 2px solid white;
border-radius: 8px;
`