import styled from 'styled-components';
import MultipleProblem from './MultipleProblem';

function ProblemBox() {
  return (
    <Box className='h-full w-full' style={{ overflow: 'auto' }}>
      <MultipleProblem />
    </Box>
  );
}

export default ProblemBox;

const Box = styled.div``;
