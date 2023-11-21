import React, { useState } from 'react';
import { postQuestionCreate, getQuestionList } from '@/api/Question/Question';
import { useRecoilState } from 'recoil';
import { NoticeList } from '@/recoil/Notice';
import * as S from './QuestionCreate.style';
import { useRouter, useParams } from 'next/navigation';

function QuestionCreate() {
  const params = useParams()
  const router = useRouter()
  const [listItem, setListItem] = useRecoilState(NoticeList);
  // const [waitStatus, setWaitStatus] = useRecoilState(QuestionWaitStatus)

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
    const res = await postQuestionCreate(data);
    if (res?.status === 200) {
      getList()
      router.push(`/class/${params.classId}/question/${res?.data.id}`)
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
          {/* titleBox */}
          <S.TitleBox>
            <S.Title>title</S.Title>
            <div style={{ flex: 1 }}></div>
            <S.TitleInput
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              spellCheck={false}
            />
          </S.TitleBox>
          {/* content */}
          <S.ContentBox>
            <S.content>content</S.content>
            <S.ContentInput
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
              spellCheck={false}
            />
          </S.ContentBox>

          {/* Btn section */}
          <S.BtnBox>
            <S.CancelBtn className=' text-error text-xl' 
            onClick={handleCancel}>cancel</S.CancelBtn>
            <div style={{ flex: 1 }}></div>
            <S.CreateBtn className=' text-info text-xl' 
            onClick={handlePost}>create</S.CreateBtn>
          </S.BtnBox>
        </S.Box>
      </S.Wrappe>
    </S.Container>
  );
}
export default QuestionCreate;
