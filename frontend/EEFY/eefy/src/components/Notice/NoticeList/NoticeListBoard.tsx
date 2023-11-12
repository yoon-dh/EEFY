import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LecturePage } from '@/recoil/Lecture'
import {QuestionPage} from '@/recoil/Question'
import { NoticeList, DetailData, NoticePage, Name } from '@/recoil/Notice';
// 날짜 변환
import dayjs from 'dayjs';
import { Card, Title, Time, Container, Wrappe } from './NoticeListBoard.style';
import {getNoticeList, getNoticeDetail} from '@/api/Notice/Notice'
import {getLectureList, getLectureDetail} from '@/api/Lecture/Lecture'
import {getQuestionList, getQuestionDetail} from '@/api/Question/Question'

function NoticeListBoard() {
  const [noticeList, setNoticeList] = useRecoilState(NoticeList);
  const [num, setNum] = useRecoilState(DetailData);
  const [lecturePageUrl, setLecturePageUrl] = useRecoilState(LecturePage);
  const [noticePageUrl, setNoticePageUrl] = useRecoilState(NoticePage)
  const [questionPageUrl, setQuestionPageUrl] = useRecoilState(QuestionPage)
  const lastWord = useRecoilValue(Name)

  useEffect(() => {
    console.log(lastWord);
    console.log(questionPageUrl, 'questionPageUrl');
    if(lastWord === 'notice'){
      getNotice()
    } else if (lastWord === 'lecture'){
      getLecture()
    }else if (lastWord === 'question'){
      getQuestion()
    }
  }, [lastWord, noticePageUrl]);


  // 공지사항 리스트
  const getNotice = async () =>{
    const classId = {
      classId: 27
    }
    if(noticePageUrl === 'detail'){
      const res = await getNoticeList(classId)
      console.log(res)
      if(res?.status === 200){
        setNoticeList(res.data)
      }
    }
  }

  // 학습자료 리스트
  const getLecture = async ()=>{
    const classId = {
      classId: 27
    }
    if(lecturePageUrl === 'detail'){
      const res = await getLectureList(27)
      console.log(res)
      if(res?.status === 200){
        setNoticeList(res.data)
      }
    }
  }

  //질의응답 리스트
  const getQuestion = async ()=>{
    const classId = 27
    if(questionPageUrl === 'detail'){
      const res = await getQuestionList(classId)
      console.log(res)
      if(res?.status === 200){
        setNoticeList(res.data)
      }
    }
  }

  const handleClick = (id:any)=>{
    console.log(id)
    if(lastWord === 'notice'){
      NoticeDetail(id)
    } else if (lastWord === 'lecture'){
      LectureDetail(id)
    }else if (lastWord === 'question'){
      QuestionDetail(id)
    }
  }

  // 공지사항 상세페이지
  const NoticeDetail =async(id:any)=>{
    console.log(id)
    const res = await getNoticeDetail(id)
    if (res?.status===200){
      setNum(res.data)
      setNoticePageUrl('detail')
    }
  }
  // 학습자료 상세페이지
  const LectureDetail=async(id:any)=>{
    console.log(id)
    const res = await getLectureDetail(id)
    if (res?.status===200){
      setNum(res.data)
      setLecturePageUrl('detail')
    }
  }
  //질의응답 상세페이지
  const QuestionDetail=async(id:any)=>{
    console.log(id)
    const res = await getQuestionDetail(id)
    if (res?.status===200){
      setNum(res.data)
      setQuestionPageUrl('detail')
    }
  }

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
        {noticeList.map((item, index) => (
          <Card
            className='bg-default'
            key={index}
            style={{
              margin: index == noticeList.length-1 ? '25px auto 4px auto' :(index == 0 ? '3px auto 25px auto' : ''),
            }}
            onClick={()=>handleClick(item.id)}
          >
            <Title>
                {item.title.slice(0,30) + '...'}
            </Title>
            <Time>{dayjs(item.createdAt).format('YYYY.MM.DD')}</Time>
          </Card>
        ))}
      </Wrappe>
    </Container>
  );
}
export default NoticeListBoard;
