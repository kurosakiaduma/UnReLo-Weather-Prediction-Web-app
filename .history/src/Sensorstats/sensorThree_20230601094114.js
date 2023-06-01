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
  faTemperatureLow,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Agricomponent from "../Components/Agri_component";
import SensorInfo from "../Components/Sensorsinfo";
import axios from "axios";

export default function WeatherDataGrid(props) {
  const [selectedView, setSelectedView] = useState("1");
  const tempratureData = [
    {
      date: "June 2",
      Temperature: 17.62,
      Humidity: 83,
    },
    {
      date: "June 3",
      Temperature: 23.56,
      Humidity: 66.5,
    },
    {
      date: "June 4",
      Temperature: 17.23,
      Humidity: 78.7,
    },
    {
      date: "June 5",
      Temperature: 23.42,
      Humidity: 72,
    },
    {
      date: "June 6",
      Temperature: 17.46,
      Humidity: 85,
    },
  ];
  const tempHumidity_Data = [
    {
      date: "May 2",
      Temperature: 18.11,
      Humidity: 74,
    },
    {
      date: "May 9",
      Temperature: 17.8,
      Humidity: 85,
    },
    {
      date: "May 16",
      Temperature: 17.97,
      Humidity: 86.5,
    },
    {
      date: "May 25",
      Temperature: 17.74,
      Humidity: 88.05,
    },
    {
      date: "June 2 ",
      Temperature: 22.1,
      Humidity: 83,
    },
  ];
  const [tempHumidity_TableData2, settempHumidity_TableData2] = useState([]);

  // Nakuru sensor data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 5 Day forecast endpoint.
        const response = await axios.post("http://127.0.0.1:5000/predict", {
          start_date: "2023/06/02",
          end_date: "2023/06/03",
          sensor_id: 1,
        });

        const fetchedData = response.data; // Assuming the fetched data is in the correct format

        //Convert fetched data to the desired format
        const temperatureTableData = Object.keys(fetchedData).map((key) => ({
          number: key,
          Temperature: fetchedData[key].avg_temp.toFixed(2),
          Humidity: (fetchedData[key].avg_humidity * 100).toFixed(2),
        }));

        // setTempratureData(temperatureTableData);
        // settempHumidity_Data(tempHumidityTableData);
        // settempHumidity_TableData2(tempHumidityTableData2);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const { title } = props;

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
                        icon={faCloudSun}
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
                    <Text style={{ fontSize: "20px" }}> Temp: 19.60°C</Text>
                    <Text style={{ fontSize: "20px" }}> Humidity:72%</Text>
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
                  <Text>09:00</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faTemperatureLow}
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
                  <Text> Temp: 21.00°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text> 65.5%</Text>
                </div>
              </Flex>
            </Card>

            {/* 2nd Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 10:00 </Text>
                  <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
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
                  <Text> Temp: 22.24°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>60.92%</Text>
                </div>
              </Flex>
            </Card>

            {/* Third Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 11:00 </Text>
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
                  <Text> Temp: 22.38°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>59.87%</Text>
                </div>
              </Flex>
            </Card>

            {/* Fourth Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 12:00 </Text>
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
                  <Text> Temp: 22.38°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>59.87%</Text>
                </div>
              </Flex>
            </Card>

            {/* Fifth Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text> 13:00 </Text>
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
                  <Text> Temp: 22.21°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>59.87%</Text>
                </div>
              </Flex>
            </Card>

            {/* Sixth Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="blue">
              <Flex alignItems="start">
                <div>
                  <Text>14:00</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faTemperatureLow}
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
                  <Text> Temp: 21.18°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>61.68%</Text>
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
                  <Text> Max: 22.38°C</Text>
                  <Text> Min: 12.80°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text> 79.04%</Text>
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
                  <Text>Max: 22.38°C</Text>
                  <Text>Min: 12.73°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>75%</Text>
                </div>
              </Flex>
            </Card>

            {/* Third Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="red">
              <Flex alignItems="start">
                <div>
                  <Text>Sunday</Text>
                  <div style={{ paddingTop: "10px" }}>
                    <FontAwesomeIcon
                      icon={faTemperatureLow}
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
                  <Text> Max: 21.78°C</Text>
                  <Text> Min: 13.40°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>68%</Text>
                </div>
              </Flex>
            </Card>

            {/* Fourth Card */}
            <Card className="max-w-lg" decoration="top" decorationColor="red">
              <Flex alignItems="start">
                <div>
                  <Text>Monday</Text>
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
                  <Text> Max: 21.69°C</Text>
                  <Text> Min: 13.41°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>73.55%</Text>
                </div>
              </Flex>
            </Card>

            {/* Fifth Card */}
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
                  <Text>Max: 26.41°C</Text>
                  <Text>Min: 20.48°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>72.7%</Text>
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
                  <Text> Max: 21.74°C </Text>
                  <Text> Min: 12.66°C </Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text> 76.5%</Text>
                </div>
              </Flex>
            </Card>
          </Grid>

          {/* 5 Day Temperature and Humidity chart */}
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
                  colors={["indigo", "cyan"]}
                />
              )}
            </Card>
          </div>

          {/* Previous months charts */}
          <div className="mt-6">
            <Card>
              <Title>Previous months statistics</Title>
              <Text>Visualization of data from the past 3 months</Text>
              {tempHumidity_Data.length > 0 && (
                <AreaChart
                  className="h-72 mt-4"
                  data={tempHumidity_Data}
                  index="date"
                  categories={["Temperature", "Humidity"]}
                  colors={["red", "orange"]}
                />
              )}
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
