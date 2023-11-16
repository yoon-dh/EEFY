import styled from "styled-components";

export const Container = styled.div`
width:100%;
height: 100%;
z-index: 50;
`
export const Wrappe = styled.div`
flex: 9;
/* border: 1px solid black; */
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Box = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 80%;
align-items: center;
`
export const TitleBox = styled.div`
flex: 1;
/* border: 1px solid black; */
width: 80%;
display: flex;
flex-direction: column;
`
export const Title = styled.div`
  flex: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
`
export const TitleInput = styled.input`
  flex: 8;
  border-radius: 6px;
  padding: 0px 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`
export const ContentBox = styled.div`
  flex: 3;
  /* border: 1px solid black; */
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const content = styled.div`
  letter-spacing: 2px;
  text-transform: uppercase;
`
export const ContentInput = styled.textarea`
  width: 100%;
  height: 70%;
  border-radius: 8px;
  padding: 8px 8px;
  /* margin: 0px 0px 0px 50px; */
  resize: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`
export const BtnBox = styled.div`
  flex: 1;
  /* border: 1px solid black; */
  width: 80%;
  height: 100%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`
export const CancelBtn = styled.div`
  flex: 4.5;
  width: 100%;
  height: 90%;
  padding: 8px 12px;
  border: 0;
  text-decoration: none;
  border-radius: 12px;
  /* background-color: rgba(255, 255, 255, 0.1); */
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  /* color: rgba(0, 0, 0, 0.8); */
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
export const CreateBtn = styled.div`
  flex: 4.5;
  width: 100%;
  height: 90%;
  padding: 8px 12px;
  border: 0;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`