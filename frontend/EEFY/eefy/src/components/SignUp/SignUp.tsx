import React, {useState, useEffect} from 'react';
// 뒤로가기
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {
    Container,
    Box1,
    Box2,
    Img,
    Box1Title1,
    Box1Title2,
    Header1,
    Btn1,
    BtnName,
    Header2,
    Box2Title1,
    Box2Title2,
    Btn2,
    TeacherSignUpBox,
    BackIcon,
    StudentSignUpBox,
    LoginBtn
} from './SignUp.style'
import './styles.css'
import TeacherSignUp from './TeacherSignUp';
import StudentSignUp from './StudentSignUp';
import { useRouter } from 'next/navigation';

function SignUp() {
    const [teacher, setTeacher] = useState(false)
    const [student, setStudent] = useState(false)
    const [login, setLogin] = useState(false)
    const router = useRouter();

    useEffect(()=>{
        setLogin(true)
    },[])
  return (
    <div className='w-full h-full'>
        {/* {!student && ( */}
            <>
            <Box1
            style={{
                opacity:student ? '0':'1',
                visibility:student ? 'hidden':'visible',
                clipPath:!login ? 'polygon(0% 0%, 0 0, 0 49%, 0 100%, 0% 100%)' :(student ? 'polygon(0% 0%, 0 0, 0 49%, 0 100%, 0% 100%)':(teacher ? "polygon(0% 0%, 78% 0, 100% 55%, 100% 100%, 0% 100%)" : ''))
            }}
            >
                <Header1
                style={{
                    top:teacher ? '10%':''
                }}
                >
                    <Box1Title1 className='text-white'>강사</Box1Title1>
                    <Box1Title2>회원가입</Box1Title2>
                    {!teacher && (
                        <>
                        <Btn1 
                        onClick={()=>{
                            setStudent(false);
                            setTeacher(true);
                        }}>
                            <BtnName>GO</BtnName>
                        </Btn1>
                        </>
                    )} 
                </Header1>

                {teacher && (
                    <>
                    <TeacherSignUpBox
                    style={{
                        opacity:teacher ? '1':'0',
                        visibility:teacher ? 'visible':'hidden',
                    }}
                    >
                        <TeacherSignUp/>
                    </TeacherSignUpBox>
                    </>
                )} 
            </Box1>
            </>
        {/* // )} */}
        {/* {login && ( */}
            <>
            <Img 
            src='/Img/회원가입.png' 
            style={{
                position: 'absolute',
                top: !login ? '50%' :(student ? '35%' : (teacher ? '65%' : '50%')),
                left: !login ? '50%' :(student ? '80%' : (teacher ? '20%':'50%')),
                width:teacher || student ? '35%':'',
                opacity:login ? '1':'0',
                visibility:login ? 'visible':'hidden',
                transition: `
                    top 1.5s,
                    left 1.5s,
                    width 1s,
                    opacity 2.5s,
                    visibility 2.5s`
            }}
            />
            </>
        {/* )} */}
        {/* {!teacher && ( */}
            <>
            <Box2
            style={{
                opacity:teacher ? '0':'1',
                visibility:teacher ? 'hidden':'visible',
                clipPath: !login ? 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 49%)' :(teacher ? 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 49%)' :(student ? 'polygon(0 0, 100% 0%, 100% 100%, 23% 100%, 0 45%)': ''))
            }}
            >
                <Header2
                style={{
                    top:student ? '70%':''
                }}>
                    <Box2Title1>학생</Box2Title1>
                    <Box2Title2>회원가입</Box2Title2>
                    {!student && (
                        <>
                        <Btn2 onClick={()=>{
                            setTeacher(false);
                            setStudent(true);
                        }}>
                            <BtnName>GO</BtnName>
                        </Btn2>
                        </>
                    )}
                </Header2>
                {student && (
                    <>
                    <StudentSignUpBox
                    style={{
                        opacity:student ? '1':'0',
                        visibility:student ? 'visible':'hidden',
                    }}
                    >
                        <StudentSignUp/>
                    </StudentSignUpBox>
                    </>
                )} 
            </Box2>
            </>
        {/* )} */}

        {login && (
            <>
            {teacher || student ? (
                <div>
                <BackIcon 
                    onClick={() => {
                        setStudent(false)
                        setTeacher(false)
                        setLogin(true)
                    }}
                >
                    <KeyboardBackspaceIcon
                    style={{
                        fontSize: '40px',
                        color: student ? '3B3B84' : 'BBBBE5',
                        cursor: 'pointer',
                    }}
                    />
                </BackIcon>
                </div>
            ) : (
                <></>
            )}
            </>
        )}
        {student || teacher || login && (
            <>
            <LoginBtn onClick={()=>{
                setStudent(true)
                setTeacher(true)
                setLogin(false)
                setTimeout(function() {
                    router.push('/login');
                  }, 1500);
            }}
            >Login</LoginBtn>
            </>
        )}
    </div>
  );
}

export default SignUp;
