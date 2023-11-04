import React, {useState, useEffect} from 'react'
import {
  Container,
  Wrappe,
  TitleBox,
  Title,
  Img,
  Box
} from './CategoryModal.style'

import CropperModal from './CropperModal';

function CategoryModal(props: { onClose: () => void }){
  const { onClose } = props;
  const [targetFile, setTargetFile] = useState<FileList | null>(null);
  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [pdfFile, setPdfFile] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);  

  const fileType = ["application/pdf"];

  useEffect(()=>{
    console.log(targetFile,'targetFile')
    if (targetFile) {
      if (targetFile && fileType.includes(targetFile[0].type)) {
        let reader = new FileReader();
        reader.readAsDataURL(targetFile[0]);
        reader.onload = (e) => {
          if (typeof e.target?.result === "string") {
            console.log(e.target.result, 'e.target.result')
            setPdfFile(e.target.result);
            setIsSuccess(true)
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
      console.log(fileExtension)
      if(fileExtension === 'png' || fileExtension === 'JPG' || fileExtension === 'jpg'){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          if (typeof e.target?.result === "string") {
            setIsSuccess(true)
            setImgUrl(e.target.result as string);
          }
        };
      } else if(fileExtension === 'pdf'){
        console.log(e.target.files,'pdf 넘어간다')
        setTargetFile(e.target.files);
      }
    }
  };

  const onCloseModal = () =>{
    setImgUrl('')
    setPdfFile('')
    setIsSuccess(false)
  }
  return(
    <Container>
      {/* <Wrappe> */}
        {/* <Img 
        onClick={onClose}
        src='/Img/취소.png'/> */}
        <Box>
          <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TitleBox htmlFor="imgInput">
              <Title>객관식</Title>
            </TitleBox>
            <input
              id="imgInput"
              type="file"
              accept=".pdf, image/*"
              style={{ display: 'none' }}
              onChange={uploadFile}
            />
          </div>
          </div>
          <div style={{margin:'0px 0px 0px 20px'}}>
            <TitleBox>
              <Title>서술형</Title>
            </TitleBox>
          </div>
        </Box>
      {/* </Wrappe> */}
      {isSuccess && <CropperModal imgUrl={imgUrl} pdfFile={pdfFile} onCloseModal={onCloseModal}/>}
    </Container>
  )
}

export default CategoryModal