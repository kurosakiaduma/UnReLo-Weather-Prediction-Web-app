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
import { data } from "autoprefixer";

export default function WeatherDataGrid(props) {
  const [selectedView, setSelectedView] = useState("1");
  const tempratureData = [
    {
      date: "June 2",
      Temperature: 26.56,
      Humidity: 73,
    },
    {
      date: "June 3",
      Temperature: 20.55,
      Humidity: 66.5,
    },
    {
      date: "June 4",
      Temperature: 26.45,
      Humidity: 67.5,
    },
    {
      date: "June 5",
      Temperature: 20.46,
      Humidity: 72,
    },
    {
      date: "June 6",
      Temperature: 26.41,
      Humidity: 73,
    },
  ];
  const tempHumidity_Data = [
    {

    },
  ]
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
        const temperatureData = Object.keys(fetchedData).map((key) => ({
          avg_temp: fetchData[key].avg_temp,
          avg_humidity: fetchedData[key].avg_humidity,
        }));

        const df = {
          avg_temp: temperatureData.map((data) => data.avg_temp),
          avg_humidity: temperatureData.map((data) => data.avg_humidity),
        };

        console.log(df);

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
                  <Text> Temp: 24.72°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text> 74%</Text>
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
                  <Text> Temp: 25.60°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>66.95%</Text>
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
                  <Text> Temp: 26.45°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>65.68%</Text>
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
                  <Text> Temp: 26.56°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>65.68%</Text>
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
                  <Text> Temp: 26.55°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>65.68%</Text>
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
                  <Text> Temp: 26.37°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>66.23%</Text>
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
                  <Text> Max: 26.56°C</Text>
                  <Text> Min: 20.50°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text> 73%</Text>
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
                  <Text>Max: 26.56°C</Text>
                  <Text>Min: 20.55°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>66.5%</Text>
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
                  <Text> Max: 26.45°C</Text>
                  <Text> Min: 20.54°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>67.5%</Text>
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
                  <Text> Max: 26.37°C</Text>
                  <Text> Min: 20.46°C</Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text>72%</Text>
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
                  <Text> Max: 26.41°C </Text>
                  <Text> Min: 20°C </Text>
                </div>
              </Flex>
              <Flex className="mt-4">
                <Text>Humidity</Text>
                <div>
                  <Text> 73%</Text>
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
              {df.length > 0 && (
                <AreaChart
                  className="h-72 mt-4"
                  data={df}
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
