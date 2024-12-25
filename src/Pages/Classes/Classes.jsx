import React from "react";
import Header from "../../component/Header/Header";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Boxing from "../../assets/image/img_15.jpg";
import { Link } from "react-router-dom";
import tranerBG from "../../assets/image/trannerBG.jpg";
import BoxingTwo from "../../assets/image/img_22.jpg";
import BoxingThree from "../../assets/image/img_20.jpg";
import BoxingFour from "../../assets/image/346.jpg";
import BoxingFive from "../../assets/image/img_17.jpg";
import BoxingSIX from "../../assets/image/img_01.jpg";
import Banner from "../../assets/image/slide_01.jpg";


const cardItems = [
  {
    id: 1,
    title: "BOXING ClASSES",
    image: Boxing,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    id: 2,
    title: "KICKBOXING",
    image: BoxingTwo,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    id: 3,
    title: "MMA",
    image: BoxingThree,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    id: 4,
    title: "CROSSFIT",
    image: BoxingFour,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    id: 5,
    title: "TRANING",
    image: BoxingFive,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    id: 6,
    title: "THAI BOXING",
    image: BoxingSIX,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    linkText: "Learn More",
    linkHref: "#",
  },
];

const Classes = () => {
  
  return (
    <>
      <Box h={'270px'} display={'flex'} alignItems={'center'} justifyContent={'center'} backgroundSize={'cover'}
        sx={{
          backgroundImage: `linear-gradient(180deg, rgb(43 45 66 / 30%), rgba(43, 45, 66, 0.72)),url(${Banner})`,
        }}>
        <Breadcrumb display={"flex"} justifyContent={"center"}>
          <BreadcrumbItem>
            <Box
              href="#"
              color={"#fff"}
              fontSize={"46px"}
              fontWeight={"700"}
              borderBottom={"4px solid #ef233c"}
            >
              Classes
            </Box>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box backgroundImage={tranerBG} p={'5rem 0'} backgroundAttachment={'fixed'}>
        <Container maxW="container.xl">
          <Heading
            as="h2"
            fontSize={"42px"}
            textAlign={"center"}
            mb={3}
            fontFamily={"CustomFont"}
          >
            Classes for all levels
          </Heading>
          <Text fontSize={"20px"} textAlign={'center'} mb={9}>
            Consectetur, adipisci velit, sed quia non numquam
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {cardItems.map((item) => (
              <GridItem key={item.id} w="100%" mb={5}  position="relative" overflow="hidden" 
                _hover={{ ".hidden-box": { opacity: 1, visibility: "visible", transform: "translateY(0)" } }}>
                <Text
                  p={4}
                  backgroundColor={"#c00b19"}
                  color={"#fff"}
                  textAlign={"center"}
                  fontSize={"22px"}
                > {item.title}
                </Text>
                <Box><Image src={item.image} h={"400px"} w={'100%'} /></Box>
                <Box backgroundColor={"#ffffffa6"}  className="hidden-box"
                  position={'absolute'}
                  bottom={'0'}
                  textAlign={"center"}
                  p={7}
                  opacity={0} // Initially hidden
                  visibility="hidden" // Prevents it from being focusable
                  transform="translateY(20px)" // Adds slide-in effect
                  transition="opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease">
                  <Text fontSize={"16px"} pb={3} textAlign={"center"}>{item.description}</Text>
                  <Text textAlign={"center"} pb={0}>
                    <Link
                      to={item.linkHref}
                      style={{
                        fontFamily: "system-ui",
                        fontWeight: "600",
                        borderBottom: "2px solid #c00b19",
                      }}
                    >
                      {item.linkText}
                    </Link>
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Classes;
