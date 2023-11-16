"use client"
import { useEffect, useState } from 'react';

import { getQuestionDetail, getCommemtList } from '@/api/Question/Question';
import { useParams } from "next/navigation"
import { useRecoilValue } from 'recoil';
import { QuestionPage } from '@/recoil/Question';
import QuestionDetail from '@/components/Question/QuestionDetail/QuestionDetail';
import QuestionUpdata from '@/components/Question/QuestionUpdata/QuestionUpdata';
import CommentList from '@/components/Question/Comment/CommentList';

function Notice(){
  const params = useParams()
  const [data, setData] = useState({})
  const [commentList, setCommentList] = useState([])
  const pageUrl = useRecoilValue(QuestionPage)

  useEffect(()=>{
    console.log(params)
    getDetail()
  },[pageUrl])
  
  useEffect(()=>{
    getComment()
  },[])
  
  const getDetail=async()=>{
    const res = await getQuestionDetail(Number(params.questionId))
    console.log(res)
    if(res?.status===200){
      setData(res?.data)
    }
  }
  const getComment = async()=>{
    const res = await getCommemtList(Number(params.questionId))
    console.log(res)
    if(res?.status===200){
      setCommentList(res?.data)
    }
  }


  return(
    <div className='h-full w-full'>
      {pageUrl === 'detail' ? (
        <>
        <div className='flex w-full h-full'>
          <div style={{flex:6}}>
            <QuestionDetail data={data}/>
          </div>
          <div style={{flex:4, backdropFilter:'blur(10px)', padding:'1%'}}>
            <CommentList commentList={commentList}/>
          </div>
        </div>
        </>
      ) : (
        <>
          <QuestionUpdata data={data}/>
        </>
      )}
    </div>
  )
}
export default Notice