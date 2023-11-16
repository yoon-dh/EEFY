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
import { userData } from '@/recoil/Auth';
import {QuestionWaitStatus} from '@/recoil/Question'

function NoticeListBoard() {
  const router = useRouter();
  const params = useParams();

  const [listItem, setListItem] = useRecoilState(NoticeList);
  const [lecturePageUrl, setLecturePageUrl] = useRecoilState(LecturePage);
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage);
  const [noticePageUrl, setNoticePageeUrl] = useRecoilState(NoticePage);
  const lastWord = useRecoilValue(Name);
  const waitStatus = useRecoilValue(QuestionWaitStatus)

  const userDataObj = useRecoilValue(userData);

  useEffect(() => {
    if (lastWord === 'notice') {
      getNotice();
    } else if (lastWord === 'lecture') {
      getLecture();
    } else if (lastWord === 'question') {
      getQuestion();
    }
  }, []);

  // useEffect(()=>{
  //   getQuestion()
  // },[])
  // 공지사항 리스트
  const getNotice = async () => {
    const classId = {
      classId: Number(params.classId),
    };
    const res = await getNoticeList(classId);
    if (res?.status === 200) {
      setListItem(res?.data);
      if (params.noticeId === undefined) {
        if (res?.data.length > 0) {
          router.push(`/class/${params.classId}/notice/${res?.data[0].id}`);
        } else {
          router.push(`/class/${params.classId}/notice`);
        }
      }
    }
  };

  // 학습자료 리스트
  const getLecture = async () => {
    if (lecturePageUrl === 'detail') {
      const res = await getLectureList(Number(params.classId));
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
      if (res?.status === 200) {
        setListItem(res?.data)
        const neWData = res?.data.filter((item:any) => item.waitStatus === waitStatus)
        if (res?.data.length > 0){
          router.push(`/class/${params.classId}/question/${neWData[0].id}`)
        }else {
          router.push(`/class/${params.classId}/question`)
        }
      }
    }
  };

  // 상세페이지로 이동
  const handleClick = (id: any) => {
    setNoticePageeUrl('detail')
    setQuestionPageUrl('detail')
    console.log()
    if (lastWord === 'notice') {
      router.push(`/class/${params.classId}/notice/${id}`);
    } else if (lastWord === 'lecture') {
      router.push(`/class/${params.classId}/lecture/${id}`);
    } else if (lastWord === 'question') {
      router.push(`/class/${params.classId}/question/${id}`);
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
        {lastWord === 'notice' && (
          <>
          {userDataObj?.role === 'TEACHER' ? (
            <Card
              className='bg-default'
              style={{
                margin: '3px auto 25px auto',
              }}
              onClick={() => router.push(`/class/${params.classId}/notice/create`)}
            >
              <Title className='text-info' style={{ fontSize: '20px' }}>
                +
              </Title>
              <Time>
                <b className='text-info' style={{ letterSpacing: '2px', fontSize: '15px' }}>
                  CREATE
                </b>
              </Time>
            </Card>
          ) : null}
          </>
        )}
        {lastWord === 'lecture' && (
          <>
          {userDataObj?.role === 'TEACHER' ? (
            <Card
              className='bg-default'
              style={{
                margin: '3px auto 25px auto',
              }}
              onClick={() => router.push(`/class/${params.classId}/lecture/create`)}
            >
              <Title className='text-info' style={{ fontSize: '20px' }}>
                +
              </Title>
              <Time>
                <b className='text-info' style={{ letterSpacing: '2px', fontSize: '15px' }}>
                  CREATE
                </b>
              </Time>
            </Card>
          ) : null}
          </>
        )}
        {lastWord === 'question' && (
          <>
            {userDataObj?.role === 'STUDENT' && waitStatus === false ? (
              <Card
                className='bg-default'
                style={{
                  margin: '3px auto 25px auto',
                }}
                onClick={() => router.push(`/class/${params.classId}/question/create`)}
              >
                <Title className='text-info' style={{ fontSize: '20px' }}>
                  +
                </Title>
                <Time>
                  <b className='text-info' style={{ letterSpacing: '2px', fontSize: '15px' }}>
                    CREATE
                  </b>
                </Time>
              </Card>
            ) : null}
          </>
        )}

        {lastWord === 'question' ? (
          <>
            {listItem
              .filter((item:any) => item.waitStatus === waitStatus) 
              .map((item: any, index) => (
                <Card
                  className='bg-default'
                  key={index}
                  style={{
                    margin: index === listItem.length - 1 ? '25px auto 4px auto' : '',
                  }}
                  onClick={() => handleClick(item.id)}
                >
                  <Title>{item.title.slice(0, 30)}</Title>
                  <Time>
                    <b>{dayjs(item.createdAt).format('YYYY.MM.DD HH:MM')}</b>
                  </Time>
                </Card>
              ))
            }
          </>
        ) : (
          <>
          {listItem.map((item: any, index) => (
            <Card
              className='bg-default'
              key={index}
              style={{
                margin: index == listItem.length - 1 ? '25px auto 4px auto' : '',
              }}
              onClick={() => handleClick(item.id)}
            >
              <Title>{item.title.slice(0, 30)}</Title>
              <Time>
                <b>{dayjs(item.createdAt).format('YYYY.MM.DD HH:MM')}</b>
              </Time>
            </Card>
          ))}
          </>
        )}
      </Wrappe>
    </Container>
  );
}
export default NoticeListBoard;
