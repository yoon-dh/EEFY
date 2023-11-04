import React, {useState} from 'react';
import * as S from './ProblemBox.style'
import { useRecoilState } from 'recoil';
import { HomeworkProblem, Category } from '@/recoil/Homework';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ProblemTitleInput from './ProblemTitleInput'
import CategoryModal from '../Modal/CategoryModal';

function ProblemBox(){
  const [problem, setProblem] = useRecoilState(HomeworkProblem);
  const [category, setCategory] = useRecoilState(Category);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setProblem({ ...problem, ProblemList: [{ ...problem.ProblemList[0], title: newTitle }] });
  }
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setProblem({ ...problem, ProblemList: [{ ...problem.ProblemList[0], content: newContent }] });
  }

  const handleNumTitle = (e: React.ChangeEvent<HTMLInputElement>, id:string) => {
    const newTitle = e.target.value;
    console.log(id,newTitle)
    // 새로운 NumList를 생성하고 해당 id의 title을 변경
    const updatedNumList = problem.ProblemList[0].NumList.map(item => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    console.log(updatedNumList,'updatedNumList')
    setProblem({ ...problem, ProblemList: [{ ...problem.ProblemList[0], title: newTitle }] });
  };
  
  return(
    <S.Container className='boxShadow'>
      <S.Wrappe className='w-full h-full flex flex-col'>
          <S.IconBox onMouseOver={()=>{console.log('마우스호버')}}>
            <HelpOutlineIcon className='text-gray-400' style={{fontSize:'40px'}}/>
          </S.IconBox>
        {!problem.Title ? (
          <>
            <div className='w-full' style={{height:'85%'}}>
              <ProblemTitleInput/>
            </div>
          </>
        ) : (
          <>
          {category == 'multiple' ? (
            <>
              <div style={{flex:2, width:'100%', alignItems:'center', justifyContent:'center'}}>
                <S.Title>
                  <S.TitleInput onChange={handleTitle} name='title' value={problem.ProblemList[0].title}/>
                </S.Title>
              </div>
              <div style={{flex:4, width:'100%'}}>
                <S.ContentBox>
                  <S.Content onChange={handleContent} name="content" value={problem.ProblemList[0].content} />
                </S.ContentBox>
              </div>
              <div style={{flex:4, width:'100%'}}>
                <S.NumberBox>
                  {problem.ProblemList[0].NumList.map((item, index)=>(
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
                    <div className="tooltip tooltip-bottom tooltip-primary" data-tip="다음" 
                    onClick={()=>{setCategory('')}}>
                      <S.NextBtn src='/Img/화살표.png'/>
                    </div>
                  </div>
                </S.BtnBox>
              </div>  
            </>
          ) : (
            <>
              <CategoryModal/>
            </>
          )}
          </>
        )}

      </S.Wrappe>
    </S.Container>
  )
}

export default ProblemBox