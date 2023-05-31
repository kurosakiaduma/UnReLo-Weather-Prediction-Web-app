import { useState } from "react";
import {
  Card,
  Grid,
  Tab,
  TabList,
  Text,
  Title,
  BadgeDelta,
  Col,
  Flex,
  Metric,
  AreaChart,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Divider,
  Badge,
  Subtitle,
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
      name: "UNReLo-devices 1",
      sensor_location: "Nairobi",
      status: "in-active",
      sensor_information:
        "This is LoRaWAN sensor that is used to measure temperature, soil moisture and the relative humidity of an area.`<a> </a>`",
      deviceEUI: "d65b4692bcbbd8f9",
    },
    {
      name: "UNReLo-devices 2",
      sensor_location: "Nakuru",
      status: "in-active",
      sensor_information:
        "This is LoRaWAN sensor that is used to record temperature, soil moisture and the relative humidity of the sensor's area.",
      deviceEUI: "d65b4692bcbbd8f8",
    },
    {
      name: "UNReLo-devices 3",
      sensor_location: "Kiambu",
      status: "in-active",
      sensor_information:
        "This is LoRaWAN sensor that is used to measure temperature, soil moisture and the relative humidity of the sensor's area.",
      deviceEUI: "d65b4692bcbbd8f10",
    },
    {
      name: "UNReLo-devices 4",
      sensor_location: "Malindi",
      status: "in-active",
      sensor_information:
        "This is LoRaWAN sensor that is used to measure temperature, soil moisture and the relative humidity of the sensor's area.",
      deviceEUI: "d65b4692bcbbd8f11",
    },
    {
      name: "UNReLo-devices 5",
      sensor_location: "Machakos",
      status: "in-active",
      sensor_information:
        "This is LoRaWAN sensor that is used to measure temperature, soil moisture and the relative humidity of the sensor's area.",
      deviceEUI: "d65b4692bcbbd8f11",
    },
    {
      name: "UNReLo-devices 6",
      sensor_location: "Lamu",
      status: "in-active",
      sensor_information:
        "This is LoRaWAN sensor that is used to measure temperature, soil moisture and the relative humidity of an area.",
      deviceEUI: "d65b4692bcbbd8f12",
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

          {/* 5 Day forecast charts*/}

          {/* Temperature chart */}
          <div className="mt-6">
            <Card>
              <Title>5 Day temperature forecast</Title>
              <Text>
                Five day prediction of weather patterns based on collected data
              </Text>
              <AreaChart
                className="h-72 mt-4"
                data={chardata1}
                index="date"
                categories={["Temperature"]}
                colors={["red"]}
              />
            </Card>
          </div>

          {/* Humidity chart */}
          <div className="mt-6">
            <Card>
              <Title>5 Day humidity forecast</Title>
              <Text>
                Five day prediction of weather patterns based on collected data
              </Text>
              <AreaChart
                className="h-72 mt-4"
                data={chardata2}
                index="date"
                categories={["Humidity"]}
                colors={["orange"]}
              />
            </Card>
          </div>

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
        <Card className="mt-6">
          <Title>List of Available Sensors</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Sensor Name</TableHeaderCell>
                <TableHeaderCell>Sensor Location</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Sensor Information</TableHeaderCell>
                <TableHeaderCell>deviceEUI</TableHeaderCell>
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
                  <TableCell>
                    <Text>{item.sensor_information}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.deviceEUI}</Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      ) : (
        selectedView === "3" && (
          // Agriculture component
          <>
            <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
              <Col numColSpan={1} numColSpanLg={3}>
                <Card>
                  <Title>Overview</Title>
                  <Text>
                    {" "}
                    We are able to provide an agricultural context from the data
                    that has been collected. We will base these suggestions to
                    more favourable crops that are prevalent in the agricultural
                    sector.
                  </Text>
                  <Divider />
                  <Title> Crop Recommendations </Title>
                  <Text>
                    {" "}
                    We have come up with a list of the crops and the various
                    conditions that they thrive in relation to the weather
                    conditions that are recorded by the sensors. These are the
                    variety of crops that are prevalent in the Kenyan
                    agricultural sector. They have been divided into three main
                    categories, Cereals, Legumes and Root and Tuber Crops.
                  </Text>
                  <Divider />
                </Card>
              </Col>
              <Col numColSpan={1} numColSpanLg={3}>
                <Card>
                  {/* Legumes section */}
                  <Title> Legumes </Title>
                  <Subtitle> Beans </Subtitle>
                  <Text>
                    Here are some of the conditions that are favourable for the
                    growth of maize which include:- <br /> - Temperature that
                    ranges between 18°C and 27°C. <br /> - Moderate humidity
                    levels typically ranging from 50% to 70%. <br /> - Beans
                    require well-drained soil with consistent moisture.
                  </Text>
                  <Subtitle> Greengrams </Subtitle>
                  <Text>
                    Here are some of the conditions that are favourable for the
                    growth of greengrams which include:- <br /> - Temperature
                    that ranges between 25°C and 35°C. <br /> - Relatively
                    higher humidity levels typically ranging from 50% to 80%.{" "}
                    <br />- Greengrams prefer well drained soils. <br />
                  </Text>
                  <Subtitle>Peas</Subtitle>
                  <Text>
                    Here are some of the conditions that are favourable for the
                    growth of maize include the following:- <br /> - Temperature
                    that ranges between 25°C and 35°C. <br /> - Moderately high
                    humidity levels ranging from 50% to 70% <br /> - Peas
                    require well-drained soils with adequate moisture,
                    relatively drought-tolerant.
                  </Text>
                  <Divider />

                  {/* Root and Tuber crops section */}
                  <Title> Tuber crops </Title>
                  <Subtitle> Irish potatoes </Subtitle>
                  <Text>
                    Here are some of the conditions that are favourable for the
                    growth of potatoes which include:- <br /> - Temperature that
                    ranges between 15°C and 20°C. <br /> - Moderate humidity
                    levels typically ranging from 60% to 70%. <br /> - Irish
                    potatoes require well-drained soil with consistent moisture.
                  </Text>
                  <Subtitle> Sweet potatoes </Subtitle>
                  <Text>
                    Here are some of the conditions that are favourable for the
                    growth of sweet potatoes which include:- <br /> -
                    Temperature that ranges between 21°C and 29°C. <br /> -
                    Relatively higher humidity levels typically ranging from 60%
                    to 80%. <br />- Sweet potatoes prefer well drained soils.{" "}
                    <br />
                  </Text>
                  <Subtitle>Peas</Subtitle>
                  <Text>
                    Here are some of the conditions that are favourable for the
                    growth of maize include the following:- <br /> - Temperature
                    that ranges between 25°C and 35°C. <br /> - Moderately high
                    humidity levels ranging from 50% to 70% <br /> - Peas
                    require well-drained soils with adequate moisture,
                    relatively drought-tolerant.
                  </Text>
                </Card>
              </Col>
              <Card>
                {/* Cereals section */}
                <Title> Cereals </Title>
                <Subtitle>Maize</Subtitle>
                <Text>
                  Here are some of the conditions that are favourable for the
                  growth of maize which include:- <br /> - Temperature that
                  ranges between 20°C and 30°C. <br /> - Moderate humidity
                  levels typically ranging from 50% to 80%.
                </Text>
                <Subtitle>Wheat</Subtitle>
                <Text>
                  Here are some of the conditions that are favourable for the
                  growth of wheat which include:- <br /> - Temperature that
                  ranges between 15°C and 24°C. <br /> - Relatively higher
                  humidity levels typically ranging from 60% to 70%.
                </Text>
                <Subtitle>Rice</Subtitle>
                <Text>
                  Here are some of the conditions that are favourable for the
                  growth of maize include the following:- <br /> - Temperature
                  that ranges between 20°C and 35°C. <br /> - Rice being a
                  semi-aquatic crop and requires high humidity levels ranging
                  from 70% to 90%. <br /> - Rice requires continuously flooded
                  saturated soil conditions to grow properly.
                </Text>
                <Divider />
                <Text>
                  There are other factors that are influenced by weather
                  conditions, specifically temperature and humidity. Such as the
                  prevalence of pests in Kenya:- <br />
                </Text>
                {/* Pests */}
                <Title> Pests </Title>
                <Card>
                  <Subtitle>
                    {" "}
                    Maize Weevil (Sitophilus zeamais) <br />{" "}
                  </Subtitle>
                  <Text>
                    - Temperature: Optimal temperature range of 25-30°C <br />
                    - Humidity: High humidity levels above 70%. <br />
                  </Text>
                  <Subtitle>
                    {" "}
                    Bean Aphid (Aphis fabae) <br />{" "}
                  </Subtitle>
                  <Text>
                    - Temperature: Moderate temps around 20-25°C <br />-
                    Humidity: Moderate to High humidity levels above 55%. <br />
                  </Text>
                  <Subtitle>
                    {" "}
                    Tomato Leafminer (Tuta absoluta) <br />{" "}
                  </Subtitle>
                  <Text>
                    - Temperature: Warm temperatures between 20-23°C <br />
                    - Humidity: Moderate humidity levels around 60 - 65%. <br />
                  </Text>
                  <Subtitle>
                    {" "}
                    Coffee Berry Borer (Hypothenemus hampei) <br />{" "}
                  </Subtitle>
                  <Text>
                    - Temperature: Optimal temperature range of 25-30°C <br />
                    - Humidity: High humidity levels around 70-80%. <br />
                  </Text>
                  <Subtitle>
                    {" "}
                    Cabbage White Butterfly (Pieris brassicae) <br />{" "}
                  </Subtitle>
                  <Text>
                    - Temperature: Cool to Moderate temperature range of 10-25°C{" "}
                    <br />
                    - Humidity: Moderate humidity levels of about 50%. <br />
                  </Text>
                  <Subtitle>
                    {" "}
                    Mango Fruit Fly (Bactorocera dorsalis)
                    <br />{" "}
                  </Subtitle>
                  <Text>
                    - Temperature: Warm temperature range of 25-35°C <br />
                    - Humidity: High humidity levels above 60%. <br />
                  </Text>
                </Card>
              </Card>
            </Grid>
          </>
        )
      )}
    </main>
  );
}
