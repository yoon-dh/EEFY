import React, { useState } from 'react';
import { postNoticeCreate, getNoticeList, getNoticeDetail } from '@/api/Notice/Notice';
import { useRecoilState } from 'recoil';
import { DetailData, NoticePage, NoticeList } from '@/recoil/Notice';
import * as S from './NoticeCreate.style';
import swal from 'sweetalert';

function NoticeCreate() {
  const [noticePageUrl, setNoticePageUrl] = useRecoilState(NoticePage);
  const [notice, setNotice] = useRecoilState<any | null>(DetailData);
  const [listData, setListData] = useRecoilState(NoticeList);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = async () => {
    const data = {
      classId: 27,
      title: title,
      content: content,
    };
    if (title === '') {
      swal('', '제목을 입력해주세요!', 'warning');
    } else if (content === '') {
      swal('', '내용을 입력해주세요!', 'warning');
    } else {
      const res = await postNoticeCreate(data);
      if (res?.status === 200) {
        const classId = {
          classId: 27,
        };
        const List = await getNoticeList(classId);
        if (List?.status === 200) {
          setListData(List.data);
          if (List.data) {
            const Detail = await getNoticeDetail(List.data[0].id);
            if (Detail?.status === 200) {
              setNotice(Detail.data);
              setNoticePageUrl('detail');
            }
          }
        }
      }
    }
  };

  const handleCancel = async () => {
    const Detail = await getNoticeDetail(String(listData[0].id));
    if (Detail?.status === 200) {
      console.log(Detail, 'Detail');
      setNotice(Detail.data);
      setNoticePageUrl('detail');
    }
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
            <S.CancelBtn className=' text-error text-xl' onClick={handleCancel}>
              cancel
            </S.CancelBtn>
            <div style={{ flex: 1 }}></div>
            <S.CreateBtn className=' text-info text-xl' onClick={handlePost}>
              create
            </S.CreateBtn>
          </S.BtnBox>
        </S.Box>
      </S.Wrappe>
    </S.Container>
  );
}
export default NoticeCreate;
