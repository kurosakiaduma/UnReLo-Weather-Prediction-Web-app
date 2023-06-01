import { useState } from "react";
import { Card, Grid, Text, Title, Col, Divider, Subtitle } from "@tremor/react";

export default function Agricomponent() {
  const [showLegumes, setShowLegumes] = useState(false);
  const [showTuberCrops, setShowTuberCrops] = useState(false);
  const [showCereals, setShowCereals] = useState(false);
  const [showPests, setShowPests] = useState(false);

  const handleLegumesClick = () => {
    setShowLegumes(!showLegumes);
  };

  const handleTuberCropsClick = () => {
    setShowTuberCrops(!showTuberCrops);
  };

  const handleCerealsClick = () => {
    setShowCereals(!showCereals);
  }
  const handlePestsClick = () => {
    setShowPests(!showPests);
  }

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
  Here are some conditions that are favourable for the growth of maize:<br />
  <br />
  Temperature:<br />
  &nbsp;&nbsp;Germination: Maize seeds germinate best when the soil temperature is between 50°F (10°C) and 86°F (30°C), with an optimal range of 68°F (20°C) to 86°F (30°C).<br />
  &nbsp;&nbsp;Vegetative Growth: Maize plants thrive in temperatures ranging from 77°F (25°C) to 95°F (35°C) during the vegetative growth stage. However, they can tolerate slightly higher temperatures for short periods.<br />
  &nbsp;&nbsp;Reproductive Stage: During the reproductive stage (tasseling and pollination), temperatures between 77°F (25°C) and 86°F (30°C) are considered ideal for proper pollination and grain development. Extreme temperatures above 95°F (35°C) can negatively affect pollination and grain formation.<br />
  <br />
  Humidity:<br />
  &nbsp;&nbsp;Maize prefers moderate humidity levels throughout its growth stages. Relative humidity levels between 50% and 70% are generally favorable for maize growth.<br />
  &nbsp;&nbsp;During the reproductive stage, it is important to have lower humidity levels (around 50%-60%) to minimize the risk of fungal diseases and ensure better pollen dispersal and pollination.
</Text>
<Subtitle>Wheat</Subtitle>
<Title>Cereals</Title>

<Subtitle>Wheat</Subtitle>
<Text>
  Here are some conditions that are favourable for the growth of wheat:<br />
  <br />
  Temperature:<br />
  &nbsp;&nbsp;Germination: Wheat seeds germinate best when the soil temperature is between 50°F (10°C) and 86°F (30°C), with an optimal range of 68°F (20°C) to 77°F (25°C).<br />
  &nbsp;&nbsp;Vegetative Growth: Wheat plants thrive in temperatures ranging from 60°F (15°C) to 75°F (24°C) during the vegetative growth stage. They can tolerate temperatures up to 85°F (29°C) but prolonged exposure to high temperatures can affect growth and yield.<br />
  &nbsp;&nbsp;Reproductive Stage: During the reproductive stage, temperatures between 68°F (20°C) and 77°F (25°C) are considered optimal for wheat. Extreme temperatures above 86°F (30°C) during this stage can lead to reduced grain quality and yield.<br />
  <br />
  Humidity:<br />
  &nbsp;&nbsp;Wheat prefers moderate humidity levels. While specific humidity requirements vary based on the wheat variety and stage of growth, relative humidity levels between 50% and 70% are generally suitable for wheat cultivation.<br />
  &nbsp;&nbsp;During the flowering stage, it is crucial to have lower humidity levels (around 40%-50%) to minimize the risk of fungal diseases and ensure proper pollination and grain development.
</Text>

<Subtitle>Rice</Subtitle>
<Title>Cereals</Title>
<Subtitle>Rice</Subtitle>
<Text>
  Here are some conditions that are favourable for the growth of rice:<br />
  <br />
  Temperature:<br />
  &nbsp;&nbsp;Germination: Rice seeds germinate best when the soil temperature is between 68°F (20°C) and 104°F (40°C), with an optimal range of 77°F (25°C) to 95°F (35°C).<br />
  &nbsp;&nbsp;Vegetative Growth: Rice plants thrive in temperatures ranging from 77°F (25°C) to 95°F (35°C) during the vegetative growth stage. They can tolerate temperatures up to 104°F (40°C), but prolonged exposure to high temperatures can affect growth and yield.<br />
  &nbsp;&nbsp;Reproductive Stage: During the reproductive stage, temperatures between 77°F (25°C) and 95°F (35°C) are considered ideal for rice. High temperatures above 95°F (35°C) during this stage can lead to reduced grain quality and yield.<br />
  <br />
  Humidity:<br />
  &nbsp;&nbsp;Rice requires high humidity levels throughout its growth stages. Relative humidity levels between 70% and 90% are generally favorable for rice cultivation.<br />
  &nbsp;&nbsp;During the flowering stage, maintaining high humidity levels is essential for proper pollination and grain development.
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
Here are some conditions favorable for the prevalence of maize weevil:<br />
<br />
Environmental Conditions:<br />
&nbsp;&nbsp;Temperature: Maize weevils thrive in temperatures between 77°F (25°C) and 86°F (30°C). Higher temperatures accelerate their development and reproduction.<br />
&nbsp;&nbsp;Humidity: Maize weevils prefer high humidity levels, typically between 70% and 90%. Moist conditions promote their survival and reproduction.<br />
&nbsp;&nbsp;Storage Facilities: Maize weevils are commonly found in improperly stored grains. Infestations occur in environments with poor ventilation and inadequate pest control measures.<br />
<br />
Prevention and Control Measures:<br />
&nbsp;&nbsp;Proper Storage: Ensure grains are stored in well-sealed containers or bags to prevent access to the weevils. Implement regular cleaning and inspection of storage areas.<br />
&nbsp;&nbsp;Temperature Control: Maintain grain storage at temperatures below 77°F (25°C) to discourage weevil activity and reproduction.<br />
&nbsp;&nbsp;Moisture Control: Keep grains dry and minimize moisture levels to discourage weevils. Use moisture-absorbing agents or desiccants if necessary.<br />
&nbsp;&nbsp;Monitoring: Regularly monitor stored grains for signs of infestation, including the presence of adult weevils, larvae, or damaged grains.<br />
&nbsp;&nbsp;Pest Control Methods: Consider employing appropriate pest control methods, such as fumigation or the use of insecticides, following safety guidelines and regulations.<br />
</Text>
<Image src="https://www.bing.com/ck/a?!&&p=dcf81859c68dbde8JmltdHM9MTY4NTU3NzYwMCZpZ3VpZD0yMWNlZGI3Mi04YzY1LTYxZDQtMGMyNC1jODcwOGQ2NDYwNDUmaW5zaWQ9NTQzNw&ptn=3&hsh=3&fclid=21cedb72-8c65-61d4-0c24-c8708d646045&u=a1L2ltYWdlcy9zZWFyY2g_cT1tYWl6ZSB3ZWV2aWwgcGljdHVyZSZGT1JNPUlRRlJCQSZpZD01NEEyODM0QjFBRUI5MjlCQ0JFODc5Qjg4NkJFNDE1OTIxNzk2NzFC&ntb=1" alt="Maize Weevil" />
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

