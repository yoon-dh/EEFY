import React, { useState, createRef, useEffect } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Container, Wrappe, BtnBox, ImgBox, PdfBtn } from './CropperModal.style';
import { useRecoilState } from 'recoil';
import { Category } from '@/recoil/Homework';

function CropperModal(props: { imgUrl: string | undefined, pdfFile: string | null, onCloseModal: () => void }) {
  const { imgUrl, pdfFile, onCloseModal } = props;
  const cropperRef = createRef<ReactCropperElement>();
  const [isPdf, setIsPdf] = useState<boolean>(false);
  const [ocrImg, setOcrImg] = useState<string>("");
  const [category, setCategory] = useRecoilState(Category);


  useEffect(() => {
    console.log(props)
    if (pdfFile) {
      console.log(pdfFile);
      setIsPdf(true);
    } else if (!imgUrl) {
      // getCropData();
    }
  }, []);

  const getCropData = () => {
    // 파일 정보
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      console.log(cropperRef.current?.cropper, 'cropperRef.current?.cropper');
      cropperRef.current?.cropper.getCroppedCanvas().toBlob((blob) => {
        if (blob) {
          const imageUrl1 = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = imageUrl1;
          link.download = 'image.jpg';
          link.click();
        } else {
          console.error("Failed to create Blob.");
        }
      });
    }
    setCategory('multiple')
  };

  const getPdfUrl = () => {
    if (pdfFile) {
      setSelect(!select);
      pdfjs.getDocument(pdfFile).promise.then(pdfToImage);
      console.log(pdfjs, 'pdfjs');
      console.log(pdfFile, 'pdfFile');
    } else {
      console.error('pdfFile is null or invalid.');
    }
  };

   // 캔버스를 이미지 URL로 변경
   const pdfToImage = async (pdf: any) => {
    const canvas = document.createElement("canvas");
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 3 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d");
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    await page.render(renderContext).promise;
    const imageData = canvas.toDataURL("image/jpeg");
    console.log(imageData,'imageData')
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
                <Document
                file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page 
                  width={1200} height={720} 
                  pageNumber={pageNumber} />
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
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
              style={{ height: '100%', width: "100%" }}
              />
          </ImgBox>
            </>
          )}
          </>
        ):(
          <>
              <ImgBox>
                <Cropper
                  ref={cropperRef}
                  src={imgUrl}
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
                  style={{ height: '100%', width: '100%' }}
                />
              </ImgBox>
            </>
        )}
      </Wrappe>

      <BtnBox>
        {isPdf && (
          <>
            <PdfBtn>
              <div>
                <button 
                style={{margin:'0px 10px 0px 10px'}}
                disabled={pageNumber <= 1 || select} onClick={() => setPageNumber(pageNumber - 1)}>
                  이전
                </button>
                <span>
                  {pageNumber} / {numPages}
                </span>
                <button 
                style={{margin:'0px 10px 0px 10px'}}
                disabled={pageNumber >= numPages || select} onClick={() => setPageNumber(pageNumber + 1)}>
                  다음
                </button>
              </div>
            </PdfBtn>
          </>
        )}
        <div
        style={{
          display:'flex',
          justifyContent:'flex-end'
        }}
        >
          <button 
            style={{
              padding:'5px 12px',
              color:'white',
              backgroundColor:'#AC98FF',
              borderRadius:'8px'
            }}
            onClick={getPdfUrl}>pdf영역선택</button>
          <button 
            style={{
              padding:'5px 12px',
              color:'white',
              backgroundColor:'#AC98FF',
              borderRadius:'8px',
              margin:'0px 0px 0px 20px'
            }}
            onClick={getCropData}>영역선택</button>
          <button 
            style={{
              padding:'5px 12px',
              color:'white',
              backgroundColor:'#AC98FF',
              borderRadius:'8px',
              margin:'0px 0px 0px 20px'
            }}
            onClick={()=>{
               ('')
              onCloseModal()}}>나가기</button>
        </div>
      </BtnBox>
    </Container>
  );
}
export default CropperModal;
