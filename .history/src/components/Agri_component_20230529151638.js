import { Card, Grid, Text, Title, Col, Divider, Subtitle } from "@tremor/react";

export default function Agricomponent() {
  return (
    <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
      <Col numColSpan={1} numColSpanLg={3}>
        <Card>
          <Title>Overview</Title>
          <Text>
            {" "}
            We are able to provide an agricultural context from the data that
            has been collected. We will base these suggestions to more
            favourable crops that are prevalent in the agricultural sector.
          </Text>
          <Divider />
          <Title> Crop Recommendations </Title>
          <Text>
            {" "}
            We have come up with a list of the crops and the various conditions
            that they thrive in relation to the weather conditions that are
            recorded by the sensors. These are the variety of crops that are
            prevalent in the Kenyan agricultural sector. They have been divided
            into three main categories, Cereals, Legumes and Root and Tuber
            Crops.
          </Text>
        </Card>
      </Col>
      <Col numColSpan={1} numColSpanLg={2}>
        <Card>
          {/* Legumes section */}
          <Title> Legumes </Title>
          <Subtitle> Beans </Subtitle>
          <Text>
            Here are some of the conditions that are favourable for the growth
            of maize which include:- <br /> - Temperature that ranges between
            18°C and 27°C. <br /> - Moderate humidity levels typically ranging
            from 50% to 70%. <br /> - Beans require well-drained soil with
            consistent moisture.
          </Text>
          <Subtitle> Greengrams </Subtitle>
          <Text>
            Here are some of the conditions that are favourable for the growth
            of greengrams which include:- <br /> - Temperature that ranges
            between 25°C and 35°C. <br /> - Relatively higher humidity levels
            typically ranging from 50% to 80%. <br />- Greengrams prefer well
            drained soils. <br />
          </Text>
          <Subtitle>Peas</Subtitle>
          <Text>
            Here are some of the conditions that are favourable for the growth
            of maize include the following:- <br /> - Temperature that ranges
            between 25°C and 35°C. <br /> - Moderately high humidity levels
            ranging from 50% to 70% <br /> - Peas require well-drained soils
            with adequate moisture, relatively drought-tolerant.
          </Text>
          <Divider />

          {/* Root and Tuber crops section */}
          <Title> Tuber crops </Title>
          <Subtitle> Irish potatoes </Subtitle>
          <Text>
            Here are some of the conditions that are favourable for the growth
            of potatoes which include:- <br /> - Temperature that ranges between
            15°C and 20°C. <br /> - Moderate humidity levels typically ranging
            from 60% to 70%. <br /> - Irish potatoes require well-drained soil
            with consistent moisture.
          </Text>
          <Subtitle>
            {" "}
            <br />
            Sweet potatoes{" "}
          </Subtitle>
          <Text>
            Here are some of the conditions that are favourable for the growth
            of sweet potatoes which include:- <br /> - Temperature that ranges
            between 21°C and 29°C. <br /> - Relatively higher humidity levels
            typically ranging from 60% to 80%. <br />- Sweet potatoes prefer
            well drained soils. <br />
          </Text>
          <Subtitle>
            <br />
            Peas
          </Subtitle>
          <Text>
            Here are some of the conditions that are favourable for the growth
            of maize include the following:- <br /> - Temperature that ranges
            between 25°C and 35°C. <br /> - Moderately high humidity levels
            ranging from 50% to 70% <br /> - Peas require well-drained soils
            with adequate moisture, relatively drought-tolerant.
          </Text>
        </Card>
      </Col>
      <Card>
        {/* Cereals section */}
        <Title> Cereals </Title>
        <Subtitle>Maize</Subtitle>
        <Text>
          Here are some of the conditions that are favourable for the growth of
          maize which include:- <br /> - Temperature that ranges between 20°C
          and 30°C. <br /> - Moderate humidity levels typically ranging from 50%
          to 80%.
        </Text>
        <Subtitle>Wheat</Subtitle>
        <Text>
          Here are some of the conditions that are favourable for the growth of
          wheat which include:- <br /> - Temperature that ranges between 15°C
          and 24°C. <br /> - Relatively higher humidity levels typically ranging
          from 60% to 70%.
        </Text>
        <Subtitle>Rice</Subtitle>
        <Text>
          Here are some of the conditions that are favourable for the growth of
          maize include the following:- <br /> - Temperature that ranges between
          20°C and 35°C. <br /> - Rice being a semi-aquatic crop and requires
          high humidity levels ranging from 70% to 90%. <br /> - Rice requires
          continuously flooded saturated soil conditions to grow properly.
        </Text>
        <Divider />
        <Text>
          There are other factors that are influenced by weather conditions,
          specifically temperature and humidity. Such as the prevalence of pests
          in Kenya:- <br />
        </Text>
        {/* Pests */}
        <Title> Pests </Title>
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
          - Temperature: Moderate temps around 20-25°C <br />- Humidity:
          Moderate to High humidity levels above 55%. <br />
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
          - Temperature: Cool to Moderate temperature range of 10-25°C <br />
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
    </Grid>
  );
}
