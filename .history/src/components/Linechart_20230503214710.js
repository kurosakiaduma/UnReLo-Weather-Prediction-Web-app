import { Card, Title, LineChart } from "@tremor/react";
import { Line } from "react-chartjs-2";

const chartdata = [
    {
        month: "Jan",
        "Temperature" : 26, 
    },
    {
        month: "Feb",
        "Temperature" : 24,
    }, 
    {
        month: "Mar",
        "Temperature" : 28,
    },
    {
        month: "Apr",
        "Temperature" : 20,
    }, 
    {
        month: "May",
        "Temperature" : 29,
    }
];

const dataFormatter = (number : number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;

export default LineChart = () => (
    <Card>
        <Title> Temperature statistics </Title>
        <LineChart
          className="mt-6"
          data={chartdata}
          index="month"
          categories={["Temperature"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        >
        </LineChart>
    </Card>
);
