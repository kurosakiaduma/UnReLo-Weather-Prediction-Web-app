import {
  Card,
  Text,
  Title,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
  Subtitle,
} from "@tremor/react";
import { StatusOfflineIcon } from "@heroicons/react/outline";

export default function  SensorInfo() {


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
  return (
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
  );
}
