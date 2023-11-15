"use client"
import { useEffect, useState } from 'react';

import { getLectureDetail } from '@/api/Lecture/Lecture';
import { useParams } from "next/navigation"
import LectureDetail from '@/components/Lecture/LectureDetail/LectureDetail';

function Lecture(){
  const params = useParams()
  const [data, setData] = useState({})

  useEffect(()=>{
    console.log(params)
    getDetail()
  },[])
  
  const getDetail=async()=>{
    const res = await getLectureDetail(Number(params.lectureId))
    console.log(res)
    if(res?.status===200){
      setData(res?.data)
    }
  }

  return(
    <div className='h-full w-full'>
      <LectureDetail data={data}/>
    </div>
  )
}
export default Lecture