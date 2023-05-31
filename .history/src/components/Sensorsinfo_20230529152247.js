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

export default function sensorInfo() {
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
