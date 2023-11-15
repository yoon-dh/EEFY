import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LecturePage } from '@/recoil/Lecture';
import { QuestionPage } from '@/recoil/Question';
import { NoticePage, Name, NoticeList } from '@/recoil/Notice';
// 날짜 변환
import dayjs from 'dayjs';
import { Card, Title, Time, Container, Wrappe } from './NoticeListBoard.style';
import { getNoticeList } from '@/api/Notice/Notice';
import { getLectureList } from '@/api/Lecture/Lecture';
import { getQuestionList } from '@/api/Question/Question';

import { useRouter, useParams } from 'next/navigation';

function NoticeListBoard() {
  const router = useRouter();
  const params = useParams()

  const [listItem, setListItem] = useRecoilState(NoticeList);
  const [lecturePageUrl, setLecturePageUrl] = useRecoilState(LecturePage);
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage);
  const lastWord = useRecoilValue(Name);

  useEffect(() => {
    console.log(lastWord);
    console.log(params, 'params');
    if (lastWord === 'notice') {
      getNotice();
    } else if (lastWord === 'lecture') {
      getLecture();
    } else if (lastWord === 'question') {
      getQuestion();
    }
  }, []);

  // 공지사항 리스트
  const getNotice = async () => {
    const classId = {
      classId: Number(params.classId),
    };
    const res = await getNoticeList(classId);
    console.log(res);
    if (res?.status === 200) {
      setListItem(res?.data)
      if(params.noticeId===undefined){
        if (res?.data.length > 0){
          router.push(`/class/${params.classId}/notice/${res?.data[0].id}`)
        }else {
          router.push(`/class/${params.classId}/notice`)
        }
      }
    }
  };

  // 학습자료 리스트
  const getLecture = async () => {
    if (lecturePageUrl === 'detail') {
      const res = await getLectureList(Number(params.classId));
      console.log(res);
      if (res?.status === 200) {
        setListItem(res?.data)
        // if(params.lectureId===undefined){
          if (res?.data.length > 0){
            router.push(`/class/${params.classId}/lecture/${res?.data[0].id}`)
          }else {
            router.push(`/class/${params.classId}/lecture`)
          }
        // }
      }
    }
  };

  //질의응답 리스트
  const getQuestion = async () => {
    if (questionPageUrl === 'detail') {
      const res = await getQuestionList(Number(params.classId));
      console.log(res);
      if (res?.status === 200) {
        setListItem(res?.data)
        // if(params.lectureId===undefined){
          if (res?.data.length > 0){
            router.push(`/class/${params.classId}/question/${res?.data[0].id}`)
          }else {
            router.push(`/class/${params.classId}/question`)
          }
        // }
      }
    }
  };

  // 상세페이지로 이동
  const handleClick = (id: any) => {
    console.log(id);
    if (lastWord === 'notice') {
      router.push(`/class/${params.classId}/notice/${id}`)
    } else if (lastWord === 'lecture') {
      router.push(`/class/${params.classId}/lecture/${id}`)
    } else if (lastWord === 'question') {
      router.push(`/class/${params.classId}/question/${id}`)
    }
  };

  return (
    <Container
      style={{
        width: '90%',
        height: '100%',
      }}
    >
      <Wrappe
        style={{
          height: '100%',
        }}
      >
        {listItem.map((item:any, index) => (
          <Card
            className='bg-default'
            key={index}
            style={{
              margin: index == listItem.length - 1 ? '25px auto 4px auto' : index == 0 ? '3px auto 25px auto' : '',
            }}
            onClick={() => handleClick(item.id)}
          >
            <Title>{item.title.slice(0, 30)}</Title>
            <Time>
              <b>{dayjs(item.createdAt).format('YYYY.MM.DD HH:MM')}</b>
            </Time>
          </Card>
        ))}
      </Wrappe>
    </Container>
  );
}
export default NoticeListBoard;
