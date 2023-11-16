import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
// 아이콘 보이기
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Title, InputBox, LoginBtn, PasswordBtn, Box, Etc, SignUpBtn } from './LoginBox.style';
import { useRouter } from 'next/navigation';
import {postLogin} from "@/api/Auth/login"

export default function LoginBox() {
  const [showPassword, setShowPassword] = useState('password');
  const router = useRouter();

  const [ email, setEmail] = useState<string>('')
  const [ password, setPassword] = useState<string>('')

  // 이메일 인증
  const handleLogin = async () => {
    const data = {
      email:email,
      password: password
    }
    console.log(data)
    const res:any = await postLogin(data)
    console.log(res)
    if(res?.status === 200){
    }
  };
  
  return (
    <div>
      <Title>Login</Title>
      <InputBox>
        <TextField
          id='standard-basic'
          label='UserName'
          variant='standard'
          onChange={(e)=>{setEmail(e.target.value)}}
          style={{
            //   margin: window.innerWidth <= 1340 ? '30px 0px 0px 0px' : '50px 0px 0px 0px'
            margin: '30px 0px 0px 0px',
          }}
          InputProps={{
            style: {
              //   width: window.innerWidth <= 1340 ? '350px' : '400px',
              width: '350px',
              //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
              fontSize: '15px',
              color: '#AFAFAF',
              borderBottom: '2px solid #AFAFAF',
            },
          }}
          InputLabelProps={{
            style: {
              color: '#AFAFAF',
            },
          }}
        />
        <div style={{ display: 'flex' }}>
          <TextField
            id='standard-basic'
            label='Password'
            variant='standard'
            type={showPassword}
            onChange={(e)=>{setPassword(e.target.value)}}
            style={{
              margin: '10px 0px 0px 0px',
            }}
            InputProps={{
              style: {
                //   width: window.innerWidth <= 1340 ? '350px' : '400px',
                width: '350px',
                //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
                fontSize: '15px',
                color: '#AFAFAF',
                borderBottom: '2px solid #AFAFAF',
              },
            }}
            InputLabelProps={{
              style: {
                color: '#AFAFAF',
              },
            }}
          />
          {showPassword != 'password' ? (
            <>
              <div
                onClick={() => {
                  setShowPassword('password');
                }}
              >
                <VisibilityIcon
                  style={{
                    position: 'relative',
                    top: '20px',
                    right: '25px',
                    //   fontSize: window.innerWidth <= 1340 ? '25px' : '30px',
                    fontSize: '25px',
                    color: '#AFAFAF',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShowPassword('text');
                }}
              >
                <VisibilityOffIcon
                  style={{
                    position: 'relative',
                    top: '20px',
                    right: '25px',
                    //   fontSize: window.innerWidth <= 1340 ? '25px' : '30px',
                    fontSize: '25px',
                    color: '#AFAFAF',
                  }}
                />
              </div>
            </>
          )}
        </div>
        <PasswordBtn>Forgot Password?</PasswordBtn>
        <LoginBtn onClick={handleLogin}>
          login
        </LoginBtn>
      </InputBox>

      <Box>
        <Etc>Don’t have an account?</Etc>
        <SignUpBtn
          onClick={() => {
            router.push('/');
          }}
        >
          Sign up
        </SignUpBtn>
      </Box>
    </div>
  );
}
