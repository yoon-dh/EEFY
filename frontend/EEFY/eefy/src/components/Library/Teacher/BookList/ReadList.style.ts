import styled from "styled-components";

export const Card = styled.div`
width: 100%;
height: 15%;
border-radius: 12px;
margin: 20px 0px 20px 0px;
display: flex;
cursor: pointer;
`
export const TitleBox = styled.div`
flex: 7;
`
export const Title = styled.div`
font-size: 22px;
font-weight: bold;
position: relative;
top:32%;
left: 10%;
`
export const ContentBox = styled.div`
flex: 3;
display: flex;
@media(max-width:1340px){
  margin: 0px 20px 0px 0px;
}
`
export const Content = styled.div`
flex:6;
margin: auto 0px auto 0px;
font-size: 22px;
font-weight: bold;
color: #D9D9D9;
`
export const Num = styled.div`
flex: 4;
margin: auto 0px auto 0px;
font-size: 22px;
font-weight: bold;
`
export const PaginationBox = styled.div`
width: 100%;
margin: 0px 0px 30px 0px;
display: flex;
justify-content: center;
align-items: center;
`
