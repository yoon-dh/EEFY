import React, { useState, useEffect } from 'react';
import { Container, Wrappe, CreateInput, IconBox, Box } from './CommentList.style';
import CreateIcon from '@mui/icons-material/Create';
import { getCommentCreate, getCommemtList } from '@/api/Question/Question';
import { useRouter, useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { userData } from '@/recoil/Auth';
import dayjs from 'dayjs';

function CommentList(props:any) {
  const router = useRouter()
  const params = useParams()
  const user = useRecoilValue(userData)
  const commentData = props.commentList
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState<{ comment: string; check: boolean }[]>([]);

  useEffect(()=>{
    console.log(commentData, 'commentData')
    setCommentList(commentData)
  },[commentData])

  const handleSend = async() => {
    const data = {
      id:Number(params.questionId),
      content:comment
    }
    const res = await getCommentCreate(data)
    if(res?.status===200){
      getComment()
    }
  };
  const getComment = async()=>{
    const res = await getCommemtList(Number(params.questionId))
    if(res?.status===200){
      setCommentList(res?.data)
      setComment('')
    }
  }
  

  return (
    <div className='w-full h-full flex flex-col'>
      <Container
        style={{
          overflow: 'auto',
          flex:10
        }}
      >
        {commentList.map((item:any,index)=>(
          <div key={index}>
            {item.memberId != user.memberId ? (
              <>
                <div className="chat chat-start">
                  <div className="chat-bubble" style={{fontSize:'12px'}}>{item.content}</div>
                  <div className="chat-header" style={{margin:'0px 0px 0px 5px'}}>
                    {item.name}
                    <time style={{margin:'0px 0px 0px 5px'}} className="text-xs opacity-50">{dayjs(item.createdAt).format('HH:MM')}</time>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="chat chat-end">
                  <div className="chat-header" style={{margin:'0px 0px 0px 5px'}}>
                    {item.name}
                    <time style={{margin:'0px 0px 0px 5px'}} className="text-xs opacity-50">{dayjs(item.createdAt).format('HH:MM')}</time>
                  </div>
                  <div className="chat-bubble" style={{fontSize:'12px'}}>{item.content}</div>
                </div>
              </>
            )}
          </div>
        ))}
      </Container>

      <Wrappe
      onSubmit={handleSend}
      style={{flex:1}}
      >
        <CreateInput
          id='commemt'
          name='comment'
          value={comment}
          placeholder='댓글을 입력하세요.'
          onChange={e => {
            setComment(e.target.value);
          }}
        />
        <IconBox
          style={{
            backgroundColor: 'white',
          }}
        >
          <Box
          onClick={handleSend}
          >
            <CreateIcon
              style={{
                margin: '0px 0px 0px 3px',
              }}
            />
          </Box>
        </IconBox>
      </Wrappe>
    </div>
  );
}
export default CommentList;
