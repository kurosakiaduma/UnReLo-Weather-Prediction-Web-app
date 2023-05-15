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
import {
  faCloudSun,
  faSun,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InformationCircleIcon } from "@heroicons/react/outline";

export default function WeatherDataGrid() {
  const [selectedView, setSelectedView] = useState("1");

  const chardata = [
    {
      date: "Jan 23",
      Temperature: 24,
      Humidity: 55,
    },
    {
      date: "Feb 23",
      Temperature: 26,
      Humidity: 45,
    },
    {
      date: "Mar 23",
      Temperature: 17,
      Humidity: 56,
    },
    {
      date: "Apr 23",
      Temperature: 18,
      Humidity: 67,
    },
    {
      date: "May 23",
      Temperature: 29,
      Humidity: 55,
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
      <Text>
        This is an overview of the statistical data collected from the sensor.
      </Text>

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
          <Grid numColsLg={6} className="mt-6 gap-6">
            {/* First Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Today</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faCloudSun}
                      size="2xl"
                      style={{
                        "--fa-primary-opacity": "0.9",
                        "--fa-secondary-color": "#ff8000",
                        "--fa-secondary-opacity ": "0.7",
                      }}
                    />
                  </div>
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
                  <Text>Tomorrow</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faSun}
                      size="2xl"
                      style={{
                        "--fa-primary-opacity": "0.9",
                        "--fa-secondary-color": "#ff8000",
                        "--fa-secondary-opacity ": "0.7",
                      }}
                    />
                  </div>
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
                  <Text>Saturday</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faCloudSunRain}
                      size="2xl"
                      style={{
                        "--fa-primary-opacity": "0.9",
                        "--fa-secondary-color": "#ff8000",
                        "--fa-secondary-opacity ": "0.7",
                      }}
                    />
                  </div>
                </div>
                <BadgeDelta deltaType="moderateDecrease">10.1%</BadgeDelta>
              </Flex>
              <Flex className="mt-4">
                <Text className="truncate">68% (1,072)</Text>
                <Text> 2,000 </Text>
              </Flex>
              <ProgressBar percentageValue={53.6} className="mt-2" />
            </Card>

            {/* Fourth Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Saturday</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faCloudSunRain}
                      size="2xl"
                      style={{
                        "--fa-primary-opacity": "0.9",
                        "--fa-secondary-color": "#ff8000",
                        "--fa-secondary-opacity ": "0.7",
                      }}
                    />
                  </div>
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
              <Text>
                Five day prediction of weather patterns based on collected data
              </Text>
              <AreaChart
                className="h-72 mt-4"
                data={chardata1}
                index="date"
                categories={["Temperature", "Humidity"]}
                colors={["red", "blue"]}
              />
            </Card>
          </div>
          {/* Temperature, Humidity and soilMoisture line charts*/}
          <div className="mt-6">
            <Card>
              <Title>This year's statistics</Title>
              <Text>Visualization of data collected throughout the year</Text>
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
