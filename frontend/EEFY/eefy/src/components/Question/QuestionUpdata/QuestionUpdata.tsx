import React, {useState, useEffect} from 'react'
import {putQuestionUpdata, getQuestionDetail} from '@/api/Question/Question'
import { useRecoilState } from "recoil";
import { DetailData } from '@/recoil/Notice'
import { QuestionPage } from '@/recoil/Question'
import * as S from './QuestionUpdata.style'

function QuestionUpdata(){
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage)
  const [data, setData] = useRecoilState(DetailData)
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(()=>{
    if(data){
      setId(data?.id)
      setTitle(data?.title)
      setContent(data?.content)
    }
  },[])

  const handlePost =async()=>{
    const data = {
      id:3,
      title:title,
      content:content
    }
    const res = await putQuestionUpdata(data)
    console.log(res)
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
      </S.Box>
    </S.Wrappe>
    <S.BtnBox>
      <S.CancelBtn onClick={()=>setQuestionPageUrl('detail')}>
        취소
      </S.CancelBtn>
      <S.CreateBtn onClick={handlePost}>
        생성
      </S.CreateBtn>
    </S.BtnBox>
  </S.Container>
  )
}
export default QuestionUpdata