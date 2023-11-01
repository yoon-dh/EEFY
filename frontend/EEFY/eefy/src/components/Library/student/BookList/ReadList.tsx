import { useRecoilState } from 'recoil';
import { ReadListState } from '@/recoil/Library/Student';
import Pagination from '@mui/material/Pagination';
import {
  Card,
  TitleBox,
  Title,
  ContentBox,
  Content,
  Num,
  PaginationBox
} from './ReadList.style'
import './style.css'
function ReadList(){
  const [readList, setReadList] = useRecoilState(ReadListState);

  return(
    <div className='w-full h-full flex flex-col'>
      <div className='w-full h-full' style={{flex:9}}>
        {readList.map((item, index)=>(
          <Card className='boxShadow bg-base-200' key={index}
          style={{
            margin: index===0 ? '2% 0px 20px 0px':'20px 0px 20px 0px'
          }}
          >
            <TitleBox>
              <Title>{item.title}</Title>
            </TitleBox>
            <ContentBox>
              <Content>{item.content}</Content>
              <Num>{item.number}</Num>
            </ContentBox>
          </Card>
        ))}
      </div>
      <PaginationBox style={{flex:1}}>
        <Pagination count={10} showFirstButton showLastButton/>
      </PaginationBox>
    </div>
  )
}

export default ReadList