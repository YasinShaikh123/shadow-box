import { Box, Card, CardBody, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import cardone from '../../assets/image/homePageBoxing.jpeg'
import cardtwo from '../../assets/image/kickBoxing.jpg'
import cardthree from '../../assets/image/muayThai.jpg'
import cardfour from '../../assets/image/MMA.jpeg'
import cardbg from '../../assets/image/bg3.jpg'

const cardData = [
  {
    id: 1,
    imageSrc: cardone,
    heading: 'Lorem ipsum',
    disc: "Boxing is a combat sport understand the technical of boxing Everything from game is part of boxing. Baxing is a high-intensity",
    discShow:
      "workout that builds fitness, strength, and coordination.while defending yourself from their retum punches. Some practice boxing as a way to stay in shape. which is most effectively done through training. Choose specific your training to improve on, which will allow you focus your Physically, boxing improves cardiovascular fitness, balance, endurance, strength, and hand-eye coordination. Psychologically, it booster confidence, concentration, resilience, self-awareness, and stress relief.",
  },
  {
    id: 2,
    imageSrc: cardtwo,
    heading: 'Lorem ipsum',
    disc: "Kickboxing combat sport that techniques of martial arts with the art of boxing Define kickboxing into its unique. fundamental techniques",
    discShow:
      "utilized in kickboxing, range of strikes using fists, feet, knees, and elbows. how kickboxing blends the precision and power of punches from boxing with the dynamic kicks from various martial arts disciplines physical benefits of kickboxing, emphasizing enhances cardiovascular fitness, builds strength and agility, improves coordination, and increases flexibility yourself. kickboxing workouts, which engage entire body fitness regimen that challenges both the cardiovascular and muscular improve.",
  },
  {
    id: 3,
    imageSrc: cardthree,
    heading: 'Lorem ipsum',
    disc: "Nam hendrerit enim cursus, cursus neque quis, vulputate est. Namnulla sit amet ligula tempor elementum congue.",
    discShow: "",
  },
  {
    id: 4,
    imageSrc: cardfour,
    heading: 'Lorem ipsum',
    disc: "Nam hendrerit enim cursus, cursus neque quis, vulputate est. Namnulla sit amet ligula tempor elementum congue.",
    discShow: "",
  },
];

const HomeCard = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const handleShowMoreClick = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Box padding={'4rem 0px'} backgroundColor={'#edf2f4'}>
      <Container maxW="container.xl" color="white">
        <Stack spacing={2} textAlign={'center'} mb={'50px'}>
          <Heading as='h2' color={'#000'} fontSize={'40px'} fontFamily={'CustomFont'}>
            Lorem ipsum dolor sit amet
          </Heading>
          <Text color={'#000'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </Stack>
        <SimpleGrid spacing={2} columns={{ base: 1, md: 2, lg: 4 }} spacingX='20px' spacingY='20px'>
          {cardData.map((card) => (
            <Card maxW='sm' key={card.id}>
              <CardBody>
                <Image src={card.imageSrc} alt={card.heading} height={'205px'} width={'100%'} objectFit={'cover'} />
                <Box mt='6'>
                  <Heading ontSize={'22px'} mb={'15px'} fontFamily={'CustomFont'}>{card.heading}</Heading>
                  <Text>{card.disc}</Text>
                    {expandedCards[card.id] && <Text>{card.discShow}</Text>}
                  <Text
                    color={'#1A1D84'}
                    cursor={'pointer'}
                    fontWeight={'500'}
                    mt={'10px'}
                    onClick={() => handleShowMoreClick(card.id)}
                  >
                    {expandedCards[card.id] ? 'Read Less' : 'Read More'}
                  </Text>
                </Box>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HomeCard;
