import React, { useState, createRef, useEffect } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Container, Wrappe, BtnBox, ImgBox, PdfBtn } from './CropperModal.style';
import { useRecoilState } from 'recoil';
import { Category, Homework, HomeworkProblem } from '@/recoil/Homework';
import { postOcr } from '@/api/Homework/Problem';
import { OcrData } from '@/recoil/Library/CreateHomework/CreateReading';
import { BiSolidChevronRight } from "react-icons/bi";
import { BiSolidChevronLeft } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";

function CropperModal() {
  const cropperRef = createRef<ReactCropperElement>();
  const [isPdf, setIsPdf] = useState<boolean>(false);
  const [ocrImg, setOcrImg] = useState<string>('');
  const [category, setCategory] = useRecoilState(Category);
  const [homework, setHomework] = useRecoilState(Homework);
  const [homeworkProblem, setHomeworkProblem] = useRecoilState(HomeworkProblem);
  const [ocrDatas, setOcrDatas] = useRecoilState<any>(OcrData);

  useEffect(() => {
    setIsPdf(false);
    if (ocrDatas.pdfFile) {
      setIsPdf(true);
    } else if (!ocrDatas.imgUrl) {
      // getCropData();
    }
  }, [ocrDatas.imgUrl, ocrDatas.pdfFile]);

  const getCropData = async () => {
    // 파일 정보
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      cropperRef.current?.cropper.getCroppedCanvas().toBlob(blob => {
        if (blob) {
          const formData = new FormData();
          formData.append('image_file', blob as Blob);
          handleCropImage(formData);
        }
      });
    }
  };

  const handleCropImage = async (croppedImage: any) => {
    const res = await postOcr(croppedImage);
    console.log(res);
    if (res?.status === 200) {
      const data = {
        title: res?.data[0].slice(4),
        content: res?.data[1],
        field: 'CHOICE',
        answer: '',
        choiceRequests: [
          {
            number: '1',
            content: res?.data[2].slice(1),
          },
          {
            number: '2',
            content: res?.data[3],
          },
          {
            number: '3',
            content: res?.data[4],
          },
          {
            number: '4',
            content: res?.data[5],
          },
          {
            number: '5',
            content: res?.data[6],
          },
        ],
      };
      setHomeworkProblem([...homeworkProblem, data]);
      // setOcrDatas({pdfFile:null, imgUrl:"", isSuccess:true})
      setOcrDatas({...ocrDatas, isSuccess:true})
      setCategory('multiple');
    }
  };

  const getPdfUrl = () => {
    setSelect(!select);
    pdfjs.getDocument(ocrDatas.pdfFile).promise.then(pdfToImage);
  };

  // 캔버스를 이미지 URL로 변경
  const pdfToImage = async (pdf: any) => {
    const canvas = document.createElement('canvas');
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 3 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    await page.render(renderContext).promise;
    const imageData = canvas.toDataURL('image/jpeg');
    console.log(imageData, 'imageData');
    setPageImage(imageData);
  };

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [select, setSelect] = useState<boolean>(false);
  const [pageImage, setPageImage] = useState<string>('');

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Container className='flex-col'>
      <Wrappe>
        {isPdf ? (
          <>
            {!pageImage ? (
              <>
                <ImgBox>
                  <Document file={ocrDatas.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page width={210 * 5} height={210 * 1.414 * 5} pageNumber={pageNumber} />
                  </Document>
                </ImgBox>
              </>
            ) : (
              <>
                <ImgBox>
                  <Cropper
                    ref={cropperRef}
                    src={pageImage}
                    zoomTo={0.5}
                    initialAspectRatio={1}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={true}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    guides={true}
                    modal={true}
                    center={true}
                    highlight={true}
                    movable={true}
                    scalable={true}
                    toggleDragModeOnDblclick={true} // 두번 클릭하여 모드 전환
                    style={{ height: '100%', width: '100%' }}
                  />
                </ImgBox>
              </>
            )}
          </>
        ) : (
          <>
            <ImgBox>
              <Cropper
                ref={cropperRef}
                src={ocrDatas.imgUrl}
                zoomTo={0.5}
                initialAspectRatio={1}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
                modal={true}
                center={true}
                highlight={true}
                movable={true}
                scalable={true}
                toggleDragModeOnDblclick={true} // 두번 클릭하여 모드 전환
                style={{ height: '100%', width: '100%' }}
              />
            </ImgBox>
          </>
        )}
      </Wrappe>

      <BtnBox>
        {!ocrDatas.imgUrl && (
          <>
            <div style={{flex:1}}></div>
          </>
        )}
        {isPdf && (
          <>
            <PdfBtn>
                <button
                  style={{ margin: '0px 20px 0px 10px' }}
                  disabled={pageNumber <= 1}
                  onClick={() => {
                    setPageNumber(pageNumber - 1);
                    setPageImage('');
                  }}
                >
                  <BiSolidChevronLeft style={{fontSize:'23px'}}/>
                </button>
                <span style={{fontSize:'15px'}}>
                  {pageNumber} / {numPages}
                </span>
                <button
                  style={{ margin: '0px 10px 0px 20px' }}
                  disabled={pageNumber >= numPages}
                  onClick={() => {
                    setPageNumber(pageNumber + 1);
                    setPageImage('');
                  }}
                >
                  <BiSolidChevronRight style={{fontSize:'23px'}}/>
                </button>
            </PdfBtn>
          </>
        )}
        <div style={{flex:1, display:'flex', justifyContent:'center'}}>
          {(isPdf && !pageImage) && (
            <>
              <button
                style={{
                  padding: '5px 5px',
                  border:'1px solid rgb(200, 200, 200, 1)',
                  borderRadius:'8px',
                  justifyContent:'flex-end',
                }}
                onClick={getPdfUrl}
              >
                <div style={{display:'flex',letterSpacing: '1px',
                textTransform: 'uppercase', fontSize:'13px'}}>
                  pagepick
                </div>
              </button>
            </>
          )}
          {(pageImage || ocrDatas.imgUrl) && (
            <>
              <button
                style={{
                  padding: '5px 5px',
                  border:'1px solid rgb(200, 200, 200, 1)',
                  borderRadius:'8px',
                }}
                onClick={getCropData}
              >
                <div style={{display:'flex',letterSpacing: '1px',
                textTransform: 'uppercase', fontSize:'13px'}}>
                  capture
                </div>
              </button>
            </>
          )}
        </div>
      </BtnBox>
    </Container>
  );
}
export default CropperModal;
