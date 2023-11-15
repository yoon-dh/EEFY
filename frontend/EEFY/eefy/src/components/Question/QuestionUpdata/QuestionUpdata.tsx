import React, {useState, useEffect} from 'react'
import {putQuestionUpdata, getQuestionList} from '@/api/Question/Question'
import { useRecoilState } from "recoil";
import { NoticeList } from '@/recoil/Notice'
import { QuestionPage } from '@/recoil/Question'
import * as S from './QuestionUpdata.style'
import { useParams } from 'next/navigation';

function QuestionUpdata(props:any){
  const params = useParams()
  const data = props.data
  const [listItem, setListItem] = useRecoilState(NoticeList);
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage)
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
      id:id,
      title:title,
      content:content
    }
    const res = await putQuestionUpdata(data)
    if (res?.status === 200) {
      setQuestionPageUrl('detail');
      getList()
    }
  }

  const getList = async()=>{
    const res = await getQuestionList(Number(params.classId))
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