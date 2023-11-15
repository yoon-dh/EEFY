import React, { useState } from 'react';
import { postQuestionCreate, getQuestionList } from '@/api/Question/Question';
import { useRecoilState } from 'recoil';
import { NoticeList } from '@/recoil/Notice';
import * as S from './QuestionCreate.style';
import swal from 'sweetalert';
import { useRouter, useParams } from 'next/navigation';

function QuestionCreate() {
  const params = useParams()
  const router = useRouter()
  const [listItem, setListItem] = useRecoilState(NoticeList);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCancel = async () => {
    router.back();
  };

  const handlePost = async () => {
    const data = {
      classId: Number(params.classId),
      title: title,
      content: content,
    };
    if (title === '') {
      swal('', '제목을 입력해주세요!', 'warning');
    } else if (content === '') {
      swal('', '내용을 입력해주세요!', 'warning');
    } else {
      const res = await postQuestionCreate(data);
      if (res?.status === 200) {
        getList()
        router.push(`/class/${params.classId}/question/${res?.data.id}`)
      }
    }
  };

  const getList = async()=>{
    const res = await getQuestionList(Number(params.classId))
    if(res?.status===200){
      setListItem(res?.data)
    };
  };

  return (
    <S.Container className='flex flex-col'>
      <S.Wrappe>
        <S.Box className='flex flex-col'>
          <S.TitleBox>
            <S.Title>제목</S.Title>
            <S.TitleInput
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </S.TitleBox>

          <S.ContentBox>
            <S.content>내용</S.content>
            <S.ContentInput
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
            />
          </S.ContentBox>
        </S.Box>
      </S.Wrappe>
      <S.BtnBox>
        <S.CancelBtn onClick={handleCancel}>취소</S.CancelBtn>
        <S.CreateBtn onClick={handlePost}>생성</S.CreateBtn>
      </S.BtnBox>
    </S.Container>
  );
}
export default QuestionCreate;
