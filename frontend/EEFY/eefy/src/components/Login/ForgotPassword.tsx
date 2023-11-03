import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components"
import { useRecoilState  } from 'recoil';
import { ForgetPasswordBox } from '@/recoil/Auth';
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrappe = styled.div`
  width: 400px;
  height: 230px;
  border: 5px solid #AC98FF;
  border-radius: 15px;
  background-color: white;
  z-index: 5;
  text-align: center;
`
const Title = styled.div`
  font-size: 20px;
  color: #AC98FF;
  font-weight: bold;
  margin: 30px 0px 0px 0px;
`
const EmailInput = styled.input`
font-size: 16px;
width: 60%;
height: 40px;
padding: 0px 20px;
outline: none;
border: 2px solid #AC98FF;
border-radius: 5px;
margin: 18px 0px 0px 0px;
`
const Btn = styled.div`
  width: 60%;
  color: white;
  padding: 8px 20px;
  background-color: #AC98FF;
  border-radius: 5px;
  margin: 20px auto 0px auto;
  cursor: pointer;
`
function ForgotPassword(){
  const [email, setEmail] = useState('')
  const [check, setCheck] = useRecoilState(ForgetPasswordBox)
  const wrappeRef = useRef<HTMLDivElement | null>(null)

  // 클릭 이벤트 리스너를 추가
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrappeRef.current && !wrappeRef.current.contains(event.target as Node)) {
        // Wrappe 밖을 클릭한 경우
        setCheck(false);
      }
    }

    // 페이지 전체에 클릭 이벤트 리스너를 추가
    document.addEventListener('click', handleClickOutside);
    return () => {
      // 컴포넌트가 unmount될 때 리스너를 제거
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return(
    <Container>
      <Wrappe ref={wrappeRef}>
        <Title>비밀번호 찾기</Title>
        <EmailInput 
        id='email' 
        value={email} 
        placeholder="이메일을 입력하시오"
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <Btn
        onClick={()=>{
          console.log(email)
          setCheck(false)
        }}
        >비밀번호 찾기</Btn>
      </Wrappe>
    </Container>
  )
}

export default ForgotPassword