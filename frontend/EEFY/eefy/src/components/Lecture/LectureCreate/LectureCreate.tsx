import React, { useState } from "react";
import * as S from './LectureCreate.style'
import { useRecoilState } from "recoil";
import {LecturePage} from '@/recoil/Lecture'
import { NoticeList } from '@/recoil/Notice'
import {postLectureCreate, getLectureList} from '@/api/Lecture/Lecture'
import { useRouter, useParams } from 'next/navigation';

function LectureCreate(){
  const params = useParams()
  const router = useRouter()

  const [lecturePage, setLecturepage] = useRecoilState(LecturePage)
  const [listItem, setListItem] = useRecoilState(NoticeList);

  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [file, setFile] = useState<File  | null>(null)

  const contentInfo = {
    classId:Number(params.classId),
    title: title,
    content: content
  }

  //파일 업로드
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; 
    if (selectedFile) {
      console.log(selectedFile);
      setFile(selectedFile);
    }
  }
    
  const handleSubmit = async () => {
    console.log(contentInfo, 'contentInfo')
    console.log(file, 'file')
    const formData = new FormData();
    const jsonBlob = new Blob([JSON.stringify(contentInfo)], {
      type: "application/json",
    });
    if (file !== null) {
      formData.append("file", file);
    }
    formData.append("request", jsonBlob);
    
    const res = await postLectureCreate(formData)
    if (res?.status===200){
        getList()
        router.push(`/class/${params.classId}/lecture/${res?.data.id}`)
    }
  }

  const getList = async()=>{
    const res = await getLectureList(Number(params.classId))
    if(res?.status===200){
      setListItem(res?.data)
    }
  }

  return(
    <S.Container className='flex flex-col'>
      <S.Wrappe>
        <S.Box className='flex flex-col'>
           {/* titleBox */}
          <S.TitleBox>
            <S.Title>title</S.Title>
            <div style={{ flex: 1 }}></div>
            <S.TitleInput value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
          </S.TitleBox>
          {/* content */}
          <S.ContentBox>
            <S.content>
              content
            </S.content>
            <S.ContentInput value={content} onChange={(e)=>{
              setContent(e.target.value)
            }}/>
          </S.ContentBox>
          
           {/* Btn File */}
          <S.FileBox>
            {/* <S.File>
              업로드
              <S.FileInput type="file" onChange={handleFileSelect}/>
            </S.File>
            {file && (
              <>
            <S.FileName>{file.name}</S.FileName> 
              </>
            )} */}
              <input
                id="imgInput"
                type="file"
                accept=".pdf, image/*"
                onChange={handleFileSelect}
                className='file-input file-input-bordered w-full max-w-md'
              />
          </S.FileBox>

          {/* Btn section */}
          <S.BtnBox>
            <S.CancelBtn className=' text-error text-xl' onClick={()=>{
              router.back();
            }}>
              cancel
            </S.CancelBtn>
            <div style={{ flex: 1 }}></div>
            <S.CreateBtn  className=' text-info text-xl' onClick={handleSubmit}>
              create
            </S.CreateBtn>
          </S.BtnBox>
        </S.Box>
      </S.Wrappe>
    </S.Container>
  )
}

export default LectureCreate