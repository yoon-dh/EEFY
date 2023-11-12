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
}
function ProblemBox(){
  const [homework, setHomework] = useRecoilState(Homework);
  const [homeworkProblem, setHomeworkProblem] = useRecoilState<HomeworkProblemType[]>(HomeworkProblem);  const [category, setCategory] = useRecoilState(Category);
  const [user, setUser] = useRecoilState(userData);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [answer, setAnswer] = useState('')
  const [targetFile, setTargetFile] = useState<any | null>(null);
  const [count, setCount] = useState(0)

  const [choiceRequests, setChoiceRequests] = useState([
    {
      number:"1",
    content:''
  },
    {
      number:"2",
    content:''
  },
    {
      number:"3",
    content:''
  },
    {
      number:"4",
    content:''
  },
])

useEffect(() => {
  if (homeworkProblem.length > 1) {
    setTitle(homeworkProblem[homeworkProblem.length - 1].title);
    console.log(homeworkProblem[homeworkProblem.length - 1].title);
  }
}, [homeworkProblem]);

  const handleTitle = (e:any)=>{
    setTitle(e.target.value)
  }
  const handleContent = (e:any)=>{
    setContent(e.target.value)
  }

  const handleNumTitle=(value:any,number:any)=>{
    const updatedChoiceRequests = [...choiceRequests];
    updatedChoiceRequests[number].content = value;
    console.log(value,updatedChoiceRequests[number])
    // const data = {
    //   number:number,
    //   content:
    // }
    setChoiceRequests(updatedChoiceRequests);
  }

  const MakeProblem = async()=>{
    const data = {
      title: title,
      content: content,
      field: "CHOICE",
      answer: 'df',
      choiceRequests: choiceRequests
    }
    const makeHomeworkQuestionRequest = {
      "homeworkId": homework.homeworkId,
      ...data,
    }
    if (targetFile) {
      const formData = new FormData();
      const jsonBlob = new Blob([JSON.stringify(makeHomeworkQuestionRequest)], {
        type: "application/json",
      });
        formData.append("makeHomeworkQuestionRequest", jsonBlob);
        formData.append("voiceFile", targetFile);
        setHomeworkProblem([...homeworkProblem, data])
        // const res = await postHomeworkMakeQuestion(formData,user.memberId)
        // console.log(res)
        setCount(count+1)
        setCategory('')
        setTitle('')
        setContent('')
        setTargetFile(null)
        setChoiceRequests([
          {
            number:"1",
          content:''
        },
          {
            number:"2",
          content:''
        },
          {
            number:"3",
          content:''
        },
          {
            number:"4",
          content:''
        },
      ])
    }
  }

  
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      console.log(fileExtension, 'fileExtension');
  
      if (fileExtension === 'png' || fileExtension === 'JPG' || fileExtension === 'jpg') {
        setTargetFile(selectedFile);
      }
    }
  };
  
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
              <div style={{flex:2, width:'100%', alignItems:'center', justifyContent:'center'}}>
                <S.Title>
                  <S.TitleInput onChange={(e)=>handleTitle(e)} name='title' value={title}/>
                </S.Title>
              </div>
              <div style={{flex:4, width:'100%'}}>
                <S.ContentBox>
                  <S.Content onChange={(e)=>handleContent(e)} name="content" value={content} />
                </S.ContentBox>
              </div>
              <div style={{flex:4, width:'100%'}}>
                <S.NumberBox>
                  {choiceRequests.map((item, index)=>(
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
                      }}>
                        {item.number}
                      </div>
                      <input style={{
                        margin:'10px 0px 0px 0px',
                        width:'100%',
                        outline:'none',
                        border: '2px solid #D6BCFF',
                        borderRadius: '8px',
                        padding:'5px'
                      }} value={item.content}
                      name='Numtitle'
                      onChange={(e) => handleNumTitle(String(e.target.value), Number(item.number)-1)}
                      />
                    </div>
                  ))}
                </S.NumberBox>
              </div>

              <div style={{flex:1, width:'100%'}}>

                <input type="file" onChange={uploadFile}/>

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