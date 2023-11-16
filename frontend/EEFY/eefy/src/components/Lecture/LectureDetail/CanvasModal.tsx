import React, { useState, useEffect, createRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Container, Wrappe, Box, ImgBox, BtnBox, PdfBtn, CanvasVarBox } from './CanvasModal.style';
import { useRecoilState } from 'recoil';
import { OcrFileCheck } from '@/recoil/Homework';
import { CanvasData, CanvasVarData, PdfPage } from '@/recoil/Canvas';
import './Canvas.css';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import {getLecture} from '@/api/Lecture/Lecture'
import { useParams } from 'next/navigation';
import CanvasVar from './CanvasVar';
const styles = {
  borderRadius: '0.25rem',
  margin: '0px auto',
};

function CanvasModal() {
  const params = useParams()
  const canvasRef = createRef<ReactSketchCanvasRef>();

  const [data, setData] = useRecoilState(CanvasData);
  const [varData, setVarData] = useRecoilState(CanvasVarData);
  const [ocr, setOcr] = useRecoilState(OcrFileCheck);
  const [page, setPage] = useRecoilState(PdfPage)

  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    if (ocr.imgUrl) {
      const img = new Image();
      img.src = ocr.imgUrl;
      img.onload = function () {
        const imageHeight = img.naturalHeight;
        setImageHeight(imageHeight);
        const imgWidth = img.naturalWidth;
        setImgWidth(imgWidth);
      };
    } else if (ocr.pdfFile){
      console.log(ocr,'ocr.pdfFile')
      getPdfUrl();
    }
  }, []);

  const handleStroke = () => {
    console.log(canvasRef.current);
    if (canvasRef.current) {
      const sketchData = canvasRef.current.exportPaths();
      sketchData.then(result => {
        console.log('handleUndo 결과:', result);
          const newData = data.filter((item:any) => item.pageNum !== page.pageNumber);
          setData([...newData,{
            'pageNum':page.pageNumber,
            'drawInfo':result
          }]);
      });
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const eraseMode = canvas.eraseMode(varData.mode);
    }
  }, [varData.mode]);

  // 페이지 데이터 지우기
  useEffect(()=>{
    if(varData.clear){
      const clearCanvas = canvasRef.current?.clearCanvas;
      if (clearCanvas) {
        console.log('clearCanvas 실행')
        handleSketchData
        clearCanvas();
        setVarData({...varData,clear:false})
      }
    }
  },[varData.clear])

  useEffect(()=>{
    if (canvasRef.current) {
      canvasRef.current.undo();
      setVarData({ ...varData, undo: false});
    }
  },[varData.undo])

  useEffect(()=>{
    if (canvasRef.current) {
      canvasRef.current.redo();
      setVarData({ ...varData, redo: false});
    }
  },[varData.redo])

  useEffect(()=>{
    getPdfUrl()
    if(page.btnType === 'before'){
      handleSketchData(page.pageNumber+1)
      const clearCanvas = canvasRef.current?.clearCanvas;
      if(clearCanvas){
        clearCanvas()
      }
      if (canvasRef.current) {
        const matchingData = data.filter((item:any) => item.pageNum === page.pageNumber);
        console.log(matchingData[0].drawInfo, matchingData[0].pageNum)
        if(matchingData[0]){
          canvasRef.current?.loadPaths(matchingData[0].drawInfo);
        }        // if(data[page.pageNumber]){
          // setTimeout(function(){
            // const jsonData = JSON.parse(data[page.pageNumber]);
            // getPdfUrl()
          // },500)
        }
      // }
    } else if (page.btnType === 'next'){
      handleSketchData(page.pageNumber-1)
      const clearCanvas = canvasRef.current?.clearCanvas;
      if(clearCanvas){
        clearCanvas()
      }
      if (canvasRef.current) {
        // if(data[page.pageNumber]){
          // setTimeout(function(){
            // const jsonData = JSON.parse(data[page.pageNumber]);
          const matchingData = data.filter((item:any) => item.pageNum === page.pageNumber);
          console.log(matchingData,'matchingData')
          if(matchingData[0]){
            canvasRef.current?.loadPaths(matchingData[0].drawInfo);
          }
            // getPdfUrl()
          // },500)
      //   }
      }
    }
  },[page.pageNumber])

  const handleSketchData = async (pageNumber:number) => {
    if (canvasRef.current) {
      const sketchData = await canvasRef.current.exportPaths();
      // if(sketchData.length > 0){
        // const sketchDataJSON = JSON.stringify(sketchData);
      console.log(pageNumber,'pageNumber')
      console.log(sketchData,'sketchData')
      // if(sketchData){
      //   const newData = data.filter(item => item.pageNum !== pageNumber);
      //   setData([...newData,{
      //     'pageNum':pageNumber,
      //     'drawInfo':sketchData
      //   }]);
      // }
      // } else if(sketchData.length === 0){
        // const newdata = {
        //   ...data, [pageNumber]:''
        // }
        // setData(newdata);
      // }
      // const newdata = {
      //   ...data,
      //   [pageNumber]:{
      //     ...data[pageNumber],
      //     canvasData : sketchDataJSON,
      //   } 
      // };
    }
  };

  const [pageImage, setPageImage] = useState<string>('');

  const getPdfUrl = () => {
    if (ocr.pdfFile) {
      pdfjs.getDocument(ocr.pdfFile).promise.then(pdfToImage);
    }
  };

  // 캔버스를 이미지 URL로 변경
  const pdfToImage = async (pdf: any) => {
    console.log(page.pageNumber, 'page.getPdfUrl')
    const canvas = document.createElement('canvas');
    const pages = await pdf.getPage(page.pageNumber);
    const viewport = pages.getViewport({ scale: 3 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    await pages.render(renderContext).promise;
    const imageData = canvas.toDataURL('image/jpeg');
    
    // const img = new Image();
    //   img.src = imageData;
    //   img.onload = function () {
    //     const imageHeight = img.naturalHeight;
    //     setImageHeight(imageHeight);
    //     const imgWidth = img.naturalWidth;
    //     setImgWidth(imgWidth);
    //   };
    setPageImage(imageData);
  };

  useEffect(()=>{
    if(pageImage){
      callLecture()
    }
  },[pageImage])

  // 필기 불러오기 
  const callLecture = async()=>{
    // if(page.pageNumber === 1){
      const newData = {
        lectureId:params.lectureId,
        pageNum:page.pageNumber
      }
      const res = await getLecture(newData)
      console.log(res?.data.drawInfo,'(res?.data.drawInfo')
      // if (canvasRef.current) {
        console.log('화면에 띄우기 실행')
        canvasRef.current?.loadPaths(res?.data.drawInfo);
      // }
      setData([...data,{
        'pageNum':page.pageNumber,
        'drawInfo':res?.data.drawInfo
      }]);
    // }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log(numPages)
    setPage({...page,numPages:numPages})
  }

  return (
    <>
      <Container>
        <Wrappe className='boxShadow'>
          <Box>
            <ImgBox>
              <div 
              style={{ display: 'none' }}
              >
                <Document file={ocr.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page width={0} height={0} pageNumber={page.pageNumber} />
                </Document>
              </div>
              {ocr.imgUrl ? (
                  <>
                  <ReactSketchCanvas
                    ref={canvasRef}
                    strokeColor={varData.color}
                    style={styles}
                    // width={`${imgWidth}px`}
                    width={`${'90%'}`}  
                    // height={`${imageHeight}px`}
                    height={`${1118}px`}
                    strokeWidth={varData.penSize}
                    eraserWidth={50}
                    backgroundImage={ocr.imgUrl}
                    preserveBackgroundImageAspectRatio='none'
                    exportWithBackgroundImage={false}
                    onStroke={handleStroke}
                    allowOnlyPointerType='all'
                    id='reactSketchCanvas'
                    withTimestamp={false}
                  />
                </>
              ) : (
                <>
                {pageImage && (
                  <>
                    <ReactSketchCanvas
                      ref={canvasRef}
                      strokeColor={varData.color}
                      style={styles}
                      width={`${210*1.1}mm`}
                      // width={`${'90%'}`}  
                      height={`${210*1.414*1.1}mm`}
                      // height={`${1118}px`}
                      strokeWidth={varData.penSize}
                      eraserWidth={50}
                      // backgroundImage={ocr.imgUrl}
                      backgroundImage={pageImage}
                      preserveBackgroundImageAspectRatio='none'
                      exportWithBackgroundImage={false}
                      onStroke={handleStroke}
                      allowOnlyPointerType='all'
                      id='reactSketchCanvas'
                      withTimestamp={false}
                    />
                  </>
                )}
                </>
              )}
            </ImgBox>
          </Box>
          <CanvasVarBox>
            <CanvasVar />
          </CanvasVarBox>
        </Wrappe>
      </Container>
    </>
  );
}

export default CanvasModal;
