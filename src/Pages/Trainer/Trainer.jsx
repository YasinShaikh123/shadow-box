import React from "react";
import Banner from "../../assets/image/slide_02.jpg";
import Boxing from "../../assets/image/img_15.jpg";
import Boxingtwo from "../../assets/image/img_05.jpg";
import BoxingThree from "../../assets/image/img_10.jpg";
import Boxingfour from "../../assets/image/img_09.jpg";
import tranerBG from "../../assets/image/trannerBG.jpg";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const cardItems = [
  {
    id: 1,
    title: "MARVIN MCKINNEY",
    image: Boxingfour,
    name: "pro-trainer",
    description: "Maecenas accumsan velit convallis finibus interdum",
  },
  {
    id: 1,
    title: "Eleanor Pena",
    image: Boxingtwo,
    name: "pro-trainer",
    description: "Maecenas accumsan velit convallis finibus interdum",
  },
  {
    id: 1,
    title: "Eleanor Pena",
    image: BoxingThree,
    name: "pro-trainer",
    description: "Maecenas accumsan velit convallis finibus interdum.",
  },
];

const Trainers = () => {
  return (
    <>
      <Box
        // backgroundImage={Banner}
        h={"270px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundSize={"cover"}
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(43, 45, 66, 0.72), rgba(43, 45, 66, 0.72)),url(${Banner})`,
        }}
      >
        <Breadcrumb display={"flex"} justifyContent={"center"}>
          <BreadcrumbItem>
            <Box
              href="#"
              color={"#fff"}
              fontSize={"46px"}
              fontWeight={"700"}
              borderBottom={"4px solid #ef233c"}
            >
              Trainers
            </Box>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box p={"5rem 0"} backgroundImage={tranerBG}>
        <Container maxW="container.xl">
          <Heading as="h2" fontSize={"42px"} mb={4} fontFamily={"CustomFont"}>
            Classes for all levels
          </Heading>
          <Text fontSize={"20px"}>
            Consectetur, adipisci velit, sed quia non numquam
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={14}>
            {cardItems.map((item) => (
              <GridItem
                position={"relative"}
                key={item.id}
                w="100%"
                mb={5}
                backgroundSize={"cover"}
                boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                bg={'#fff'}
                overflow="hidden" 
              >
                <Box>
                  <Image
                    h={"300px"}
                    w={"100%"}
                    objectFit={"cover"}
                    backgroundPosition={"top"}
                    src={item.image}
                    transition="transform 0.3s ease" 
                    _hover={{
                      transform: "scale(1.1)", // Scale effect on hover
                      boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 15px", // Enhanced shadow on hover
                    }}
                  />
                </Box>
                <Box p={"30px 20px"}>
                  <Text fontSize={"22px"} fontFamily={"CustomFont"} fontWeight={600}>{item.title}</Text>
                  <Text
                    pb={3}
                    fontWeight={600}
                    fontStyle={'"Poppins",sans-serif'}
                    color={"#cc0e17"}
                  >
                    {item.name}
                  </Text>
                  <Text>{item.description}</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Trainers;
