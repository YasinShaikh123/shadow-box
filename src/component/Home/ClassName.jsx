import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import classmate from "../../assets/image/classmatebg.jpg";
import woman from "../../assets/image/team1.jpg";
import Teens from "../../assets/image/Teens.jpg";
import personal from "../../assets/image/Personal.jpg";
import Kick from "../../assets/image/kick.jpg";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ClassName = () => {
  return (
    <>
      <Box
      backgroundAttachment={'fixed'}
        pt={"5rem"}
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(43, 45, 66, 0.72), rgba(43, 45, 66, 0.72)),url(${classmate})`,
        }}
      >
        <Text
          color={"#ef233c"}
          textAlign={"center"}
          fontWeight={"500"}
          marginBottom={"20px"}
        >
          POPULAR CLASSNAMEES
        </Text>
        <Heading
          as="h2"
          color={"#fff"}
          fontSize={"36px"}
          textAlign={"center"}
          mb={"3rem"}
          fontFamily={"CustomFont"}
        >
          Whether You Think You Can, Or You Think You <br /> Can’t, You’re Right
        </Heading>
        <SimpleGrid
          SimpleGrid
          columns={4}
          spacingX="0px"
          spacingY="0px"
          backgroundColor={"#3c3e4b45"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"20px"}
          >
            <Text
              color={"#fff"}
              fontSize={"20px"}
              fontWeight={"500"}
              marginBottom={"10px"}
            >
              Women's Boxing
            </Text>
            <Text color={"#fff"} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo in ex nec pretium
            </Text>
            <Link style={{ color: "#ef233c", marginTop: "13px" }}>
              Read More <ArrowForwardIcon />
            </Link>
          </Box>
          <Box>
            <Image src={woman} h={"270px"} w={"100%"} objectFit={"cover"} />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"20px"}
          >
            <Text
              color={"#fff"}
              fontSize={"20px"}
              fontWeight={"500"}
              marginBottom={"10px"}
            >
              Boxing For Teens
            </Text>
            <Text color={"#fff"} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo in ex nec pretium
            </Text>
            <Link style={{ color: "#ef233c", marginTop: "13px" }}>
              Read More <ArrowForwardIcon />
            </Link>
          </Box>
          <Box>
            <Image src={Teens} h={"270px"} w={"100%"} objectFit={"cover"} />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          SimpleGrid
          columns={4}
          spacingX="0px"
          spacingY="0px"
          backgroundColor={"#3c3e4b45"}
        >
          <Box>
            <Image src={personal} h={"270px"} w={"100%"} objectFit={"cover"} />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"20px"}
          >
            <Text
              color={"#fff"}
              fontSize={"20px"}
              fontWeight={"500"}
              marginBottom={"10px"}
            >
              Personal Training
            </Text>
            <Text color={"#fff"} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo in ex nec pretium
            </Text>
            <Link style={{ color: "#ef233c", marginTop: "13px" }}>
              Read More <ArrowForwardIcon />
            </Link>
          </Box>
          <Box>
            <Image src={Kick} h={"270px"} w={"100%"} objectFit={"cover"} />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p={"20px"}
          >
            <Text
              color={"#fff"}
              fontSize={"20px"}
              fontWeight={"500"}
              marginBottom={"10px"}
            >
              Kickboxing
            </Text>
            <Text color={"#fff"} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo in ex nec pretium
            </Text>
            <Link style={{ color: "#ef233c", marginTop: "13px" }}>
              Read More <ArrowForwardIcon />
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ClassName;
