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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Agricomponent from "../Components/Agri_component";
import SensorInfo from "../Components/Sensorsinfo";
import axios from "axios";

export default function WeatherDataGrid(props) {
  const [selectedView, setSelectedView] = useState("1");
  const [tempratureData, setTempratureData] = useState([]);
  const [tempHumidity_Data, settempHumidity_Data] = useState([]);
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
        const temperatureTableData = Object.entries(fetchedData).map(
          ([values]) => ({
            Temperature: parseFloat(values.avg_temp).toFixed(2),
            Humidity: parseFloat(values.avg_humidity).toFixed(2) * 100,
          })
        );

        // //Monthly data
        // const response2 = await axios.post("http://127.0.0.1:5000/predict", {
        //   start_date: "2023/03/02",
        //   end_date: "2023/06/02",
        //   sensor: 1,
        // });

        // const fetchedData2 = response2.data;

        // const tempHumidityTableData = Object.entries(fetchedData2).map(
        //   ([date, values]) => ({
        //     date: date,
        //     Temperature: parseFloat(values.avg_temp).toFixed(2),
        //     Humidity: parseFloat(values.avg_humidity).toFixed(2) * 100,
        //   })
        // );

        // //Monthly data
        // const response3 = await axios.post("http://127.0.0.1:5000/predict", {
        //   start_date: "2022/06/02",
        //   end_date: "2023/06/02",
        //   sensor: 1,
        // });

        // const fetchedData3 = response3.data;

        // const tempHumidityTableData2 = Object.entries(fetchedData3).map(
        //   ([date, values]) => ({
        //     date: date,
        //     Temperature: parseFloat(values.avg_temp).toFixed(2),
        //     Humidity: parseFloat(values.avg_humidity).toFixed(2) * 100,
        //   })
        // );

        setTempratureData(temperatureTableData);
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
                    <Text style={{ fontSize: "20px" }}>
                      {" "}
                      Temp:{tempratureData[7]?.Temperature}°C
                    </Text>
                    <Text style={{ fontSize: "20px" }}>
                      {" "}
                      Humidity:{tempratureData[7]?.Humidity} %
                    </Text>
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
                  <Text> Temp: {tempratureData[8]?.Temperature}°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>{tempratureData[8]?.Humidity}%</Text>
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
                  <Text> Temp: {tempratureData[9]?.Temperature}°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>{tempratureData[9]?.Humidity}%</Text>
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
                  <Text> Temp: {tempratureData[10]?.Temperature}°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>{tempratureData[10]?.Humidity}%</Text>
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
                  <Text> Temp: {tempratureData[11]?.Temperature}°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>{tempratureData[11]?.Humidity}%</Text>
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
                  <Text> Temp: {tempratureData[12]?.Temperature}°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>{tempratureData[12]?.Humidity}%</Text>
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
                  <Text> Temp: {tempratureData[13]?.Temperature}°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>{tempratureData[13]?.Humidity}%</Text>
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
                  <Text>Sunday</Text>
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
                  <Text>Tuesday</Text>
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
