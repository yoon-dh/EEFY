import React, { useState, useEffect } from 'react';
import { putNoticeUpdata, getNoticeList } from '@/api/Notice/Notice';
import { useRecoilState } from 'recoil';
import { NoticePage, NoticeList } from '@/recoil/Notice';
import * as S from '../NoticeCreate/NoticeCreate.style';
import { useParams } from 'next/navigation';

function NoticeUpdata(props:any) {
  const params = useParams()

  const data = props.data
  const [listItem, setListItem] = useRecoilState(NoticeList);
  const [noticePageUrl, setNoticePageUrl] = useRecoilState(NoticePage);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (data) {
      setId(data?.id);
      setTitle(data?.title);
      setContent(data?.content);
    }
  }, []);

  const handlePost = async () => {
    const data = {
      id: id,
      title: title,
      content: content,
    };
    const res = await putNoticeUpdata(data);
    if (res?.status === 200) {
      setNoticePageUrl('detail');
      getList()
    }
  };

  const getList = async()=>{
    const classId = {
      classId: params.classId,
    };
    const res = await getNoticeList(classId)
    if(res?.status===200){
      setListItem(res?.data)
    }
  }

  return (
    <S.Container className='flex flex-col'>
      <S.Wrappe>
        <S.Box className='flex flex-col'>
          <S.TitleBox>
            <S.Title>title</S.Title>
            <S.TitleInput
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </S.TitleBox>

          <S.ContentBox>
            <S.content>content</S.content>
            <S.ContentInput
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
            />
          </S.ContentBox>

          <S.BtnBox>
            <S.CancelBtn className=' text-error text-xl' onClick={() => setNoticePageUrl('detail')}>
              cancel
            </S.CancelBtn>
            <div style={{ flex: 1 }}></div>
            <S.CreateBtn className=' text-info text-xl' onClick={handlePost}>
              modify
            </S.CreateBtn>
          </S.BtnBox>
        </S.Box>
      </S.Wrappe>
    </S.Container>
  );
}
export default NoticeUpdata;
