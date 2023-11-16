"use client"
import { useEffect, useState } from 'react';

import { getLectureDetail } from '@/api/Lecture/Lecture';
import { useParams } from "next/navigation"
import LectureDetail from '@/components/Lecture/LectureDetail/LectureDetail';
// import { useRecoilValue } from 'recoil';
// import { OcrFileCheck } from '@/recoil/Homework';
// import CanvasModal from '@/components/Lecture/LectureDetail/CanvasModal';

function Lecture(){
  // const canvas = useRecoilValue(OcrFileCheck)
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
        {/* <CanvasModal/> */}
    </div>
  )
}
export default Lecture