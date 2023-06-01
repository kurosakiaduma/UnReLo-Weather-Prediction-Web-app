import { useState } from "react";
import { Image } from "react-bootstrap";
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
Here are some conditions that are favorable for the growth of beans:<br />
<br />
Temperature:

Germination: Beans generally require soil temperatures between 60°F (15°C) and 85°F (30°C) for successful germination. However, some bean varieties may have specific temperature preferences, so it's advisable to refer to the recommended temperature range for the specific bean variety you are planting.
Vegetative Growth: Once germinated, beans thrive in temperatures ranging from 70°F (21°C) to 80°F (27°C) during the vegetative growth stage. These temperatures provide favorable conditions for leaf and stem development.
Flowering and Pod Formation: During the flowering and pod formation stage, beans prefer temperatures between 70°F (21°C) and 75°F (24°C). Consistent temperatures within this range promote optimal flower development and pollination.<br />
  <br />
Humidity:

Beans generally prefer moderate humidity levels throughout their growth stages. Relative humidity levels between 50% and 70% are considered favorable for bean growth.<br />
</Text>
              <Subtitle>Greengrams</Subtitle>
              <Text>
Green grams, also known as mung beans, are a type of legume crop. Here are some conditions that are favorable for the growth of green grams:<br />
<br />
Temperature:

Germination: Green grams require soil temperatures between 68°F (20°C) and 86°F (30°C) for successful germination. Warmer temperatures within this range promote faster and more uniform germination.
Vegetative Growth: During the vegetative growth stage, green grams thrive in temperatures ranging from 77°F (25°C) to 86°F (30°C). These temperatures provide optimal conditions for leaf development and overall plant growth.
Flowering and Pod Formation: As the plants enter the flowering and pod formation stage, temperatures between 77°F (25°C) and 86°F (30°C) are ideal for proper flower development and pod formation.<br />
  <br />
Humidity:

Green grams prefer moderate humidity levels. Relative humidity levels between 50% and 70% are generally favorable for their growth and development.<br />
</Text>
              <Subtitle>Peas</Subtitle>
              <Text>
Peas are cool-season legume crops that thrive in mild temperatures. Here are some conditions that are favorable for the growth of peas:<br />
<br />
Temperature:

Germination: Peas require soil temperatures between 40°F (4°C) and 75°F (24°C) for successful germination. They can tolerate cooler temperatures, making them suitable for early spring planting.
Vegetative Growth: Peas prefer temperatures ranging from 60°F (15°C) to 70°F (21°C) during the vegetative growth stage. These moderate temperatures promote vigorous plant growth and leaf development.
Flowering and Pod Formation: During the flowering and pod formation stage, temperatures between 60°F (15°C) and 75°F (24°C) are considered ideal. Consistent temperatures within this range enhance flower pollination and pod development.<br />
  <br />
Humidity:

Peas generally prefer moderate humidity levels. Relative humidity levels between 50% and 70% are suitable for their growth and development.<br />
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
        <Title className="cursor-pointer" onClick={handleCerealsClick}>Cereals</Title>
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
Bean aphids are common pests that can affect bean plants. Here are some key points about bean aphids:<br />
<br />
Identification:
  Bean aphids are small, soft-bodied insects with pear-shaped bodies. They can vary in color from green to brown or black. They have long antennae and feed by piercing and sucking plant sap.<br />
<br />
Damage:
  Bean aphids feed on the sap of bean plants, causing curled or distorted leaves, stunted growth, and reduced yield. They can also transmit plant viruses.<br />
<br />
Conditions Favorable for Bean Aphids:
&nbsp;&nbsp;Temperature: Bean aphids thrive in moderate temperatures, usually between 64°F (18°C) and 77°F (25°C). They reproduce rapidly in such conditions.<br />
&nbsp;&nbsp;Host Plants: Bean aphids primarily infest bean plants but can also attack other leguminous crops, such as peas and lentils.<br />
&nbsp;&nbsp;Humidity: High humidity levels can favor the development and survival of bean aphids. Adequate moisture can contribute to their population growth.<br />
<br />
Prevention and Control Measures:
&nbsp;&nbsp;Cultural Practices: Implement good cultural practices, such as crop rotation, weed control, and proper plant spacing, to minimize the risk of aphid infestations.<br />
&nbsp;&nbsp;Monitoring: Regularly inspect plants for signs of aphids, including curled leaves, sticky residue (honeydew), or the presence of aphids themselves.<br />
&nbsp;&nbsp;Biological Control: Encourage beneficial insects, such as ladybugs and lacewings, which are natural predators of aphids, to help control their population.<br />
&nbsp;&nbsp;Chemical Control: In severe infestations, insecticides may be necessary. However, use them judiciously and follow recommended guidelines and safety precautions.<br />
          </Text>
<Image src="https://www.bing.com/images/search?view=detailV2&ccid=Monl1ONe&id=5E8CB313DAEFB1646F50369C5E098F8CF3630531&thid=OIP.Monl1ONe1ofFIPlAJjPy0AHaF7&mediaurl=https%3a%2f%2fseedsandgrain.com%2fwp-content%2fuploads%2fblack-bean-aphid.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3289e5d4e35ed687c520f9402633f2d0%3frik%3dMQVj84yPCV6cNg%26pid%3dImgRaw%26r%3d0&exph=600&expw=750&q=bean+aphid&simid=608004049177562540&FORM=IRPRST&ck=660779ADD03334B9D559608C3DE20E38&selectedIndex=31" alt="Bean Aphid"/>

          <Subtitle>Tomato Leafminer (Tuta absoluta)</Subtitle>
          <Text>
Tomato leafminer is a common pest that affects tomato plants. Here are some key points about tomato leafminer:<br />
<br />
Identification:
  Tomato leafminer is a small moth that lays its eggs on tomato leaves. The larvae, commonly known as leafminers, tunnel through the leaves, causing damage.<br />
<br />
Damage:
  Leafminer larvae feed on the leaf tissues, creating winding tunnels or mines. This feeding activity weakens the plant and affects its overall health and productivity.<br />
<br />
Conditions Favorable for Tomato Leafminer:
&nbsp;&nbsp;Temperature: Tomato leafminer thrives in warm temperatures between 75°F (24°C) and 85°F (29°C). These temperatures promote their development and reproduction.<br />
&nbsp;&nbsp;Host Plants: Tomato plants are the primary hosts for tomato leafminer. They can also infest other Solanaceae family plants, such as eggplants and peppers.<br />
&nbsp;&nbsp;Humidity: High humidity levels provide a favorable environment for the survival and population growth of tomato leafminer. Moist conditions contribute to their infestation.<br />
<br />
Prevention and Control Measures:
&nbsp;&nbsp;Cultural Practices: Implement good cultural practices, such as removing and destroying infested leaves, maintaining proper plant spacing, and promoting air circulation.<br />
&nbsp;&nbsp;Biological Control: Encourage natural predators and parasites, such as beneficial wasps and predatory bugs, which help control tomato leafminer populations.<br />
&nbsp;&nbsp;Pheromone Traps: Use pheromone traps to monitor and trap adult male leafminers, helping to reduce their population.<br />
&nbsp;&nbsp;Chemical Control: In severe infestations, insecticides specifically labeled for tomato leafminer control may be used. Follow recommended application guidelines and safety precautions.<br />
          </Text>
<Image src="https://www.bing.com/images/search?view=detailV2&ccid=pCHJGYvk&id=398B7AEEDEDC2140D45D6C6E748DCC4674FFAA90&thid=OIP.pCHJGYvkmsWuDshNzic3fAHaFF&mediaurl=https%3a%2f%2fapps.lucidcentral.org%2fppp%2fimages%2fentities%2ftomato_leafminer_421%2f5432149ppt.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a421c9198be49ac5ae0ec84dce27377c%3frik%3dkKr%252fdEbMjXRubA%26pid%3dImgRaw%26r%3d0&exph=527&expw=768&q=tomato+leafminer&simid=607994278156397195&FORM=IRPRST&ck=3F79F4BD679B2BABECF70E46C6B6F370&selectedIndex=5" alt="Tomato Leafminer"/>

          <Subtitle>Coffee Berry Borer (Hypothenemus hampei)</Subtitle>
          <Text>
The coffee berry borer is a significant pest that affects coffee plants. Here are some key points about the coffee berry borer:<br />
<br />
Identification:
  The coffee berry borer is a small, dark brown beetle measuring about 1.5-2 mm in length. The adult female bores into coffee berries to lay her eggs.<br />
<br />
Damage:
  The larvae of the coffee berry borer feed on the coffee beans inside the berries, reducing their quality and yield. Infested berries show signs of small holes and tunneling.<br />
<br />
Conditions Favorable for Coffee Berry Borer:
&nbsp;&nbsp;Temperature: The coffee berry borer thrives in warm tropical climates with temperatures ranging between 77°F (25°C) and 86°F (30°C).<br />
&nbsp;&nbsp;Host Plants: Coffee plants (Coffea species) are the primary host for the coffee berry borer.<br />
&nbsp;&nbsp;Humidity: The coffee berry borer prefers high humidity levels, typically between 70% and 90%. Moist conditions contribute to its infestation.<br />
<br />
Prevention and Control Measures:
&nbsp;&nbsp;Cultural Practices: Implement good cultural practices, including regular pruning, proper shade management, and removal of fallen berries and debris.<br />
&nbsp;&nbsp;Sanitation: Remove and destroy infested berries to prevent the spread of the pest. Maintain cleanliness in the coffee plantation.<br />
&nbsp;&nbsp;Chemical Control: In severe infestations, insecticides specifically formulated for coffee berry borer control may be used. Follow recommended application guidelines and safety precautions.<br />
&nbsp;&nbsp;Biological Control: Encourage natural predators and parasites, such as certain wasps and ants, which help control the coffee berry borer population.<br />
          </Text>
<Image src="https://www.bing.com/images/search?view=detailV2&ccid=Ru%2b8CKEE&id=5309FC77AC87B7B1D9EBCCF9C17A946732D96141&thid=OIP.Ru-8CKEEVLhf83ckcnDXdgEsDt&mediaurl=https%3a%2f%2fbigislandnow.com%2fwp-content%2fuploads%2f2017%2f03%2fHypothenemus.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.46efbc08a10454b85ff377247270d776%3frik%3dQWHZMmeUesH5zA%26pid%3dImgRaw%26r%3d0&exph=825&expw=1041&q=coffee+berry+borer&simid=608046092592548074&FORM=IRPRST&ck=306B1333CE88F687108E7DB9DD2898FB&selectedIndex=5" alt="Coffee berry borer" />
          <Subtitle>Cabbage White Butterfly (Pieris brassicae)</Subtitle>
          <Text>
The cabbage white butterfly is a common pest that affects cabbage and other cruciferous crops. Here are some key points about the cabbage white butterfly:<br />
<br />
Identification:
  The cabbage white butterfly is a medium-sized butterfly with white wings and black spots. The female lays eggs on cabbage leaves, and the larvae (caterpillars) feed on the leaves.<br />
<br />
Damage:
  Cabbage white butterfly larvae feed on cabbage leaves, causing ragged holes and extensive damage. They can also attack other cruciferous plants, such as broccoli, cauliflower, and kale.<br />
<br />
Conditions Favorable for Cabbage White Butterfly:
&nbsp;&nbsp;Temperature: The cabbage white butterfly thrives in moderate temperatures between 68°F (20°C) and 77°F (25°C). These temperatures are conducive to its development and reproduction.<br />
&nbsp;&nbsp;Host Plants: Cruciferous crops, including cabbage, are the primary host plants for the cabbage white butterfly.<br />
&nbsp;&nbsp;Humidity: The cabbage white butterfly can adapt to various humidity levels. However, it generally prefers moderate humidity conditions.<br />
<br />
Prevention and Control Measures:
&nbsp;&nbsp;Physical Barriers: Use floating row covers or netting to prevent adult butterflies from laying eggs on the plants.<br />
&nbsp;&nbsp;Crop Rotation: Rotate cruciferous crops to disrupt the life cycle of the cabbage white butterfly and reduce infestations.<br />
&nbsp;&nbsp;Biological Control: Encourage natural predators and parasites, such as parasitic wasps and birds, which help control the cabbage white butterfly population.<br />
&nbsp;&nbsp;Handpicking: Regularly inspect plants and manually remove eggs, larvae, and adult butterflies.<br />
&nbsp;&nbsp;Organic Sprays: Use organic insecticides or homemade sprays, such as neem oil or insecticidal soap, as a last resort if infestations are severe.<br />
          </Text>
<Image src="https://www.bing.com/images/search?view=detailV2&ccid=I%2bhD2KKm&id=9ACE47F7060F7D9DBE080FE4F561AEF58F95E3A5&thid=OIP.I-hD2KKmYddzvNTcNpQ4JwHaFF&mediaurl=https%3a%2f%2fwww.nature-and-garden.com%2fwp-content%2fuploads%2fsites%2f4%2f2020%2f08%2fpieris-brassicae.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.23e843d8a2a661d773bcd4dc36943827%3frik%3dpeOVj%252fWuYfXkDw%26pid%3dImgRaw%26r%3d0&exph=825&expw=1200&q=cabbage+white+butterfly&simid=608056164320640677&FORM=IRPRST&ck=C1FD3338B17520FAD8D6020B1C92E13B&selectedIndex=5" alt="Cabbage White Butterfly" />
          <Subtitle>Mango Fruit Fly (Bactorocera dorsalis)</Subtitle>
          <Text>
The mango fruit fly is a common pest that affects mango trees and fruits. Here are some key points about the mango fruit fly:<br />
<br />
Identification:
  The mango fruit fly is a small fly with a yellowish-brown body. The female lays eggs in ripening mango fruits, and the larvae (maggots) feed on the fruit pulp.<br />
<br />
Damage:
  Mango fruit fly larvae tunnel through the fruit pulp, causing damage and leading to premature fruit drop. Infested fruits may develop decay and become unfit for consumption or market.<br />
<br />
Conditions Favorable for Mango Fruit Fly:
&nbsp;&nbsp;Temperature: The mango fruit fly thrives in warm tropical and subtropical regions with temperatures above 68°F (20°C). Higher temperatures promote its development and reproduction.<br />
&nbsp;&nbsp;Host Plants: Mango trees (Mangifera indica) are the primary host for the mango fruit fly. It can also infest other fruits, such as guava and citrus, under suitable conditions.<br />
&nbsp;&nbsp;Humidity: The mango fruit fly prefers high humidity levels, typically above 60%. Moist conditions contribute to its infestation and survival.<br />
<br />
Prevention and Control Measures:
&nbsp;&nbsp;Sanitation: Collect and destroy fallen and infested fruits to reduce the population of mango fruit flies.<br />
&nbsp;&nbsp;Fruit Bagging: Cover individual fruits with protective bags to prevent the mango fruit fly from laying eggs on them.<br />
&nbsp;&nbsp;Trapping: Use pheromone traps and bait traps to monitor and trap adult fruit flies, helping to reduce their population.<br />
&nbsp;&nbsp;Biological Control: Introduce natural predators and parasitoids, such as specific wasps and ants, which help control the mango fruit fly population.<br />
&nbsp;&nbsp;Chemical Control: In severe infestations, insecticides specifically formulated for fruit fly control may be used. Follow recommended application guidelines and safety precautions.<br />
          </Text>
<Image src="https://www.bing.com/images/search?view=detailV2&ccid=Xielo1A3&id=710DD5D1AA308F1235745545E5227B8BECA38307&thid=OIP.Xielo1A3TJxlyg2iB8QsTAHaFj&mediaurl=https%3a%2f%2fwww.aciar.gov.au%2fsites%2fdefault%2ffiles%2frhm2_java_fruitfly-on_mango_069829.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5e27a5a350374c9c65ca0da207c42c4c%3frik%3dB4Oj7It7IuVFVQ%26pid%3dImgRaw%26r%3d0&exph=1128&expw=1504&q=Mango+fruit+fly&simid=607990137803710424&FORM=IRPRST&ck=FB3CC447979E483DC39242F5B0F5E1E7&selectedIndex=0" alt="Mango Fruit Fly"/>
        </Card>
      </div>
    </div>
  );
}

