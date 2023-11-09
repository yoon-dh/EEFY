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

import CanvasVar from './CanvasVar';
const styles = {
  borderRadius: '0.25rem',
  margin: '0px auto',
};

function CanvasModal() {
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
      if(page.numPages>=1){
        let temp: Record<number, string> = {};
        for (let i = 1; i <= page.numPages; i++) {
          temp[i] = ''
        }
        setData(temp)
      }
    }
  }, []);

  useEffect(()=>{
    console.log(page.numPages,'numPages temp')
    let temp: Record<number, string> = {};
    for (let i = 1; i <= page.numPages; i++) {
      temp[i] = ''
    }
    setData(temp)
  },[page.numPages])

  const handleStroke = () => {
    console.log(canvasRef.current);
    if (canvasRef.current) {
      const sketchData = canvasRef.current.exportPaths();
      sketchData.then(result => {
        console.log('handleUndo 결과:', result);
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


  // const handleSketchData = async () => {
  //   if (canvasRef.current) {
  //     const sketchData = await canvasRef.current.exportPaths();
  //     const sketchDataJSON = JSON.parse(JSON.stringify(sketchData));
  //     // console.log(sketchDataJSON)
  //     const newdata = {
  //       ...data,
  //       [pageNumber]: sketchDataJSON,
  //     };
  //     // setData([...data,sketchDataJSON])
  //     setData(newdata);
  //   }
  // };

  const handleLoad = () => {
    if (canvasRef.current) {
      const jsonData = JSON.parse(data);
      canvasRef.current.loadPaths(jsonData);
    }
  };

  const [pageImage, setPageImage] = useState<string>('');

  useEffect(() => {
    getPdfUrl();
    const img = new Image();
    img.src = pageImage;
    img.onload = function () {
      const imageHeight = img.naturalHeight;
      setImageHeight(imageHeight);
      const imgWidth = img.naturalWidth;
      setImgWidth(imgWidth);
      console.log(imageHeight, 'imageHeight', imgWidth, 'imgWidth');
    };
  }, [page.pageNumber]);

  const getPdfUrl = () => {
    console.log(ocr, 'getPdfUrl');
    if (ocr.pdfFile) {
      pdfjs.getDocument(ocr.pdfFile).promise.then(pdfToImage);
      console.log(page.pageNumber, '처음 열기');
      if (data[page.pageNumber]) {
        if (canvasRef.current) {
          const jsonData = JSON.parse(data[page.pageNumber]);
          console.log(jsonData, '처음 열기');
          canvasRef.current.loadPaths(jsonData);
        }
      }
    }
  };

  // 캔버스를 이미지 URL로 변경
  const pdfToImage = async (pdf: any) => {
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
    setPageImage(imageData);
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setPage({...page,numPages:numPages})
  }

  return (
    <>
      <Container>
        <Wrappe className='boxShadow'>
          <Box>
            <ImgBox>
              <div style={{ display: 'none' }}>
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
                    withTimestamp={true}
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
                      // width={`${imgWidth}px`}
                      width={`${'90%'}`}  
                      // height={`${imageHeight}px`}
                      height={`${1118}px`}
                      strokeWidth={varData.penSize}
                      eraserWidth={50}
                      // backgroundImage={ocr.imgUrl}
                      backgroundImage={pageImage}
                      preserveBackgroundImageAspectRatio='none'
                      exportWithBackgroundImage={false}
                      onStroke={handleStroke}
                      allowOnlyPointerType='all'
                      id='reactSketchCanvas'
                      withTimestamp={true}
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
