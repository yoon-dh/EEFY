'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRecoilValue } from 'recoil';
import { Theme } from '@/recoil/Theme';

ChartJS.register(ArcElement, Tooltip, Legend);

function HomeworkProgress({ progress }: any) {
  const theme = useRecoilValue(Theme);

  let progressBorder;
  if (theme === 'winter') {
    progressBorder = 'rgba(0, 0, 0, 0.15)';
  } else {
    progressBorder = 'rgba(255,255,255,0.3)';
  }

  // 노랑 : #FDF584
  // green-light : rgb(107, 248, 189)
  // orangered-light : rgb(248, 147, 107)

  // FIXME: gradient로 변경?

  let progressColor;
  let progressBorderColor;

  if (progress < 50) {
    progressBorderColor = 'rgb(248, 147, 107)';
    progressColor = 'rgba(248, 147, 107, 0.7)';
  } else if (progress < 75) {
    progressBorderColor = '#FDF584';
    progressColor = '#fdf584b5';
  } else {
    progressBorderColor = 'rgb(107, 248, 189)';
    progressColor = 'rgba(107, 248, 189, 0.7)';
  }

  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [progress, 100 - progress],
        backgroundColor: [progressColor, 'rgba(255, 255, 255, 0)'],
        borderColor: [progressColor, progressBorder],
        borderWidth: 3.5,
      },
    ],
  };
  const options = {
    responsive: false,
    cutout: 50,
  };
  return <Doughnut data={data} options={options} style={{ height: '75px', position: 'absolute', top: '5%', left: '-20%' }} />;
}
export default HomeworkProgress;
