import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
// 아이콘 보이기
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  TeacherSignUpBoxTitle,
  CodeCheckBox,
  CodeCheckBtn,
  SignUpBtn,
  PasswordBox,
} from './SignUp.style'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import {postEmail, postCheckEmail, postJoin} from '../../api/Auth/join'

export default function TeacherSignUp(){
  const router = useRouter();

  // watch 함수를 사용을 위한 useForm 훅을 초기화
  const {
      watch,
      register,
      handleSubmit,
      setValue,
      clearErrors,
      formState: { errors },
  } = useForm({ mode: "onBlur" });

  const name: string = watch("name");
  const password: string = watch("password");
  const nickname: string = watch("nickname");
  const email: string = watch("email");
  const code: string = watch("code");
  const phoneNumber: Number = watch("phoneNumber");

  const [showPassword, setShowPassword] = useState<string>('password')
  const [showCode, setShowCode] = useState<boolean>(false)
  const [checkCode, setCheckCode] = useState<boolean>(false)

  const userData = {
      email: email,
      password: password,
      nickname: nickname,
      phoneNumber: phoneNumber,
      name: name,
  };

  const authMail = {
      email: email,
      code: code,
  };
  const enterEmail = {
      email: email,   
  };

  // 회원가입
  const onSubmit = async () => {
    // router.push('/login');
    // console.log(userData)
    // const res = await postJoin(userData)
    // if (res.stauts === 200){
    //   router.push('/login');
    // }
  };

  // 이메일 인증
  const handleMailSend = async () => {
      console.log(enterEmail)
      // const res = await postEmail(enterEmail)
      // if (res.stauts === 200){
      //   setShowCode(true)
      // }
  };

  // 인증 확인
  const handleAuthMail = async () => {
    console.log("코드다", authMail);
    // const res = await postCheckEmail(authMail)
    };

  return(
    <>
    <TeacherSignUpBoxTitle>SignUp</TeacherSignUpBoxTitle>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField 
      id="standard-basic" 
      label="UserName" 
      variant="standard"
      {...register("name", {
        required: "아이디를 입력해주세요.",
      })}
      onChange={(e) => {
        setValue("name", e.target.value);
        clearErrors("name");
      }}
      style={{
          margin:'10px 0px 0px 0px'
      }}
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '#AFAFAF', 
          borderBottom: '2px solid #AFAFAF',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#AFAFAF',
          } 
      }}
      />
      <PasswordBox>
          <TextField 
          id="standard-basic" 
          label="Password" 
          variant="standard"
          type={showPassword}
          style={{
              margin:'10px 0px 0px 0px'
          }}
          {...register("password", {
            pattern: {
              value:
                /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
              message:
                "영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.",
            },
          })}
          InputProps={{ 
              style: {
              width: '350px',
            //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
              fontSize:'15px',
              color: '#AFAFAF', 
              borderBottom: '2px solid #AFAFAF',
              },
          }}
          InputLabelProps={{ 
              style: { 
                  color: '#AFAFAF',
              } 
          }}
          />
          {showPassword != 'password' ? (
              <>
              <div onClick={()=>{
                  setShowPassword('password')}}>
                  <VisibilityIcon
                  style={{
                      position:'relative',
                      top:'20px',
                      left:'35px',
                    //   fontSize: window.innerWidth <= 1340 ? '25px' : '30px',
                      fontSize:'25px',
                      color:'#AFAFAF',
                      cursor:'pointer'
                  }}
                  />
              </div>
              </>
          ) : (
              <>
              <div
              style={{ cursor: 'pointer' }}
              onClick={()=>{
                  setShowPassword('text')}}>
                  <VisibilityOffIcon
                  style={{
                      position:'relative',
                      top:'20px',
                      left:'35px',
                    //   fontSize: window.innerWidth <= 1340 ? '25px' : '30px',
                      fontSize:'25px',
                      color:'#AFAFAF',
                  }}
                  />
              </div>
              </>
          )}
      </PasswordBox>
      <TextField 
      id="standard-basic" 
      label="Confirm Password" 
      variant="standard"
      type={showPassword}
      style={{
          margin:'10px 0px 0px 0px'
      }}
      {...register("checkpassword", {
        validate: (value) =>
          value === password || "비밀번호가 일치하지 않습니다.",
      })}
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '#AFAFAF', 
          borderBottom: '2px solid #AFAFAF',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#AFAFAF',
          } 
      }}
      />
      <TextField 
      id="standard-basic" 
      label="Phone" 
      variant="standard"
      style={{
          margin:'10px 0px 0px 0px'
      }}
      {...register("phoneNumber", {
      })}
      onChange={(e) => {
        setValue("phoneNumber", e.target.value);
        clearErrors("phoneNumber");
      }}
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '#AFAFAF', 
          borderBottom: '2px solid #AFAFAF',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#AFAFAF',
          } 
      }}
      />
      <TextField 
      id="standard-basic" 
      label="NickName" 
      variant="standard"
      style={{
          margin:'10px 0px 0px 0px'
      }}
      {...register("nickname", {
        required: "아이디를 입력해주세요.",
      })}
      onChange={(e) => {
        setValue("nickname", e.target.value);
        clearErrors("nickname");
      }}
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '#AFAFAF', 
          borderBottom: '2px solid #AFAFAF',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#AFAFAF',
          } 
      }}
      />
      <CodeCheckBox>
        <TextField 
        id="standard-basic" 
        label="E-mail" 
        variant="standard"
        style={{
            margin:'10px 0px 0px 0px',
        }}
        {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          onChange={(e) => {
            setValue("email", e.target.value);
            clearErrors("email");
          }}
        InputProps={{ 
            style: {
            width: '350px',
            //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
            fontSize:'15px',
            color: '#AFAFAF', 
            borderBottom: '2px solid #AFAFAF',
            },
        }}
        InputLabelProps={{ 
            style: { 
                color: '#AFAFAF',
            } 
        }}
        />
        <CodeCheckBtn onClick={handleMailSend}>Send</CodeCheckBtn>
      </CodeCheckBox>
      <div
      style={{
        opacity:showCode ? '1':'0',
        visibility:showCode ? 'visible':'hidden',
        transition:'opacity 1s, visibility 1s, max-height 5s ease',
        maxHeight: showCode ? '1200px' : '0', 
      }}
      >
        <CodeCheckBox>
            <TextField 
            id="standard-basic" 
            label="Confirm E-mail" 
            variant="standard"
            style={{
                margin:'10px 0px 0px 0px'
            }}
            onChange={(e) => {
                setValue("code", e.target.value);
                clearErrors("code");
            }}
            InputProps={{ 
                style: {
                width: '350px',
                //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
                fontSize:'15px',
                color: '#AFAFAF', 
                borderBottom: '2px solid #AFAFAF',
                },
            }}
            InputLabelProps={{ 
                style: { 
                    color: '#AFAFAF',
                } 
            }}
            />
            <CodeCheckBtn 
            onClick={handleAuthMail}>Auth</CodeCheckBtn>
        </CodeCheckBox>
      </div>
      <SignUpBtn type="submit" 
      onClick={onSubmit}
      >Submit</SignUpBtn>
    </form>
    </>
  )
}