"use client"
import ProblemBox from './ProblemBox'
import ProblemCheckBox from './ProblemCheckBox'
function Main(){
  return(
    <div className='flex w-full h-full'>
      <div style={{
        flex:7
      }}>
        <ProblemBox/>
      </div>
      <div className='boxShadow' style={{
        flex:2,
        width:'22%',
        borderRadius:'20px'
      }}>
        <ProblemCheckBox/>
      </div>
    </div>
  )
}
export default Main