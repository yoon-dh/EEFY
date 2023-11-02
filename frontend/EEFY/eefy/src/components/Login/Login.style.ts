import styled from "styled-components";

export const Model1 = styled.div`
background-color: #6666A1;
position: absolute;
width: 100%;
height: 100%;
clip-path: polygon(0 23%, 0% 100%, 38% 100%);
transition:opacity 0.3s, visibility 0.3s;
`
export const Model2 = styled.div`
background-color: #3B3B84;
position: absolute;
width: 100%;
height: 100%;
clip-path: polygon(0 0, 38% 0, 38% 100%, 0 23%);
transition:opacity 1.3s, visibility 1.3s;
`
export const Model4 = styled.div`
background-color: #BBBBE5;
position: absolute;
width: 100%;
height: 100%;
clip-path: polygon(38% 0, 38% 100%, 64% 100%);
transition:opacity 2.3s, visibility 2.3s;
`
export const Model3 = styled.div`
background-color: #9595B8;
position: absolute;
/* z-index: 1; */
width: 100%;
height: 100%;
clip-path: polygon(38% 0, 38% 47%, 64% 0);
transition:opacity 3.2s, visibility 3.2s;
`
export const Header = styled.div`
position: absolute;
top: 14%;
left: 9%;
transition:opacity 1.1s, visibility 1.1s;
@media(max-width:1340px){
  top: 16%;
left: 10.5%;
}
`
export const Img = styled.img`
z-index: 3;
position: relative;
width: 550px;
left: 10%;
@media(max-width:1340px){
  width: 90%;
  left: 0%;
}
`
export const HeaderTitle = styled.div`
position: relative;
top: 10px;
font-size: 90px;
font-weight: bold;
height: 90px;
color: black;
@media(max-width:1340px){
  font-size: 60px;
  height: 70px;
  top: -30px;
  left: 2.4%;
}
`
export const HeaderTitleServe = styled.div`
position: relative;
top: 20px;
font-size: 90px;
color: black;
@media(max-width:1340px){
  font-size: 60px;
  top: -40px;
  left: 2.4%;
}
`
export const HeaderEtc = styled.div`
position: relative;
top: 20px;
font-size: 22px;
font-weight: bold;
@media(max-width:1340px){
  font-size: 15px;
  top: -40px;
  left: 3%;
}
`
export const LoginBoxBox = styled.div`
position: absolute;
top:20%;
left: 68%;
transition:opacity 1.1s, visibility 1.1s;
@media(max-width:1340px){
  top:17%;
left: 65%;
}
`
