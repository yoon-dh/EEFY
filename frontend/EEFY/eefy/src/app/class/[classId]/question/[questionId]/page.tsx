"use client"
import { useEffect, useState } from 'react';

import { getQuestionDetail } from '@/api/Question/Question';
import { useParams } from "next/navigation"
import { useRecoilValue } from 'recoil';
import { QuestionPage } from '@/recoil/Question';
import QuestionDetail from '@/components/Question/QuestionDetail/QuestionDetail';
import QuestionUpdata from '@/components/Question/QuestionUpdata/QuestionUpdata';

function Notice(){
  const params = useParams()
  const [data, setData] = useState({})
  const pageUrl = useRecoilValue(QuestionPage)

  useEffect(()=>{
    console.log(params)
    getDetail()
  },[pageUrl])
  
  const getDetail=async()=>{
    const res = await getQuestionDetail(Number(params.noticeId))
    console.log(res)
    if(res?.status===200){
      setData(res?.data)
    }
  }
  return(
    <div className='h-full w-full'>
      {pageUrl === 'detail' ? (
        <>
          <QuestionDetail data={data}/>
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