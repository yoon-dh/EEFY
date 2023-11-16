'use client';
import { useRecoilValue } from 'recoil';
import { Theme } from '@/recoil/Theme';
import * as C from './Common.style';

function BackgroundComponent() {
  const theme = useRecoilValue(Theme);

  return (
    <C.BackgroundContainer $theme={theme}>
      {/* <C.Wave1 />
      <C.Wave2 />
      <C.Wave3 /> */}
      <C.Ball1 $theme={theme} />
      <C.Ball2 $theme={theme} />
    </C.BackgroundContainer>
  );
}

export default BackgroundComponent;
