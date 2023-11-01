"use client"
import ContainerBtn from "./ContainerBtn"
import ReadList from "./BookList/ReadList"
function MainList(){
  return(
    <div className='w-full h-full'>
      <div>
        <ContainerBtn/>
      </div>
      <div className='w-full h-full'>
        <ReadList/>
      </div>
    </div>
  )
}

export default MainList