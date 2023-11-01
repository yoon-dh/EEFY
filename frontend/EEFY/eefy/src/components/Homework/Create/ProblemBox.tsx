import React, {useState} from 'react';
import * as S from './ProblemBox.style'
import { useRecoilState } from 'recoil';
import { HomeworkProblem } from '@/recoil/Homework';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function ProblemBox(){
  const [problem, setProblem] = useRecoilState(HomeworkProblem);

  const handleTitle = (e)=>{
    const newTitle = e.target.value;
    setProblem({ ...problem, title: newTitle });
  }
  const handleContent = (e)=>{
    const newContent = e.target.value;
    setProblem({ ...problem, content: newContent });
  }

  const handleNumTitle = (e, id) => {
    const newTitle = e.target.value;
    console.log(id,newTitle)
    // 새로운 NumList를 생성하고 해당 id의 title을 변경
    const updatedNumList = problem.NumList.map(item => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
  
    console.log(updatedNumList,'updatedNumList')
    setProblem({ ...problem, NumList: updatedNumList });
  };
  
  return(
    <S.Container className='boxShadow'>
      <S.Wrappe className='w-full h-full flex flex-col'>
          <S.IconBox onMouseOver={()=>{console.log('마우스호버')}}>
            <HelpOutlineIcon className='text-gray-400' style={{fontSize:'40px'}}/>
          </S.IconBox>
        <div style={{flex:2, width:'100%', alignItems:'center', justifyContent:'center'}}>
          <S.Title>
            <S.TitleInput onChange={handleTitle} name='title' value={problem.title}/>
          </S.Title>
        </div>
        <div style={{flex:4, width:'100%'}}>
          <S.ContentBox>
            <S.Content onChange={handleContent} name='content' value={problem.content}/>
          </S.ContentBox>
        </div>
        <div style={{flex:4, width:'100%'}}>
          <S.NumberBox>
            {problem.NumList.map((item, index)=>(
              <div key={index} className='flex w-full'>
                <div style={{
                  width:'40px',
                  height:'35px',
                  borderRadius:'50%',
                  border:'2px solid #D6BCFF',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  margin:'12px 10px 0px 0px',
                  fontWeight:'bold'
                }}>{item.id}</div>
                <input style={{
                  margin:'10px 0px 0px 0px',
                  width:'100%',
                  outline:'none',
                  border: '2px solid #D6BCFF',
                  borderRadius: '8px',
                  padding:'5px'
                }} value={item.title}
                name='Numtitle'
                onChange={(e)=>handleNumTitle(e,item.id)}
                />
              </div>
            ))}
          </S.NumberBox>
        </div>
        <div style={{flex:1, width:'100%'}}>
          <S.BtnBox>
            <div style={{
              margin:'0px 0px 0px auto'
            }}>
              <div className="tooltip tooltip-bottom tooltip-primary" data-tip="이전">
                <S.BeforeBtn src='/Img/화살표.png'/>
              </div>
              <div className="tooltip tooltip-bottom tooltip-primary" data-tip="다음">
                <S.NextBtn src='/Img/화살표.png'/>
              </div>
            </div>
          </S.BtnBox>
        </div>  
      </S.Wrappe>
    </S.Container>
  )
}

export default ProblemBox