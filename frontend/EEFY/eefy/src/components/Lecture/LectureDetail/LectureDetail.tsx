import React, {useState, useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { DetailData } from '@/recoil/Notice';
import {LecturePage} from '@/recoil/Lecture'
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

type Notice = {
  id: string;
  title: string;
  createTime: Date;
  imgUrl: string;
  nickname: string;
  content: string;
};

function LectureDetail() {
  const [notice, setNotice] = useRecoilState<Notice | null>(DetailData);
  const [targetFile, setTargetFile] = useState<FileList | null>(null);
  const [lecturePage, setLecturePage] = useRecoilState(LecturePage);

  const [ocr, setOcr] = useRecoilState(OcrFileCheck)

  const fileType = ["application/pdf"];

  useEffect(()=>{
    console.log(targetFile,'targetFile')
    if (targetFile) {
      if (targetFile && fileType.includes(targetFile[0].type)) {
        let reader = new FileReader();
        reader.readAsDataURL(targetFile[0]);
        reader.onload = (e) => {
          if (typeof e.target?.result === "string") {
            const NewPdfFile = e.target.result
            setOcr({...ocr,pdfFile:NewPdfFile,isSuccess:true});
          }
        };
      }
    }
  },[targetFile])

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    //파일 업로드
    if (e.target.files) {
      const fileName = e.target.files[0].name;
      const fileExtension = fileName.split(".").pop();
      console.log(fileExtension,'fileExtension')
      if(fileExtension === 'png' || fileExtension === 'JPG' || fileExtension === 'jpg'){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          if (typeof e.target?.result === "string") {
            const NewImgUrl = e.target.result
            setOcr({...ocr,imgUrl:NewImgUrl,isSuccess:true});
          }
        };
      } else if(fileExtension === 'pdf'){
        console.log(e.target.files,'pdf 넘어간다')
        setTargetFile(e.target.files);
      }
    }
  };
  
  const handledown = () => {

  }
  
  return (
    <>
      <Container
        style={{
          flex: 8,
        }}
      >
        {notice?.title && (
          <>
            <Wrappe style={{ boxShadow: 'none', padding: '2% 5%' }} className='flex flex-col'>
              <div style={{ flex: 9 }}>
                <Header>
                  <div className='flex'>
                    <Title>{notice.title}</Title>
                    <Time>{dayjs(notice.createTime).format('YYYY.MM.DD')}</Time>
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
                      <Img src={notice.imgUrl} />
                      <UseName>{notice.nickname}</UseName>
                    </div>

                  </div>
                </Header>
                <Line />
                <ContentBox>
                  <Content>
                    {notice.content}
                  </Content>
                </ContentBox>
              </div>

            </Wrappe>
              <BtnBox>
                <ViewerBtn 
                id="imgInput" 
                type="file"  
                accept=".pdf, image/*"
                onChange={uploadFile}
                >
                  {/* Viewer 열기 */}
                  {/* <Image 
                  style={{
                    margin:'0px 0px 0px 5px'
                  }}
                  src={open} width={14} height={14} alt=''/> */}
                </ViewerBtn>
                <DownloadBtn
                id="imgInput" 
                type="file"  
                accept=".pdf, image/*"
                onClick={handledown}
                >
                  {/* 자료 다운 받기 */}
                  {/* <Image 
                  style={{
                    margin:'0px 0px 0px 5px'
                  }}
                  src={down} width={14} height={14} alt=''/> */}
                </DownloadBtn>
              </BtnBox>
          </>
        )}
      </Container>
    </>
  );
}

export default LectureDetail;
