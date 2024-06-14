import { Box, Button, Container, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import logo from "../../../src/image/logo.png";

const Header = () => {
  return (
    <>
      <Box backgroundColor={"#262737"} padding={"18px 0px"}>
        <Container maxW="container.xl" color="white">
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            zIndex={"999"}
            width={"100%"}
            top={"0px"}
          >
            <Link to="/">
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src={logo} width={"90px"} height={"64px"}  />
                <Text color={"#fff"} fontSize={"34px"} fontWeight={"700"} fontFamily={"'Exo', sans-serif"}>Shadow Box</Text>
              </Box>
            </Link>
            <Box display={"flex"} gap={"40px"} alignItems={"center"}>
              <Button
                backgroundColor={"transparent"}
                fontWeight={"400"}
                border={"none"}
                color={"#fff"}
              >
                Home
              </Button>

              <Link to="/community" className="link">
                <Button
                  backgroundColor={"transparent"}
                  fontWeight={"400"}
                  border={"none"}
                  color={"#fff"}
                >
                  About
                </Button>
              </Link>

              <Link to="/community" className="link">
                <Button
                  backgroundColor={"transparent"}
                  fontWeight={"400"}
                  border={"none"}
                  color={"#fff"}
                >
                  Classes
                </Button>
              </Link>

              <Link
                to="/Contact"
                className="link"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  backgroundColor={"transparent"}
                  fontWeight={"400"}
                  border={"none"}
                  color={"#fff"}
                >
                  Trainers
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
