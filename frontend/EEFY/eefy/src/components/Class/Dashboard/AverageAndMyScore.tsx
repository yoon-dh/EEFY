'use client';

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { useRecoilValue } from 'recoil';
import { Theme } from '@/recoil/Theme';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function AverageAndMyScore() {
  const theme = useRecoilValue(Theme);

  let fontColor;
  if (theme === 'winter') {
    fontColor = '#536880';
  } else {
    fontColor = '#A6ADBA';
  }

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: fontColor,
          font: {
            size: 12,
          },
        },
      },
      title: {
        // display: true,
        // text: 'Chart.js Line Chart',
      },
    },
    // scales: {
    //   y: [
    //     {
    //       ticks: {
    //         color: fontColor,
    //       },
    //     },
    //   ],
    //   x: [
    //     {
    //       ticks: {
    //         color: fontColor,
    //       },
    //     },
    //   ],
    // },
  };

  const labels = ['토익20제[1]', '토익20제[2]', '토익20제[3]', 'TEPS대비[1]', 'TEPS대비[2]', 'TEPS대비[3]', 'TEPS대비[1]'];

  const data = {
    labels,
    datasets: [
      {
        label: 'My Score',
        data: labels.map(() => faker.datatype.number({ min: 65, max: 90 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Average',
        data: labels.map(() => faker.datatype.number({ min: 65, max: 90 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} height='240px' width='600px' />;
}

export default AverageAndMyScore;
