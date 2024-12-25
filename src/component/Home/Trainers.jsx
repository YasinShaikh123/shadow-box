import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import ten from "../../assets/image/10.jpg"
import eleven from "../../assets/image/11.jpg"
import twenty from "../../assets/image/12.jpg"
import thirteen from "../../assets/image/13.jpg"
import { ArrowForwardIcon,ArrowBackIcon } from '@chakra-ui/icons'

const NextArrow = ({ onClick }) => {
    return (
      <IconButton
        aria-label="Next"
        icon={<ArrowForwardIcon />}
        onClick={onClick}
        position="absolute"
        right="-35px"
        top="50%"
        transform="translateY(-50%)"
        backgroundColor="#ef233c"
        color="white"
        zIndex="10"
        _hover={{ backgroundColor: "#d31e2a" }}
      />
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <IconButton
        aria-label="Previous"
        icon={<ArrowBackIcon />}
        onClick={onClick}
        position="absolute"
        left="-35px"
        top="50%"
        transform="translateY(-50%)"
        backgroundColor="#ef233c"
        color="white"
        zIndex="10"
        _hover={{ backgroundColor: "#d31e2a" }}
      />
    );
  };


const Trainers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // autoplay: true,
  };

  return ( 
    <Box backgroundColor={'#edf2f4'} padding={'4rem 0px'}>
      <Container maxW="container.xl">
        <Box w={'90%'} m={'auto'}>
          <Text fontSize={'16px'} textAlign={'center'} mb={'10px'} color={'#ef233c'} fontWeight={'600'}>SCULPTED TRAINERS</Text>
          <Heading fontSize={'36px'} textAlign={'center'} mb={'3rem'} fontFamily={'CustomFont'}>Motivation Is What Gets You Started Habit Is<br/>
            What Keeps You Going</Heading>
          <Slider {...settings} spacing={2}>
            <Box className="xyz" textAlign={'center'} m={'0px 10px'} w={'inherit !important'}>
                <Box>
                    <Image src={ten} h={'380px'} w={'100%'} objectFit={'cover'} />
                </Box>
                <Box backgroundColor={'#000000'} p={'20px'} m={'-40px 30px 0px 30px'} zIndex={'99'} position={'relative'}>
                    <Text color={'#ef233c'} fontSize={'24px'} fontWeight={'600'} mb={'10px'}>Alice Davidson</Text>
                    <Text color={'rgba(255, 255, 255, 0.4)'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
            </Box>
            <Box className="xyz" textAlign={'center'} m={'0px 10px'} w={'inherit !important'}>
                <Box>
                    <Image src={eleven} h={'380px'} w={'100%'} objectFit={'cover'}  />
                </Box>
                <Box backgroundColor={'#000000'} p={'20px'} m={'-40px 30px 0px 30px'} zIndex={'99'} position={'relative'}>
                    <Text color={'#ef233c'} fontSize={'24px'} fontWeight={'600'} mb={'10px'}>Mark Johnson</Text>
                    <Text color={'rgba(255, 255, 255, 0.4)'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
            </Box>
            <Box className="xyz" textAlign={'center'} m={'0px 10px'} w={'inherit !important'}>
                <Box>
                    <Image src={twenty} h={'380px'} w={'100%'} objectFit={'cover'}  />
                </Box>
                <Box backgroundColor={'#000000'} p={'20px'} m={'-40px 30px 0px 30px'} zIndex={'99'} position={'relative'}>
                    <Text color={'#ef233c'} fontSize={'24px'} fontWeight={'600'} mb={'10px'}>Josepha N</Text>
                    <Text color={'rgba(255, 255, 255, 0.4)'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
            </Box>
            <Box className="xyz" textAlign={'center'}  m={'0px 10px'} w={'inherit !important'}>
                <Box>
                    <Image src={thirteen} h={'380px'} w={'100%'} objectFit={'cover'}  />
                </Box>
                <Box backgroundColor={'#000000'} p={'20px'} m={'-40px 30px 0px 30px'} zIndex={'99'} position={'relative'}>
                    <Text  color={'#ef233c'} fontSize={'24px'} fontWeight={'600'} mb={'10px'}>Adrian Bradshaw</Text>
                    <Text color={'rgba(255, 255, 255, 0.4)'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Box>
            </Box>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Trainers;
