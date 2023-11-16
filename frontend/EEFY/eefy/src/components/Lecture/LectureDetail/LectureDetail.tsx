import React, {useState, useEffect} from 'react'
import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';
import {
  Container,
  Header,
  Wrappe,
  Title,
  Time,
  Img,
  UseName,
  Line,
  ContentBox,
  Content,
  UpdataBtn,
  DeleteBtn,
  BtnBox,
  ViewerBtn,
  DownloadBtn,
} from './LectureDetail.style';
import Image from 'next/image';
import down from 'public/Img/다운로드.png'
import open from 'public/Img/열기.png'
import { OcrFileCheck } from '@/recoil/Homework';
function LectureDetail(props:any) {
  const data = props.data

  const [targetFile, setTargetFile] = useState<FileList | null>(null);
  const [ocr, setOcr] = useRecoilState(OcrFileCheck)

  const fileType = ["application/pdf"]; 

  // useEffect(()=>{
  //   if (targetFile) {
  //     if (targetFile && fileType.includes(targetFile[0].type)) {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(targetFile[0]);
  //       reader.onload = (e) => {
  //         if (typeof e.target?.result === "string") {
  //           const NewPdfFile = e.target.result
  //           setOcr({...ocr,pdfFile:NewPdfFile,isSuccess:true});
  //         }
  //       };
  //     }
  //   }
  // },[targetFile])

  // lectureFilePath

  const handleViewer = () => {
    console.log(data.lectureFilePath.slice(data.lectureFilePath.length-3, data.lectureFilePath.length))
    //파일 업로드
      const fileName = data.lectureFilePath.slice(data.lectureFilePath.length-3, data.lectureFilePath.length);
      if(fileName === 'png' || fileName === 'JPG' || fileName === 'jpg'){
        setOcr({...ocr,imgUrl:data.lectureFilePath,isSuccess:true});
      } else if(fileName === 'pdf'){
        setOcr({...ocr,pdfFile:data.lectureFilePath,isSuccess:true});
      }
  };
  
  const handledown = () => {
    fetch(data.lectureFilePath, { method: "GET", mode: "cors" })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = data.title;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("이미지 다운로드 오류:", error);
      });
  }
  
  return (
    <>
      <Container
        style={{
          flex: 8,
        }}
      >
        {data?.title && (
          <>
            <Wrappe style={{ boxShadow: 'none', padding: '2% 5%' }} className='flex flex-col'>
              <div style={{ flex: 9 }}>
                <Header>
                  <div className='flex'>
                    <Title>{data.title}</Title>
                    <Time>{dayjs(data.createdAt).format('YYYY.MM.DD')}</Time>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '300px',
                      }}
                    >
                      <UseName>{data.nickname}</UseName>
                    </div>

                  </div>
                </Header>
                <Line />
                <ContentBox>
                  <Content>
                    {data.content}
                  </Content>
                </ContentBox>
              </div>

            </Wrappe>
              <BtnBox>
                <ViewerBtn 
                onClick={handleViewer}
                >
                 Viewer 열기
                  <Image 
                  style={{
                    margin:'0px 0px 0px 5px'
                  }}
                  src={open} width={14} height={14} alt=''/>
                </ViewerBtn>
                <DownloadBtn
                onClick={handledown}
                >
                  자료 다운 받기
                  <Image 
                  style={{
                    margin:'0px 0px 0px 5px'
                  }}
                  src={down} width={14} height={14} alt=''/>
                </DownloadBtn>
              </BtnBox>
          </>
        )}
      </Container>
    </>
  );
}

export default LectureDetail;
