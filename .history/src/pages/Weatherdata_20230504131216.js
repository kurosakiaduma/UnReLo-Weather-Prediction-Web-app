import { useState } from "react";
import {
  Card,
  Grid,
  Tab,
  TabList,
  Text,
  Title,
  BadgeDelta,
  Flex,
  ProgressBar,
  Metric,
  AreaChart,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";


export default function WeatherDataGrid() {

  const [selectedView, setSelectedView] = useState("1");

   const chardata = [
    {
      date: "Jan 22",
      Temperature: 24,
      Humidity: 55,
    },
    {
      date: "Feb 22",
      Temperature: 26,
      Humidity: 45,
    },
    {
      date: "Mar 22",
      Temperature: 17,
      Humidity: 56,
    },
    {
      date: "Apr 22",
      Temperature: 18,
      Humidity: 67,
    },
    {
      date: "May 22",
      Temperature: 22,
      Humidity: 77,
    },
    {
      date: "Jun 22",
      Temperature: 15,
      Humidity: 80,
    },
    {
      date: "Jul 22",
      Temperature: 14,
      Humidity: 50,
    },
    {
      date: "Aug 22",
      Temperature: 28,
      Humidity: 60,
    },
    {
      date: "Sep 22",
      Temperature: 31,
      Humidity: 65,
    },
    {
      date: "Oct 22",
      Temperature: 26,
      Humidity: 45,
    },
    {
      date: "Nov 22",
      Temperature: 26,
      Humidity: 70,
    },
    {
      date: "Dec 22",
      Temperature: 29,
      Humidity: 64,
    },
   ];

   const chardata1 = [
    {
      date: "2023-05-04",
      Temperature: 24,
      Humidity: 55,
    },
    {
      date: "2023-06-04",
      Temperature: 28,
      Humidity: 60,
    },
    {
      date: "2023-07-04",
      Temperature: 30,
      Humidity: 75,
    },
    {
      date: "2023-08-04",
      Temperature: 23,
      Humidity: 62,
    },
    {
      date: "2023-09-04",
      Temperature: 29,
      Humidity: 85,
    },
   ];

  return (

    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Sensor 1 Statistics</Title>
      <Text>This is an overview of the statistical data collected from the sensor.</Text>

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Detail" />
      </TabList>

      {selectedView === "1" ? (
        <>
          <Grid numColsLg={3} className="mt-6 gap-6">

            {/* First Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Sales</Text>
                  <Metric>$ 12,699</Metric>
                </div>
                <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
              </Flex>
              <Flex className="mt-4">
                <Text className="truncate">68% ($ 149,940)</Text>
                <Text> $ 220,500 </Text>
              </Flex>
              <ProgressBar percentageValue={15.9} className="mt-2" />
            </Card>

            {/* 2nd Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Profit</Text>
                  <Metric>$ 45,699</Metric>
                </div>
                <BadgeDelta deltaType="moderateIncrease">23.9%</BadgeDelta>
              </Flex>
              <Flex className="mt-4">
                <Text className="truncate">68% ($ 125,000)</Text>
                <Text> $ 220,500 </Text>
              </Flex>
              <ProgressBar percentageValue={36.5} className="mt-2" />
            </Card>

            {/* Third Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Customers</Text>
                  <Metric>1,072</Metric>
                </div>
                <BadgeDelta deltaType="moderateDecrease">10.1%</BadgeDelta>
              </Flex>
              <Flex className="mt-4">
                <Text className="truncate">68% (1,072)</Text>
                <Text> 2,000 </Text>
              </Flex>
              <ProgressBar percentageValue={53.6} className="mt-2" />
            </Card>
          </Grid>

          {/* 5 Day forecast charts*/}
          <div className="mt-6">
            <Card>
              <Title>5 Day forecast</Title>
              <AreaChart 
               className="h-72 mt-4"
               data={chardata1}
               index="date"
               categories={["Temperature", "Humidity" ]}
               colors={["red", "blue"]}
              />
            </Card>
          </div>
          {/* Temperature, Humidity and soilMoisture line charts*/}
          <div className="mt-6">
            <Card>
              <Title>This year's statistics</Title>
              <AreaChart 
                className="h-72 mt-4"
                data={chardata}
                index="date"
                categories={["Temperature", "Humidity"]}
                colors={["red", "blue"]}
              />
            </Card>
          </div>
        </>
      ) : (
        <Card className="mt-6">
          <div className="h-96" />
        </Card>
      )}
    </main>
  );
}
