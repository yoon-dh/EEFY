import styled from 'styled-components';

export const CreateBtn = styled.button`
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const CreateInput = styled.input`
  width: 100%;
  height: 30%;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(80, 80, 80, 0.3);
  backdrop-filter: blur(100px);
  border-radius: 8px;
  padding: 0px 8px;

  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;
