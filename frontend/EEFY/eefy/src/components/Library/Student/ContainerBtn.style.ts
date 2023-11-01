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