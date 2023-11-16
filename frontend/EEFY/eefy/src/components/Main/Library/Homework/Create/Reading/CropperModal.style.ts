import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrappe = styled.div`
  width: 100%;
  height: 100%;
  flex: 10;
`;
export const ImgBox = styled.div`
  border-radius: 12px;
  width: 100%;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  object-fit: contain;
  @media(max-width:1334px){
    height: 360px;
  }
  @media(max-height:1000px){
    height: 360px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    .cropper-container {
      width: 100%;
      height: 100%;
    }
  }
  .react-pdf__Document {
    width: 100%;
    height: 100%;
  }
`;
export const BtnBox = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
`;
export const PdfBtn = styled.div`
  font-size: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 9;
`;
