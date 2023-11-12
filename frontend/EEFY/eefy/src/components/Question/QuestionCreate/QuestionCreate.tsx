import React, {useState} from 'react'
import {postQuestionCreate, getQuestionList, getQuestionDetail} from '@/api/Question/Question'
import { useRecoilState } from "recoil";
import { DetailData, NoticeList } from '@/recoil/Notice'
import { QuestionPage } from '@/recoil/Question'
import * as S from './QuestionCreate.style'
import swal from "sweetalert";

function QuestionCreate(){
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage)
  const [notice, setNotice] = useRecoilState<any | null>(DetailData);
  const [listData, setListData] = useRecoilState(NoticeList);

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleCancel = async()=>{
    const Detail = await getQuestionDetail(Number(listData[0].id))
    if(Detail?.status===200){
      console.log(Detail,'Detail')
      setNotice(Detail.data)
      setQuestionPageUrl('detail')
    }
  }

  const handlePost = async()=>{
    const data = {
      classId:27,
      title:title,
      content:content
    }
    if(title===''){
      swal("", "제목을 입력해주세요!", "warning");
    } else if(content===''){
      swal("", "내용을 입력해주세요!", "warning");
    }else{
      const res = await postQuestionCreate(data)
      if(res?.status===200){
        const classId = 27
        const List = await getQuestionList(classId);
        if (List?.status===200){
          setListData(List.data)
          if(List.data){
            const Detail = await getQuestionDetail(List.data[0].id)
            if(Detail?.status===200){
              setNotice(Detail.data)
              setQuestionPageUrl('detail')
            }
          }
      }
    }
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
      <S.CancelBtn onClick={handleCancel}>
        취소
      </S.CancelBtn>
      <S.CreateBtn onClick={handlePost}>
        생성
      </S.CreateBtn>
    </S.BtnBox>
  </S.Container>
  )
}
export default QuestionCreate