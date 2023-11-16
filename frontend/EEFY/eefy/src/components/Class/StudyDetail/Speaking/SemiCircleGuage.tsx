'use client';
import { color } from 'framer-motion';
// import ApexCharts from 'react-apexcharts';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SemiCircleGaugeProps {
  gauge: number;
}

function SemiCircleGauge({ gauge }: SemiCircleGaugeProps) {
  return (
    <ApexCharts
      options={{
        chart: {
          type: 'radialBar',
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
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
              margin: 20, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                color: '#999', // 그림자
                blur: 2,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
        labels: ['단어 유사도'],
      }}
      series={[gauge]}
      type='radialBar'
      width={120}
      height={150}
    />
  );
}

export default SemiCircleGauge;
