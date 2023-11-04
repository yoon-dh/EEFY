import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
`
export const Wrappe = styled.div`
box-sizing: border-box;
background-color: white;
width: 619px;
height: 298px;
border: 1px solid #AC98FF;
border-radius: 8px;
`
export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 87%;
`
export const TitleBox = styled.label`
width: 251px;
height: 188px;
background: #FFFFFF;
border: 1px solid #AC98FF;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  background-color: #F1EEEE;
}
`
export const Title = styled.div`
font-size: 35px;
color: #AC98FF;
z-index: 2;
`
export const Img = styled.img`
position: relative;
top: 10px;
left: 96%;
width: 15px;
transition: transform 0.3s;
&:hover{
  transform: scale(1.2); 
}
`

