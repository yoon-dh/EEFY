import React, {useState, useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { OcrData } from '@/recoil/Library/CreateHomework/CreateReading';

function FileUpload(){
  const [fileDatas, setFileDatas] = useRecoilState(OcrData)
  const [targetFile, setTargetFile] = useState<FileList | null>(null);

  const fileType = ["application/pdf"];

  useEffect(()=>{
    console.log(fileDatas,'fileDatas')
    if (targetFile) {
      if (targetFile && fileType.includes(targetFile[0].type)) {
        let reader = new FileReader();
        reader.readAsDataURL(targetFile[0]);
        reader.onload = (e) => {
          if (typeof e.target?.result === "string") {
            console.log(e.target.result, 'e.target.result')
            setFileDatas({pdfFile:e.target.result, imgUrl:"",isSuccess:false});
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
      if(fileExtension === 'png' || fileExtension === 'JPG' || fileExtension === 'jpg'){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          if (typeof e.target?.result === "string") {
            console.log('이미지 업로드')
            setFileDatas({pdfFile:null, imgUrl:e.target.result, isSuccess:false});
          }
        };
      } else if(fileExtension === 'pdf'){
        console.log(e.target.files,'pdf 넘어간다')
        setTargetFile(e.target.files);
      }
    }
  };

  return(
      <input
        id="imgInput"
        type="file"
        accept=".pdf, image/*"
        onChange={uploadFile}
        className='file-input file-input-bordered w-full max-w-md'
      />
  )
}
export default FileUpload