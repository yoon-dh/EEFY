import styled from 'styled-components';

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 1340px) {
    font-size: 20px;
  }
`;
export const Tab = styled.div`
width: 160px;
height: 50px;
font-size: 25px;
@media(max-width:1340px){
  width: 120px;
height: 40px;
font-size: 20px;
}
`
export const SearchInput = styled.input`
&::placeholder {
    font-weight: bold;
  }
`
export const CreateBtn = styled.div`
background: #999BD5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
margin: auto 0px auto 0px;
padding: 10px 10px;
text-align: center;
font-size: 20px;
color: white;
width: 116px;
`
