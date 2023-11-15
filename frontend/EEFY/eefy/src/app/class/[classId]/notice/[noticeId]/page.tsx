"use client"
import { useEffect, useState } from 'react';

import { getNoticeDetail } from '@/api/Notice/Notice';
import { useParams } from "next/navigation"
import { useRecoilValue } from 'recoil';
import { NoticePage } from '@/recoil/Notice';
import NoticeDetail from '@/components/Notice/NoticeDetail/NoticeDetail';
import NoticeUpdata from '@/components/Notice/NoticeUpdata/NoticeUpdata';

function Notice(){
  const params = useParams()
  const [data, setData] = useState({})
  const pageUrl = useRecoilValue(NoticePage)

  useEffect(()=>{
    console.log(params)
    getDetail()
  },[pageUrl])
  
  const getDetail=async()=>{
    const res = await getNoticeDetail(String(params.noticeId))
    console.log(res)
    if(res?.status===200){
      setData(res?.data)
    }
  }
  return(
    <div className='h-full w-full'>
      {pageUrl === 'detail' ? (
        <>
          <NoticeDetail data={data}/>
        </>
      ) : (
        <>
          <NoticeUpdata data={data}/>
        </>
      )}
    </div>
  )
}
export default Notice