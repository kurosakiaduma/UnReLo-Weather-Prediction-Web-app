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
  StatusOfflineIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";

export default function WeatherDataGrid(props) {
  const [selectedView, setSelectedView] = useState("1");

  const { title } = props;

  const data1 = [
    {
      name: "LoRa WAN 1",
      sensor_location : "Nairobi",
      status: "inactive",
    },
    {
      name: "LoRa WAN 2",
      sensor_location: "Nakuru",
      status: "inactive",
    },
    {
      name: "LoRa WAN 3",
      sensor_location: "Kiambu",
      status: "active",
    },
    {
      name: "LoRa WAN 4",
      sensor_location: "Malindi",
      sensor_location: "inactive",
    },
  ];
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
      <Title>{title}Statistics</Title>
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
                    <Text style={{ fontSize: "20px" }}>Humidity: 70 %</Text>
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
                  <Text> Max: 28°C</Text>
                  <Text> Min: 19°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>20%</Text>
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
                  <Text>Max: 29°C</Text>
                  <Text>Min: 24°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>60%</Text>
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
                  <Text> Max: 28 °C</Text>
                  <Text> Min: 21°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>55%</Text>
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
                  <Text> Max: 31 °C</Text>
                  <Text> Min: 24 °C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>55%</Text>
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
                  <Text>Max: 25°C</Text>
                  <Text>Min: 23°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>67%</Text>
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
                  <Text> Max: 24°C </Text>
                  <Text> Min: 23°C </Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>76%</Text>
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
          <Title>List of Avialable Sensors</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Sensor Name</TableHeaderCell>
                <TableHeaderCell>Sensor Location</TableHeaderCell>
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
                    <Text>{item.sensor_location}</Text>
                  </TableCell>
                  <TableCell>
                    <Badge color="red" icon={StatusOfflineIcon}>
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
