'use client';
import Chart from 'react-apexcharts';

interface SemiCircleGaugeProps {
  gauge: number;
}

function SemiCircleGauge({ gauge }: SemiCircleGaugeProps) {
  const series = [gauge];

  const options = {
    // chart: {
    //   type: 'radialBar',
    //   offsetY: -20,
    //   sparkline: {
    //     enabled: true,
    //   },
    // },
    colors: ['#7977BC'],
    plotOptions: {
      radialBar: {
        startAngle: -90, // 시작 지점
        endAngle: 90, // 끝 지점
        hollow: {
          margin: 0,
          size: '10%',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          // position: 'front',
        },
        track: {
          background: '#fff', // 게이지바 바탕색
          strokeWidth: '75%', // 게이지바 바탕 두께
          margin: 30, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            color: '#999', // 그림자
            blur: 4,
            opacity: 1,
          },
        },
        dataLabels: {
          name: {
            offsetY: 0,
            show: false,
            color: '#888',
            fontSize: '12px',
          },
          value: {
            offsetY: -5,
            fontSize: '17px',
            color: '#8180C2',
            fontWeight: 'bold',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#61D2E8'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    // stroke: {
    //   lineCap: 'round', // 끝에 둥글게
    // },
    labels: ['단어 유사도'],
  };

  return <Chart options={options} series={series} type='radialBar' offsetY={-20} width={130} height={200} />;
}

export default SemiCircleGauge;
