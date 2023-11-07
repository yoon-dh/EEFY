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
import { CanvasData } from "@/recoil/Canvas";

interface Coordinate {
  x: number | null;
  y: number | null;
}

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  margin:'0px auto 0px auto',
};

function CanvasModal(){
  const [data, setData] = useRecoilState(CanvasData)
  const canvasRef = createRef<ReactSketchCanvasRef>();
  const [ocr, setOcr] = useRecoilState(OcrFileCheck)
  const [isPdf, setIsPdf] = useState<boolean>(false);

  const [lines, setLines] = useState([]);
  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [mode, setMode] = useState<boolean>(false)

  const [mousePoint, setMousePoint] = React.useState<Coordinate>({
    x: null,
    y: null
  });

  useEffect(()=>{
    console.log(data, 'data')
    console.log(ocr)
    if (ocr.imgUrl){
      const img = new Image();
      img.src = ocr.imgUrl
      img.onload = function () {
        const imageHeight = img.naturalHeight; 
        setImageHeight(imageHeight)
        const imgWidth = img.naturalWidth; 
        setImgWidth(imgWidth)
      };
    }
  },[])

  const handleStroke = () => {
    console.log(canvasRef)
    // const savedPaths = loadSavedPaths(); // 저장된 스케치 데이터를 얻습니다.
    // const sketchData = canvasRef.current.loadPaths(savedPaths);
    // console.log(sketchData)
    //   savedPaths.then(result => {
    //     console.log("Promise 결과:", result);
    //   }).catch(error => {
    //     console.error("오류 발생:", error);
    //   });

    if (canvasRef.current) {
      const sketchData = canvasRef.current.exportPaths();
        sketchData.then(result => {
          console.log("Promise 결과:", result);
        }).catch(error => {
          console.error("오류 발생:", error);
        });
      }
    };
    
    const exportCanvasEraseMode = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const eraseMode = canvas.eraseMode(mode);
        setMode(!mode)
  
        // 필기 후 이미지로 다운로드
        // const canvasImage = canvas.exportImage();
        // canvasImage.then(result => {
        //   // a 태그를 생성하여 이미지 다운로드 링크로 사용
        //   const a = document.createElement('a');
        //   a.href = result;
        //   a.download = 'canvas-image.png'; // 이미지 파일 이름 지정
        //   a.click();
        //   })
      }
  }

  const handleUndo = () => {
    if (canvasRef.current) {
      canvasRef.current.undo();

      const sketchData = canvasRef.current.exportPaths();
      sketchData.then(result => {
        console.log("handleUndo 결과:", result);
      }).catch(error => {
        console.error("handleUndo 오류 발생:", error);
      });
    }
  }

  const handleRedo = () => {
    if (canvasRef.current) {
      canvasRef.current.redo();
    }
  }

  const handleExportSvg = () => {
    if (canvasRef.current) {
      const svgString = canvasRef.current.exportSvg();
      svgString.then(res=>{
        console.log(res)
      })
    }
  }

  const handleSketchData = async()=>{
    if (canvasRef.current) {
      const sketchData = await canvasRef.current.exportPaths();
      const sketchDataJSON = JSON.stringify(sketchData);
      console.log(sketchDataJSON)
      setData(sketchDataJSON)
    }
  }

  const startSketch = () => {
    if (canvasRef.current) {
      canvasRef.current.eraseMode(false); // 지우개 모드를 해제
      // 다른 스케치 초기화 또는 설정 작업
      const sketchingTime = canvasRef.current.getSketchingTime(); // 스케치 시작 시간 측정
      sketchingTime.then((res)=>console.log('스케치 시작 시간 측정', res))
    }
  }

  const stopSketch = () => {
    if (canvasRef.current) {
      // 스케치 중지 작업
      const sketchingTime = canvasRef.current.getSketchingTime(); // 스케치 중지 시간 측정
      sketchingTime.then((res)=>console.log('스케치 중지 시간 측정', res))
    }
  }

  const handleLoad = ()=>{
    if (canvasRef.current) {
      const jsonData = JSON.parse(data);
      canvasRef.current.loadPaths(jsonData);
    }
  }

//=====================
const onChange = (updatedPaths: CanvasPath[]): void => {
  console.log(updatedPaths,'updatedPaths')
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
                  style={styles}
                  width={`${imgWidth * 0.75}`}
                  height={`${imageHeight * 0.75}`}
                  strokeWidth={4}
                  eraserWidth={8}
                  backgroundImage={ocr.imgUrl}
                  preserveBackgroundImageAspectRatio="none"
                  exportWithBackgroundImage={false}
                  onStroke={handleStroke}
                  allowOnlyPointerType='all'
                  id="reactSketchCanvas"
                  withTimestamp={true}
                  />
              </>
            )}
            </ImgBox>
          </Box>
          <BtnBox>
          <div>
            <h2>x: {mousePoint.x}</h2>
            <h2>y: {mousePoint.y}</h2>
          </div>

            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={exportCanvasEraseMode}>지우개</button>

            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={handleUndo}>Undo</button>
            
            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={handleRedo}>Redo</button>
            
            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={handleExportSvg}>Export SVG</button>
            
            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={handleSketchData}>sketchData</button>

            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={startSketch}>스케치 시작</button>
            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={stopSketch}>스케치 중지</button>
            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }} onClick={handleLoad}>불러오기</button>
            <button style={{
              backgroundColor:'#7B88E0',
              color:'white',
              padding:'10px 20px',
              borderRadius:'12px'
            }}>선지우기</button>

          </BtnBox>
        </Wrappe>
      </Container>
    </>
  )
}

export default CanvasModal