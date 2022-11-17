import React from 'react'
import { ApexOptions } from "apexcharts";

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import { Container, Content } from "./style";

type Props = {}

const Temperature = (props: Props) => {
  function generateData(count: number, yrange: { min: any; max: any; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  const numbers = [3999, 3669, 3599, 3533, 3514]

  const options: ApexOptions = {
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
      text: "Temperature",
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
    }
    ,
    xaxis: {
      position: "top"
    }
    ,
    labels: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
      "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00",
      "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    dataLabels: {
      enabled: true,
      formatter: function (value: number) {
        return value + "%";
      },
      style: {
        fontSize: '10px',
        colors: ["#808080"]
      },
    },
    colors: ["#387AE7"],
  }

  const series =
    [{
      name: `R$ ${numbers[0].toLocaleString()}`,
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: `R$ ${numbers[1].toLocaleString()}`,
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: `R$ ${numbers[2].toLocaleString()}`,
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: `R$ ${numbers[3].toLocaleString()}`,
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: `R$ ${numbers[4].toLocaleString()}`,
      data: generateData(18, {
        min: 0,
        max: 90 
      })
    }
  ]

  return (
    <Container>
      <Content>
        <Chart options={options} series={series} type="heatmap" width={1000} height={250} />
      </Content>
    </Container >
  )
}

export default Temperature

