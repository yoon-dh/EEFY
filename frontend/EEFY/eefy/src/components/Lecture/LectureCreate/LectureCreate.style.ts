import styled from "styled-components";

export const Container = styled.div`
width:100%;
height: 100%;
border: 1px solid black;
`
export const Wrappe = styled.div`
flex: 9;
border: 1px solid black;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const Box = styled.div`
border: 1px solid black;
width: 500px;
height: 300px;
align-items: center;
`
export const TitleBox = styled.div`
flex: 1;
border: 1px solid black;
width: 80%;
display: flex;
`
export const Title = styled.div`
position: relative;
top: 30%;
`
export const TitleInput = styled.input`
height: 80%;
border: 1px solid black;
margin: auto 0px auto 20px;
`
export const ContentBox = styled.div`
flex: 3;
border: 1px solid black;
width: 80%;
`
export const content = styled.div`
position: relative;
top: 15%;
`
export const ContentInput = styled.textarea`
border: 1px solid black;
width: 80%;
height: 70%;
margin: 0px 0px 0px 50px;
resize: none;
`
export const FileBox = styled.div`
flex: 1;
border: 1px solid black;
width: 80%;
display: flex;
`
export const File = styled.label`
  display: inline-block;
  padding: 8px 10px;
  width: 60px;
  height: 30px;
  font-size: 13px;
  background-color: #e6e5e7;
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  display: flex; /* Set display to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; 
`
export const FileInput = styled.input`
display: none; 
`
export const FileName = styled.div`
margin: 0px 0px 0px 20px;
font-size: 16px;
`
export const BtnBox = styled.div`
flex: 1.2;
border: 1px solid black;
width: 100%;
height: 100%;
display: flex;
font-size: 14px;
`
export const CancelBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60%;
width: 70px;
background-color: #614AD3;
color: white;
margin: 0px 20px 0px auto;
border-radius: px;
`
export const CreateBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #614AD3;
color: white;
height: 60%;
width: 70px;
margin: 0px 20px 0px 0px;
border-radius: 4px;
`