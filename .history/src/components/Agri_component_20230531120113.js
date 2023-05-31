import { useState } from "react";
import { Card, Grid, Text, Title, Col, Divider, Subtitle } from "@tremor/react";

export default function Agricomponent() {
  const [showLegumes, setShowLegumes] = useState(false);
  const [showTuberCrops, setShowTuberCrops] = useState(false);

  const handleLegumesClick = () => {
    setShowLegumes(!showLegumes);
  };

  const handleTuberCropsClick = () => {
    setShowTuberCrops(!showTuberCrops);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-3">
        <Card>
          <Title>Overview</Title>
          <Text>
            We are able to provide an agricultural context from the data that
            has been collected. We will base these suggestions to more
            favourable crops that are prevalent in the agricultural sector.
          </Text>
          <Divider />
          <Title>Crop Recommendations</Title>
          <Text>
            We have come up with a list of the crops and the various conditions
            that they thrive in relation to the weather conditions that are
            recorded by the sensors. These are the variety of crops that are
            prevalent in the Kenyan agricultural sector. They have been divided
            into three main categories, Cereals, Legumes and Root and Tuber
            Crops.
          </Text>
        </Card>
      </div>
      <div className="col-span-1 sm:col-span-2">
        <Card>
          <Title className="cursor-pointer" onClick={handleLegumesClick}>
            Legumes
          </Title>
          {showLegumes && (
            <>
              <Subtitle>Beans</Subtitle>
              <Text>
                Here are some conditions that are favourable for the growth of
                beans...
              </Text>
              <Subtitle>Greengrams</Subtitle>
              <Text>
                Here are some conditions that are favourable for the growth of
                greengrams...
              </Text>
              <Subtitle>Peas</Subtitle>
              <Text>
                Here are some conditions that are favourable for the growth of
                peas...
              </Text>
            </>
          )}
        </Card>
      </div>
      <div className="col-span-1 sm:col-span-2">
        <Card>
          <Title className="cursor-pointer" onClick={handleTuberCropsClick}>
            Tuber crops
          </Title>
          {showTuberCrops && (
            <>
              <Subtitle>Irish potatoes</Subtitle>
              <Text>
                Here are some conditions that are favourable for the growth of
                Irish potatoes...
              </Text>
              <Subtitle>Sweet potatoes</Subtitle>
              <Text>
                Here are some conditions that are favourable for the growth of
                sweet potatoes...
              </Text>
              <Subtitle>Peas</Subtitle>
              <Text>
                Here are some conditions that are favourable for the growth of
                peas...
              </Text>
            </>
          )}
        </Card>
      </div>
      <div className="col-span-1 lg:col-span-3">
        <Card>
          <Title>Cereals</Title>
          <Subtitle>Maize</Subtitle>
          <Text>
            Here are some conditions that are favourable for the growth of
            maize...
          </Text>
          <Subtitle>Wheat</Subtitle>
          <Text>
            Here are some conditions that are favourable for the growth of
            wheat...
          </Text>
          <Subtitle>Rice</Subtitle>
          <Text>
            Here are some conditions that are favourable for the growth of
            rice...
          </Text>
          <Divider />
          <Text>
            There are other factors that are influenced by weather conditions,
            specifically temperature and humidity. Such as the prevalence of
            pests in Kenya:
          </Text>
          <Title>Pests</Title>
          <Subtitle>Maize Weevil (Sitophilus zeamais)</Subtitle>
          <Text>
            Here are some conditions favourable for the prevalence of maize
            weevil...
          </Text>
          <Subtitle>Bean Aphid (Aphis fabae)</Subtitle>
          <Text>
            Here are some conditions favourable for the prevalence of bean
            aphid...
          </Text>
          <Subtitle>Tomato Leafminer (Tuta absoluta)</Subtitle>
          <Text>
            Here are some conditions favourable for the prevalence of tomato
            leafminer...
          </Text>
          <Subtitle>Coffee Berry Borer (Hypothenemus hampei)</Subtitle>
          <Text>
            Here are some conditions favourable for the prevalence of coffee
            berry borer...
          </Text>
          <Subtitle>Cabbage White Butterfly (Pieris brassicae)</Subtitle>
          <Text>
            Here are some conditions favourable for the prevalence of cabbage
            white butterfly...
          </Text>
          <Subtitle>Mango Fruit Fly (Bactorocera dorsalis)</Subtitle>
          <Text>
            Here are some conditions favourable for the prevalence of mango
            fruit fly...
          </Text>
        </Card>
      </div>
    </div>
  );
}

