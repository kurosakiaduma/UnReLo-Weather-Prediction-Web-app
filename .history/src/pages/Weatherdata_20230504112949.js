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
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";


export default function WeatherDataGrid() {

  const [selectedView, setSelectedView] = useState("1");

  const performance = [
    {
        date: "2023-01-01",
        Temp: 25,
        Humidity: 14,
        soilMoisture : 15,
    },
    {
        date: "2023-02-01",
        Temp: 22,
        Humidity: 18,
        soilMoisture : 10,
    },
    {
        date: "2023-03-01",
        Temp: 28,
        Humidity: 14,
        soilMoisture : 19,
    },
    {
        date: "2023-04-01",
        Temp: 23,
        Humidity: 16,
        soilMoisture : 15,
    }, 
    {
        date: "2023-05-01",
        Temp: 19,
        Humidity: 19,
        soilMoisture: 16,
    },
    {
        date: "2023-06-01",
        Temp: 29,
        Humidity: 24,
        soilMoisture : 10,
    },
    {
        date: "2023-07-01",
        Temp: 27,
        Humidity: 14,
        soilMoisture : 16,
    },
    {
        date: "2023-08-01",
        Temp: 26,
        Humidity: 18,
        soilMoisture : 17,
    }, 
    {
        date: "2023-09-01",
        Temp: 22,
        Humidity: 24,
        soilMoisture : 20,
    }, 
    {
        date: "2023-10-01",
        Temp: 22.5,
        Humidity: 16.5,
        soilMoisture : 18,
    },
  ];

  {/* Basic formatters for the chart values*/}
  const dollarFormatter = (value) => 
  ` $ ${Intl.NumberFormat("us").format(value).toString()}`;

  const numberFormatter = (value) => 
  ` ${Intl.NumberFormat("us").format(value).toString()}`;

function ChartView () {
    const [selectedKpi, setSelectedKpi ] = useState(" Temperature ")
  }

  //map formatters by selectedKpi
  const formatters : {[key: string] : any} = {
    Temp: dollarFormatter,
    Humidity: dollarFormatter,
    soilMoisture: numberFormatter,
  };
   

  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

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

          {/* Temperature, Humidity and soilMoisture line charts*/}
          <div className="mt-6">
            <Card>
              <div className="md:flex justify-between">
                <div>
                  <Flex
                    justifyContent="start"
                    className="space-x-0.5"
                    alignItems="center"
                  >
                    <Title> This year statistics </Title>
                    <Icon
                      icon={InformationCircleIcon}
                      variant="simple"
                      tooltip="Shows month-over-month changes of different past weather data"
                    />
                  </Flex>
                  <Text> Monthly increase or decrease per domain </Text>
                </div>
                <div className="mt-6 md:mt-0">
                  <Toggle
                    color="zinc"
                    defaultValue={selectedKpi}
                    onValueChange={(value) => setSelectedKpi(value)}
                  >
                    <ToggleItem value="Temperature" text="Temperature" />
                    <ToggleItem value="Humidity" text="Humidity" />
                    <ToggleItem value="Soil Moisture" text="Soil moisture" />
                  </Toggle>
                </div>
              </div>
              <AreaChart
                data={performance}
                index="date"
                categories={[selectedKpi]}
                colors={["blue"]}
                showLegend={false}
                valueFormatter={formatters[selectedKpi]}
                yAxisWidth={56}
                className="h-96 mt-8"
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
