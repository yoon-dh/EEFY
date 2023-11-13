import React, {useState, useEffect} from 'react';
import * as S from './ProblemBox.style'
import { useRecoilState } from 'recoil';
import {userData} from '@/recoil/Auth'
import { Homework, Category, HomeworkProblem  } from '@/recoil/Homework';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ProblemTitleInput from './ProblemTitleInput'
import CategoryModal from '../Modal/CategoryModal';
import {postHomeworkMakeQuestion} from '@/api/Homework/Problem'

interface HomeworkProblemType {
  title: string; 
  content: string; 
  choiceRequests: any;
}
function ProblemBox(){
  const [homework, setHomework] = useRecoilState(Homework);
  const [homeworkProblem, setHomeworkProblem] = useRecoilState<HomeworkProblemType[]>(HomeworkProblem);  
  const [category, setCategory] = useRecoilState(Category);
  const [user, setUser] = useRecoilState(userData);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [answer, setAnswer] = useState('')
  const [count, setCount] = useState(0)
  const [choiceRequest, setChoiceRequest] = useState<any>([])

useEffect(() => {
  console.log(homeworkProblem)
  if (homeworkProblem.length > 0) {
    setTitle(homeworkProblem[homeworkProblem.length - 1].title);
    setContent(homeworkProblem[homeworkProblem.length - 1].content);
    setChoiceRequest(homeworkProblem[homeworkProblem.length - 1].choiceRequests)
    console.log(homeworkProblem[homeworkProblem.length - 1].title);
  }
}, [homeworkProblem]);

  const handleTitle = (e:any)=>{
    setTitle(e.target.value)
  }
  const handleContent = (e:any)=>{
    setContent(e.target.value)
  }

  const handleChoiceContent=(value:any,number:any)=>{
    setChoiceRequest({
      ...choiceRequest,
      [number]: {
        ...choiceRequest[number],
        content: value
      }
    });
  }

  const MakeProblem = async()=>{
    const data = {
      title: title,
      content: content,
      field: "CHOICE",
      answer: answer,
      choiceRequests: choiceRequest
    }
    const makeHomeworkQuestionRequest = {
      homeworkId: homework.homeworkId,
      ...data,
    }
    console.log(makeHomeworkQuestionRequest,'<= makeHomeworkQuestionRequest')
      const formData = new FormData();
      const jsonBlob = new Blob([JSON.stringify(makeHomeworkQuestionRequest)], {
        type: "application/json",
      });
        formData.append("makeHomeworkQuestionRequest", jsonBlob);
        const newHomeworkProblem = [...homeworkProblem];
        newHomeworkProblem[homeworkProblem.length - 1] = data;
        setHomeworkProblem(newHomeworkProblem);
        const res = await postHomeworkMakeQuestion(formData,user.memberId)
          
          console.log(res)
          setCount(count+1)
          setCategory('')
          setTitle('')
          setContent('')
          setAnswer('')
          setChoiceRequest([])
    
  }


  
  return(
    <S.Container className='boxShadow'>
      <S.Wrappe className='w-full h-full flex flex-col'>
          <S.IconBox onMouseOver={()=>{console.log('마우스호버')}}>
            <HelpOutlineIcon className='text-gray-400' style={{fontSize:'40px'}}/>
          </S.IconBox>
        {!homework.Title ? (
          <>
            <div className='w-full' style={{height:'85%'}}>
              <ProblemTitleInput/>
            </div>
          </>
        ) : (
          <>
          {category == 'multiple' ? (
            <>
              <div 
              style={{
                flex:2, 
                width:'100%', alignItems:'center', justifyContent:'center'}}>
                  <S.Title>
                    <S.TitleInput onChange={(e)=>handleTitle(e)} name='title' value={title}/>
                    <S.AnswerBox>
                      <S.AnswerInput placeholder='정답을 입력학세요' onChange={(e)=>{setAnswer(e.target.value)}}/>
                    </S.AnswerBox>
                  </S.Title>
              </div>
              <div style={{flex:4, width:'100%'}}>
                <S.ContentBox>
                  <S.Content onChange={(e)=>handleContent(e)} name="content" value={content} />
                </S.ContentBox>
              </div>
              <div style={{flex:4, width:'100%'}}>
                <S.NumberBox>
                  {choiceRequest.map((item:any, index:number)=>(
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
                        fontWeight:'bold',
                        fontSize:'14px'
                      }}>
                        {item.number}
                      </div>
                      <input style={{
                        margin:'10px 0px 0px 0px',
                        width:'100%',
                        outline:'none',
                        border: '2px solid #D6BCFF',
                        borderRadius: '8px',
                        padding:'5px',
                        fontSize:'14px'
                      }} value={item.content.slice(1)}
                      name='Numtitle'
                      onChange={(e) => handleChoiceContent(String(e.target.value), Number(item.number)-1)}
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
                    onClick={()=>{
                      MakeProblem()
                      }}>
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