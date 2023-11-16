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
      setId(data?.questionId)
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
        {/* Btn section */}
        <S.BtnBox>
          <S.CancelBtn className=' text-error text-xl' onClick={()=>setQuestionPageUrl('detail')}>
          cancel
          </S.CancelBtn>
          <div style={{ flex: 1 }}></div>
          <S.CreateBtn  className=' text-info text-xl' onClick={handlePost}>
          create
          </S.CreateBtn>
        </S.BtnBox>
      </S.Box>
    </S.Wrappe>
  </S.Container>
  )
}
export default QuestionUpdata