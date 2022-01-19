import { green, indigo } from "@mui/material/colors";
import Chart from "react-apexcharts";

export const GanttProjects = ({data}) => {

    const data2 = {
        series: [
          {
              data: data.map(x => {
                  return {
                      "x":x.name,
                      "y": [
                          x.startDate,
                          x.endDate
                      ],
                      fillColor:indigo[500]
                  }
              }).sort((a,b) => a.y[0] - b.y[1])
          }
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: 'rangeBar',
            toolbar:{
                show:false
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '40%',
            }
          },
          xaxis: {
            type: 'datetime',
            
          },
          yaxis: {
              labels: {
                  style: {
                      fontSize:'1rem'
                  }
              }
          }

        }
    }
    return (
        <div>
            <Chart 
                type="rangeBar" height="350" options={data2.chartOptions} series={data2.series}
            />
        </div>
    )
}