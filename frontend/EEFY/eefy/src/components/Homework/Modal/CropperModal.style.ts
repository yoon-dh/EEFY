import styled from "styled-components";

export const Container = styled.div`
position: absolute;
width: 70%;
height: 80%;
border: 2px solid #AC98FF;
background-color: white;
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
`
export const Wrappe = styled.div`
width: 90%;
height: 80%;
flex: 8;
`
export const ImgBox = styled.div`
position: relative;
top: 5%;
width: 100%;
height: 90%;
border: 1px solid #AC98FF;
border-radius: 12px;

  overflow-y: auto;
  overflow-x: hidden;
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
    width: 1000px;
    height: 100%;
  }
`
export const BtnBox = styled.div`
width: 90%;
height: 100%;
flex: 1;
`
export const PdfBtn = styled.div`
font-size: 20px;
text-align: center;
`
