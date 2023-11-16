import NoteLeft from "./NoteLeft"
import NoteRigth from "./NoteRigth"
import NoteCenter from "./NoteCenter"
import styled from "styled-components"

const Box = styled.div``
function Note(){

  return(
    <Box className='flex w-full h-full rounded-lg'>
      <div style={{flex:2}}>
        <NoteLeft/>
      </div>
      <div style={{flex:1}}>
        <NoteCenter/>
      </div>
      <div style={{flex:7}}>
        <NoteRigth/>
      </div>
    </Box>
  )
}

export default Note

