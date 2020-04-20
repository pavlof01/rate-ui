import React, { FC, useEffect } from 'react'
import ChartJS from 'chart.js'

const Chart: FC = () => {
  const chartRef = React.createRef<any>()

  const randomNumber = () => Number((Math.random() * 100).toFixed(0))

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d')
    // tslint:disable-next-line: no-unused-expression
    new ChartJS(myChartRef, {
      type: 'line',
      data: {
        labels: ['24.02', '25.02', '26.02', '27.02', '28.02', '29.02'],
        datasets: [
          {
            label: 'Закрытие вакансий',
            backgroundColor: '#F06E52',
            borderColor: '#F06E52',
            pointRadius: 5,
            pointHoverRadius: 10,
            fill: false,
            data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
          },
          {
            label: 'Итого',
            backgroundColor: '#7953E4',
            borderColor: '#7953E4',
            pointRadius: 5,
            pointHoverRadius: 10,
            fill: false,
            data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Оказано сервисов',
        },
        tooltips: {
          mode: 'point',
          // intersect: false,
        },
        // hover: {
        //   mode: 'point',
        // },
        scales: {
          // x: {
          //   display: true,
          //   scaleLabel: {
          //     display: true,
          //     labelString: 'Month',
          //   },
          // },
          // y: {
          //   display: true,
          //   scaleLabel: {
          //     display: true,
          //     labelString: 'Value',
          //   },
          // },
        },
      },
    })
  }, [])
  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  )
}

export default Chart
