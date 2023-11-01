import React, { useState, useEffect } from 'react';
import { Container, Wrappe, CreateInput, IconBox, Box } from './CommentList.style';
import SendIcon from '@mui/icons-material/Send';

function CommentList() {
  const [check, setCheck] = useState(true);
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  // useEffect(() => {
  //   var checkbox = document.getElementById("myCheckbox");
  //   if (checkbox) {
  //     checkbox.checked = true;
  //   }
  // }, []);

  // const handleClick = () => {
  //   setCheck(!check);
  //   checkbox.checked = check;
  // }

  // const handleSend = (e) => {
  //   e.preventDefault();
  //   console.log(commentList,'commentList')
  //   const teacherList = {
  //     comment:comment,
  //     check:check
  //   }
  //   setCommentList([...commentList, teacherList]);
  //   setComment('')
  // }

  return (
    <div className='w-full h-full'>
      <Container
        style={{
          height: '83%',
          overflow: 'auto',
        }}
      >
        {/* {commentList.map((item,index)=>(
          <div key={index}>
            {!item.check ? (
              <>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                  </div>
                  <div className="chat-header" style={{margin:'0px 0px 0px 5px'}}>
                    비버 
                    <time style={{margin:'0px 0px 0px 5px'}} className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble">{item.comment}</div>
                  <div className="chat-footer opacity-50">
                    Delivered
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="data:image/jpeg;base64,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" />
                    </div>
                  </div>
                  <div className="chat-header" style={{margin:'0px 0px 0px 5px'}}>
                     까를로스 
                    <time style={{margin:'0px 0px 0px 5px'}} className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble">{item.comment}</div>
                  <div className="chat-footer opacity-50">
                    Seen at 12:46
                  </div>
                </div>
              </>
            )}
          </div>
        ))} */}
      </Container>

      {/* <div className="flex flex-col">
        <div className="form-control w-52">
          <label className="cursor-pointer label">
            <span className="label-text">Remember me</span> 
            <input 
            type="checkbox" 
            className="toggle toggle-secondary" 
            id="myCheckbox"
            onClick={handleClick}/>
          </label>
        </div>
      </div> */}

      <Wrappe
      // onSubmit={handleSend}
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
          // onClick={handleSend}
          >
            <SendIcon
              style={{
                margin: '0px 0px 0px 2px',
              }}
            />
          </Box>
        </IconBox>
      </Wrappe>
    </div>
  );
}
export default CommentList;
