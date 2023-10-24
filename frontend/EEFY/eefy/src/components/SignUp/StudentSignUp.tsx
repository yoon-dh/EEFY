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

export default function StudentSignUp(){
  const [showPassword, setShowPassword] = useState('password')
  return(
    <>
    <TeacherSignUpBoxTitle 
    style={{color:'black'}}
    >SignUp</TeacherSignUpBoxTitle>
      <TextField 
      id="standard-basic" 
      label="UserName" 
      variant="standard"
      style={{
          margin:'10px 0px 0px 0px'
      }}
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '7A7979', 
          borderBottom: '2px solid #7A7979',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#7A7979',
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
          InputProps={{ 
              style: {
              width: '350px',
            //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
              fontSize:'15px',
              color: '#7A7979', 
              borderBottom: '2px solid #7A7979',
              },
          }}
          InputLabelProps={{ 
              style: { 
                  color: '#7A7979',
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
                      color:'#7A7979',
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
                      color:'#7A7979',
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
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '#7A7979', 
          borderBottom: '2px solid #7A7979',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#7A7979',
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
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '#7A7979', 
          borderBottom: '2px solid #7A7979',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#7A7979',
          } 
      }}
      />
      <TextField 
      id="standard-basic" 
      label="E-mail" 
      variant="standard"
      style={{
          margin:'10px 0px 0px 0px',
      }}
      InputProps={{ 
          style: {
          width: '350px',
        //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
          fontSize:'15px',
          color: '#7A7979', 
          borderBottom: '2px solid #7A7979',
          },
      }}
      InputLabelProps={{ 
          style: { 
              color: '#7A7979',
          } 
      }}
      />
      <CodeCheckBox>
          <TextField 
          id="standard-basic" 
          label="Confirm E-mail" 
          variant="standard"
          style={{
              margin:'10px 0px 0px 0px'
          }}
          InputProps={{ 
              style: {
              width: '350px',
            //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
              fontSize:'15px',
              color: '#7A7979', 
              borderBottom: '2px solid #7A7979',
              },
          }}
          InputLabelProps={{ 
              style: { 
                  color: '#7A7979',
              } 
          }}
          />
          <CodeCheckBtn style={{backgroundColor:'#3B3B84', color:'#FFFFFF'}}>Auth</CodeCheckBtn>
      </CodeCheckBox>
      <SignUpBtn style={{backgroundColor:'#3B3B84', color:'#FFFFFF'}}>Submit</SignUpBtn>
    </>
  )
}