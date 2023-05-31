import { useState, useEffect } from "react";
import {
  Card,
  Grid,
  Tab,
  TabList,
  Text,
  Title,
  Flex,
  AreaChart,
} from "@tremor/react";
import {
  faCloudSun,
  faSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Agricomponent from "../Components/Agri_component";
import SensorInfo from "../Components/Sensorsinfo";
import axios from "axios";

export default function WeatherDataGrid(props) {
  const [selectedView, setSelectedView] = useState("1");
  const [tempratureData, setTempratureData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 5 Day forecast endpoint.
        const response = await axios.post("http://127.0.0.1:5000/predict", {
          start_date: "2023/05/30",
          end_date: "2023/06/02",
        });

        const fetchedData = response.data; // Assuming the fetched data is in the correct format

        //Convert fetched data to the desired format
        const temperatureTableData = Object.entries(fetchedData).map(
          ([date, values]) => ({
            date: date,
            Temperature: parseFloat(values.avg_temp),
            Humidity: parseFloat(values.avg_humidity) * 100,
          })
        );

        //Monthly data
        const response2 = await axios.post("http://127.0.0.1:5000/predict", {
          start_date: "2023/05/02",
          end_date: "2023/06/02",
        });

        const monthlyData = response2.data;

        const temp_humidityData = Object.entries(monthlyData).map(
          ([date, values]) => ({
            date: date,
            Temperature: parseFloat(values.avg_temp),
            Humidity: parseFloat(values.avg_humidity) * 100,
          })
        );

        setTempratureData(temperatureTableData);
        setMonthlyData(temp_humidityData);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const { title } = props;

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

  const chardata2 = [
    {
      date: "2023-05-04",
      Humidity: 55,
    },
    {
      date: "2023-06-04",
      Humidity: 60,
    },
    {
      date: "2023-07-04",
      Humidity: 75,
    },
    {
      date: "2023-08-04",
      Humidity: 62,
    },
    {
      date: "2023-09-04",
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
        <Tab value="3" text="Agricultural Recommendations" />
      </TabList>

      {/* Sensor statistics */}
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
                decorationColor="orange"
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

          {/* Hourly forecast */}
          <Grid numColsLg={6} className="mt-6 gap-6">
            {/* First Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text>15:00</Text>
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
                  <Text> Temp: 30°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>75%</Text>
                </div>
              </Flex>
            </Card>

            {/* 2nd Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 16:00 </Text>
                  <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
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
                  <Text> Temp: 26°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>67%</Text>
                </div>
              </Flex>
            </Card>

            {/* Third Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 17:00 </Text>
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
                  <Text> Temp: 24 °C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text> 62% </Text>
                </div>
              </Flex>
            </Card>

            {/* Fourth Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 18:00 </Text>
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
                  <Text> Temp: 24°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>60%</Text>
                </div>
              </Flex>
            </Card>

            {/* Fifth Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 19:00 </Text>
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
                  <Text> Temp: 23°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>57%</Text>
                </div>
              </Flex>
            </Card>

            {/* Sixth Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text>20:00</Text>
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
                  <Text> Temp : 22°C </Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>60%</Text>
                </div>
              </Flex>
            </Card>
          </Grid>

          {/* Daily forecast  */}
          <Grid numColsLg={6} className="mt-6 gap-6">
            {/* First Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="red">
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
            <Card className="max-w-lg" decoration="top" decorationColor="red">
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
            <Card className="max-w-lg" decoration="top" decorationColor="red">
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
            <Card className="max-w-lg" decoration="top" decorationColor="red">
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
            <Card className="max-w-lg" decoration="top" decorationColor="red">
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
            <Card className="max-w-lg" decoration="top" decorationColor="red">
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

          {/* 5 Day Temperature chart */}
          <div className="mt-6">
            <Card>
              <Title>5 Day temperature forecast</Title>
              <Text>
                Five day prediction of weather patterns based on collected data
              </Text>
              {tempratureData.length > 0 && (
                <AreaChart
                  className="h-72 mt-4"
                  data={tempratureData}
                  index="date"
                  categories={["Temperature", "Humidity"]}
                  color={["indigo", "cyan"]}
                />
              )}
            </Card>
          </div>

          {/* 5 Day Humidity chart
          <div className="mt-6">
            <Card>
              <Title>5 Day humidity forecast</Title>
              <Text>
                Five day prediction of weather patterns based on collected data
              </Text>
              {humidityData.length > 0 && (
                <AreaChart
                  className="h-72 mt-4"
                  data={humidityData}
                  index="date"
                  categories={["Humidity"]}
                  colors={["orange"]}
                />
              )}
            </Card>
          </div> */}

          {/* Previous month's charts */}
          <div className="mt-6">
            <Card>
              <Title>Last Month's statistics</Title>
              <Text>Visualization of data from the past month</Text>
              <AreaChart
                className="h-72 mt-4"
                data={chardata}
                index="date"
                categories={["Temperature", "Humidity"]}
                color={["red", "orange"]}
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
      ) : // Sensor statistics
      selectedView === "2" ? (
        <SensorInfo />
      ) : (
        selectedView === "3" && (
          // Agriculture component
          <>
            <Agricomponent />
          </>
        )
      )}
    </main>
  );
}
