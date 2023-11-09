import styled from "styled-components";

export const Container = styled.div`
z-index: 10;
/* position: absolute; */
/* top: 0px; */
/* left: 0px; */
width: 100%;
height: 100%;
`
export const Wrappe = styled.div`
/* position: absolute; */
/* top: 50%;
left: 50%;
transform: translate(-50%, -55%); */
width: 100%;
height: 100%;
/* border: 2px solid #AC98FF; */
background-color: white;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
`
export const Box = styled.div`
width: 90%;
height: 100%;
flex: 8;
`
export const ImgBox = styled.div`
position: relative;
top: 5%;
width: 100%;
height: 90%;
/* border: 1px solid #AC98FF; */
border-radius: 12px;
  overflow-y: auto;
  overflow-x: auto;
  object-fit: cover;
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    .cropper-container {
      width: 100%;
      height: 100%;
    }
  }
  .react-pdf__Document{
    width: auto;
    height: auto;
  }
`
export const BtnBox = styled.div`
width: 13%;
height: 60%;
flex: 0.1;
margin: 0px 0px auto 0px ;
/* display: flex; */
`
export const PdfBtn = styled.div``
export const CanvasVarBox = styled.div`
flex: 0.8;
margin: 0px 0px auto 0px;
height: 100%;
@media(max-width:1334px){
  flex:1.1;
}
`
