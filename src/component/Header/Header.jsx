import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../../src/image/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  return (
    <>
      <Box backgroundColor={"#262737"} padding={"10px 0px"}>
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
                <Image src={logo} width={"90px"} height={"64px"} />
                <Text color={"#fff"} fontSize={"34px"} fontWeight={"700"}>
                  Shadow Box
                </Text>
              </Box>
            </Link>
            <Box display={"flex"} gap={"48px"} alignItems={"center"}>
              <Link
                to="/"
                className="link"
                style={{
                  borderBottom:
                    location.pathname === "/" ? "2px solid #c00b19" : "none",
                }}
              >
                Home
              </Link>

              <Link
                to="/aboutus"
                className="link"
                style={{
                  borderBottom:
                    location.pathname === "/aboutus"
                      ? "2px solid #c00b19"
                      : "none",
                }}
              >
                About
              </Link>

              <Link
                to="/classes"
                className="link"
                style={{
                  borderBottom:
                    location.pathname === "/classes"
                      ? "2px solid #c00b19"
                      : "none",
                }}
              >
                Classes
              </Link>

              <Link
                to="/trainer"
                className="link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom:
                    location.pathname === "/trainer"
                      ? "2px solid #c00b19"
                      : "none",
                }}
              >
                Trainers
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
