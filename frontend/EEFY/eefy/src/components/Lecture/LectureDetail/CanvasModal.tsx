import React,{useState, useEffect, createRef} from "react"
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {
  Container,
  Wrappe,
  Box,
  ImgBox,
  BtnBox,
  PdfBtn
} from './CanvasModal.style'
import { useRecoilState } from "recoil";
import { OcrFileCheck } from "@/recoil/Homework";
import './Canvas.css'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  margin:'0px auto 0px auto',
  objectFit: 'cover',
};

function CanvasModal(){

  const canvasRef = createRef<ReactSketchCanvasRef>();
  const [ocr, setOcr] = useRecoilState(OcrFileCheck)
  const [isPdf, setIsPdf] = useState<boolean>(false);

  const [lines, setLines] = useState([]);
  const [imgWidth, setImgWidth] = useState('');
  const [imageHeight, setImageHeight] = useState('');

  useEffect(()=>{
    console.log(lines)
  },[lines])

  useEffect(()=>{
    console.log(ocr)
    if (ocr.imgUrl){
      const img = new Image();
      // img.src = ocr.imgUrl
      // img.onload = function () {
      //   const imageHeight = img.naturalHeight; 
      //   setImageHeight(imageHeight)
      //   const imgWidth = img.naturalWidth; 
      //   setImgWidth(imgWidth)
      // };
    }
  },[])


  const handleStroke = () => {
    console.log(canvasRef)
    // const savedPaths = loadSavedPaths(); // 저장된 스케치 데이터를 얻습니다.
    // const sketchData = canvasRef.current.loadPaths(savedPaths);
    // console.log(sketchData)
      // savedPaths.then(result => {
      //   console.log("Promise 결과:", result);
      // }).catch(error => {
      //   console.error("오류 발생:", error);
      // });
    // const sketchData = canvasRef.current.exportPaths();
    // sketchData.then(result => {
    //   console.log("Promise 결과:", result);
    // }).catch(error => {
    //   console.error("오류 발생:", error);
    // });
  }

  const exportCanvasImage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      // const canvasImage = canvas.exportImage();
      // canvasImage.then(result => {
      //   // a 태그를 생성하여 이미지 다운로드 링크로 사용
      //   const a = document.createElement('a');
      //   a.href = result;
      //   a.download = 'canvas-image.png'; // 이미지 파일 이름 지정
      //   a.click();
      //   })
    }
  };

  return(
    <>
      <Container>
        <Wrappe className="flex-col">
          <Box>
            <ImgBox>
            {imgWidth && (
              <>
                <ReactSketchCanvas
                  ref={canvasRef}
                  strokeColor={'blue'}
                  // style={styles}
                  // width={'100%'}
                  // height={imageHeight * 0.75}
                  strokeWidth={4}
                  backgroundImage={ocr.imgUrl}
                  preserveBackgroundImageAspectRatio="none"
                  exportWithBackgroundImage={false}
                  onStroke={handleStroke}
                  allowOnlyPointerType='all'
                />
              </>
            )}
            </ImgBox>
          </Box>
          <BtnBox>
            <button onClick={exportCanvasImage}>클릭</button>
          </BtnBox>
        </Wrappe>
      </Container>
    </>
  )
}

export default CanvasModal