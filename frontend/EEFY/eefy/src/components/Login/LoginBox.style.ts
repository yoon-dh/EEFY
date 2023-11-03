import styled from "styled-components";

export const Title = styled.div`
font-size: 80px;
font-weight: bold;
@media(max-width:1340px){
  font-size: 60px;
}
`
export const InputBox = styled.div`
margin: 30px 0px 0px 0px;
`
export const PasswordBtn = styled.div`
color: #AFAFAF;
cursor: pointer;
margin: 30px 0px 0px 0px;
`
export const LoginBtn = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 350px;
height: 48px;
background: #191A3E;
border-radius: 12px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin: 40px 0px 0px 0px;
cursor: pointer;
@media(max-width:1340px){
  width: 350px;
}
`
export const Box = styled.div`
display: flex;
margin: 68% 0px 0px 0px;
@media(max-width:1340px){
  margin: 40% 0px 0px 0px;
}
`
export const Etc = styled.div`
color: #AFAFAF;
width: 250px;
margin: 8px 0% 0px 1%;
@media(max-width:1340px){
  margin: 8px 0% 0px 1%;
}
`
export const SignUpBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 43px;
background: #191A3E;
border-radius: 8px;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
cursor: pointer;
`
