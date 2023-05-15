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
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
} from "@tremor/react";
import {
  faCloudSun,
  faSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faWind,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InformationCircleIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";

export default function SensorThree(props) {
  const [selectedView, setSelectedView] = useState("1");

  const { title } = props;

  const data1 = [
    {
      name: "LoRa WAN 1",
      Position: "Nairobi",
      status: "active",
    },
    {
      name: "LoRa WAN 2",
      Position: "Nakuru",
      status: "active",
    },
    {
      name: "LoRa WAN 3",
      Position: "Kiambu",
      status: "active",
    },
    {
      name: "LoRa WAN 4",
      Position: "Malindi",
      status: "active",
    },
  ];
  const chardata = [
    {
      date: "Jan 23",
      Temperature: 26,
      Humidity: 65,
    },
    {
      date: "Feb 23",
      Temperature: 32,
      Humidity: 50,
    },
    {
      date: "Mar 23",
      Temperature: 17,
      Humidity: 87,
    },
    {
      date: "Apr 23",
      Temperature: 23,
      Humidity: 82,
    },
    {
      date: "May 23",
      Temperature: 29,
      Humidity: 64,
    },
  ];

  const chardata1 = [
    {
      date: "2023-05-04",
      Temperature: 22,
      Humidity: 76,
    },
    {
      date: "2023-06-04",
      Temperature: 31,
      Humidity: 60,
    },
    {
      date: "2023-07-04",
      Temperature: 20,
      Humidity: 85,
    },
    {
      date: "2023-08-04",
      Temperature: 33,
      Humidity: 70,
    },
    {
      date: "2023-09-04",
      Temperature: 29,
      Humidity: 55,
    },
  ];

  const chardata2 = [
    {
      date: "May 23",
      Temperature: 23,
      Humidity: 54,
    },
    {
      date: "June 23",
      Temperature: 32,
      Humidity: 68,
    },
    {
      date: "July 23",
      Temperature: 20,
      Humidity: 72,
    },
    {
      date: "Aug 23",
      Temperature: 19,
      Humidity: 62,
    },
    {
      date: "Sep 23",
      Temperature: 28,
      Humidity: 56,
    },
  ]

  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title> Mombasa Sensor Statistics</Title>
      <Text>
        This is an overview of the statistical data collected from the sensor.
      </Text>

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Sensor Details" />
      </TabList>

      {selectedView === "1" ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "top",
              alignItems: "center",
              height: "20vh",
              width: "30",
            }}
          >
            <Grid
              numColsLg={1}
              style={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                className="max-w-lg"
                decoration="top"
                decorationColor="blue"
                style={{ margin: "0 auto" }}
              >
                <Flex>
                  <div>
                    <Text>Current Weather</Text>
                    <div style={{ paddingTop: "10px" }}>
                      <FontAwesomeIcon
                        icon={faCloudSunRain}
                        size="2xl"
                        style={{
                          "--fa-primary-opacity": "0.9",
                          "--fa-secondary-color": "#ff8000",
                          "--fa-secondary-opacity": "0.7",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <Text style={{ fontSize: "20px" }}>Temperature: 26 °C</Text>
                    <Text style={{ fontSize: "20px" }}>Humidity: 75 %</Text>
                  </div>
                </Flex>
              </Card>
            </Grid>
          </div>
          <Grid numColsLg={6} className="mt-6 gap-6">
            {/* First Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Today</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faCloudShowersHeavy}
                      size="2xl"
                      style={{
                        "--fa-primary-opacity": "0.9",
                        "--fa-secondary-color": "#ff8000",
                        "--fa-secondary-opacity ": "0.7",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Text> Max: 29°C</Text>
                  <Text> Min: 22°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>60%</Text>
                </div>
              </Flex>
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
                <div>
                  <Text>Max: 25°C</Text>
                  <Text>Min: 17°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>80%</Text>
                </div>
              </Flex>
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
                <div>
                  <Text> Max: 22 °C</Text>
                  <Text> Min: 16°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>70%</Text>
                </div>
              </Flex>
            </Card>

            {/* Fourth Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Sunday</Text>
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
                <div>
                  <Text> Max: 30.5 °C</Text>
                  <Text> Min: 25 °C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>70%</Text>
                </div>
              </Flex>
            </Card>

            {/* Fifth Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Monday</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faWind}
                      size="2xl"
                      style={{
                        "--fa-primary-opacity": "0.9",
                        "--fa-secondary-color": "#ff8000",
                        "--fa-secondary-opacity ": "0.7",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Text>Max: 31°C</Text>
                  <Text>Min: 26°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>77%</Text>
                </div>
              </Flex>
            </Card>

            {/* Sixth Card */}
            <Card className="max-w-lg">
              <Flex alignItems="start">
                <div>
                  <Text>Tuesday</Text>
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
                <div>
                  <Text> Max: 32°C </Text>
                  <Text> Min: 26°C </Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>80%</Text>
                </div>
              </Flex>
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
              <Title>This year's sensor statistics</Title>
              <Text>
                Visualization of data collected throughout the year for the
                sensor
              </Text>
              <AreaChart
                className="h-72 mt-4"
                data={chardata}
                index="date"
                categories={["Temperature", "Humidity"]}
                colors={["red", "blue"]}
              />
            </Card>
          </div>
          {/* Predictions */}
          <div className="mt-6">
            <Card>
              <Title>Projected Statistics</Title>
              <Text>Projected weather patterns for sensor area</Text>
              <AreaChart
                className="h-72 mt-4"
                data={chardata2}
                index="date"
                categories={["Temperature", "Humidity"]}
                colors={["red", "blue"]}
              />
            </Card>
          </div>
        </>
      ) : (
        <Card className="mt-6">
          <Title>List of Sensors</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Sensor Name</TableHeaderCell>
                <TableHeaderCell>Position</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data1.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <Text>{item.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.Position}</Text>
                  </TableCell>
                  <TableCell>
                    <Badge color="emerald" icon={StatusOnlineIcon}>
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </main>
  );
}
