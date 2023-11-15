import React, { useState } from "react";
import * as S from './LectureCreate.style'
import { useRecoilState } from "recoil";
import {LecturePage} from '@/recoil/Lecture'
import { NoticeList } from '@/recoil/Notice'
import {postLectureCreate, getLectureList} from '@/api/Lecture/Lecture'
import swal from "sweetalert";
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

    if(contentInfo.title===''){
      swal("", "제목을 입력해주세요!", "warning");
    } else if(contentInfo.content===''){
      swal("", "내용을 입력해주세요!", "warning");
    }else if (!file){
      swal("", "파일을 넣어주세요!", "warning");
    }else{
      const formData = new FormData();
      const jsonBlob = new Blob([JSON.stringify(contentInfo)], {
        type: "application/json",
      });
      formData.append("file", file);
      formData.append("request", jsonBlob);
      
      const res = await postLectureCreate(formData)
      if (res?.status===200){
          getList()
          router.push(`/class/${params.classId}/lecture/${res?.data.id}`)
      }
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

          <S.TitleBox>
            <S.Title>제목</S.Title>
            <S.TitleInput value={title} onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
          </S.TitleBox>

          <S.ContentBox>
            <S.content>
              내용
            </S.content>
            <S.ContentInput value={content} onChange={(e)=>{
              setContent(e.target.value)
            }}/>
          </S.ContentBox>
          <S.FileBox>
            <S.File>
              업로드
              <S.FileInput type="file" onChange={handleFileSelect}/>
            </S.File>
            {file && (
              <>
            <S.FileName>{file.name}</S.FileName> 
              </>
            )}
          </S.FileBox>
        </S.Box>
      </S.Wrappe>
      <S.BtnBox>
        <S.CancelBtn onClick={()=>setLecturepage('detail')}>
          취소
        </S.CancelBtn>
        <S.CreateBtn onClick={handleSubmit}>
          생성
        </S.CreateBtn>
      </S.BtnBox>
    </S.Container>
  )
}

export default LectureCreate