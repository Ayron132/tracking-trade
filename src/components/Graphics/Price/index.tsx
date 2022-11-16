import React, { useState } from 'react'

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { Container, Content } from "./style";

type Props = {}

const Price = (props: Props) => {

  const [state, setState] = useState(
    {

      series: [{
        name: 'VAR',
        type: 'column',
        data: [41, 41, 33, 40, 33, 33, 41, 0, 41, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'RRP',
        type: 'line',
        data: [5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999]
      },
      {
        name: 'Mode',
        type: 'line',
        data: [4199, 5999, 4599, 5999, 5999, 5999, 4377, 0, 4599, 3533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Max',
        type: 'line',
        data: [3533, 3515, 3999, 3599, 3999, 3999, 3533, 0, 3512, 3533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Min',
        type: 'line',
        data: [3533, 3500, 3533, 3599, 3513, 3430, 3533, 0, 3512, 3533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }],
      type: "line",
      options: {
        chart: {
          height: "100%",
          zoom: {
            enabled: false
          },
          toolbar: {
            show: true

          }
        },
        title: {
          text: "Price",
          offsetX: 40,
          align: "left",
          style: {
            fontSize: "16px",
            color: "#4f565c "
          }
        },
        subtitle: {
          text: "Spot price",
          offsetY: 20,
          offsetX: 40,
          align: "left",
          style: {
            fontSize: "12px",
            color: "#4f565c"
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (legendName: number, opts: any) {
            if (opts.seriesIndex === 0) {
              return legendName > 1 ? legendName + '%' : "";
            }
            if (opts.seriesIndex !== 1) {
              return legendName.toLocaleString();
            }
          },
          offsetY: -8,
          style: {
            fontSize: '10px',
            colors: ["#808080"]
          },
          background: {
            enabled: false,
          }
        },
        stroke: {
          width: [0, 2, 2, 2, 2],
          curve: 'straight',
          dashArray: [0, 5, 0, 0, 0]
        },
        markers: {
          size: 4,
          hover: {
            size: 5
          }
        },
        legend: {
          position: 'left',
          fontSize: '10px',
          width: "100%",
          offsetY: 20,
          markers: {
            width: 10,
            height: 10
          }
        },
        grid: {
          borderColor: "#f7f7f7"
        },
        colors: ["#335898", "#75788d", "#7fa8e9", "#2a73e8", "#f1b44b"],
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },

        labels: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
          "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00",
          "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
        xaxis: {
          tickPlacement: 'on',
        },
        yaxis: [
          {
            min: 0,
            max: 100,

            labels: {
              show: false
            }
          },
          {
            min: 0,
            max: 6000,

            labels: {
              show: false
            }
          },
          {
            min: 0,
            max: 6000,
            opposite: true,
            labels: {
              show: false
            }
          },
          {
            min: 0,
            max: 6000,
            opposite: true,
            labels: {
              show: false
            }
          },
          {
            min: 0,
            max: 6000,
            opposite: true,
            labels: {
              show: false
            }
          }
        ],
      },
    }
  )

  return (
    <Container>
      <Content>
        <Chart options={state.options} series={state.series} width={1000} height={250} />
      </Content>
    </Container >
  )
}

export default Price;

