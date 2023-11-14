'use client';
import ExplanationBox from "@/components/Homework/Explanation/ExplanationBox"
function explanation(){
  return(
    <div
      className='h-full w-full'
      style={{
        border: '1px solid red',
      }}
    >
      <ExplanationBox/>
    </div>
  )
}
export default explanation