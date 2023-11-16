import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { ForgetPasswordBox } from '@/recoil/Auth';
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrappe = styled.div`
  width: 400px;
  height: 230px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.06);
  z-index: 5;
  text-align: center;
  backdrop-filter: blur(12px);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Title = styled.div`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  margin: 30px 0px 0px 0px;
`;
const EmailInput = styled.input`
  font-size: 16px;
  width: 60%;
  height: 40px;
  padding: 0px 20px;
  outline: none;

  border-radius: 8px;
  margin: 18px 0px 0px 0px;
  backdrop-filter: blur(45px);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(80, 80, 80, 0.3);
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;
const Btn = styled.div`
  width: 60%;

  padding: 8px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 20px auto 0px auto;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(35px);
  color: rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
`;
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [check, setCheck] = useRecoilState(ForgetPasswordBox);
  const wrappeRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <Container>
      <Wrappe ref={wrappeRef}>
        <Title>Find Password</Title>
        <EmailInput
          id='email'
          value={email}
          placeholder='Insert E-mail'
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <Btn
          onClick={() => {
            console.log(email);
            setCheck(false);
          }}
        >
          Find
        </Btn>
      </Wrappe>
    </Container>
  );
}

export default ForgotPassword;
