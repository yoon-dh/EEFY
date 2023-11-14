import React, { useState, useEffect } from 'react';
import { putNoticeUpdata, getNoticeDetail } from '@/api/Notice/Notice';
import { useRecoilState } from 'recoil';
import { NoticePage, DetailData } from '@/recoil/Notice';
import * as S from '../NoticeCreate/NoticeCreate.style';

function NoticeUpdata() {
  const [noticePageUrl, setNoticePageUrl] = useRecoilState(NoticePage);
  const [data, setData] = useRecoilState(DetailData);
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
    console.log(res, '작성 성공');
    if (res?.status === 200) {
      const resDetail = await getNoticeDetail(id);
      if (resDetail?.status === 200) {
        setData(resDetail.data);
        setNoticePageUrl('detail');
      }
    }
  };

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
