import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import profileone from "../../assets/image/tasti-profile1.jpg"
import profiletwo from "../../assets/image/tasti-profile2.jpg"
import profilethree from "../../assets/image/tasti-profile3.jpg"

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide the arrows
    autoplay: true,
  };

  return (
    <Box className="testimonial" backgroundColor={'#edf2f4'} padding={'4rem 0px'}>
      <Container maxW="container.xl">
        <Box w={'70%'} m={'auto'}>
          <Heading fontSize={'40px'} textAlign={'center'} mb={'7px'} fontFamily={'CustomFont'}>Testimonails</Heading>
          <Text  fontSize={'18px'} textAlign={'center'} mb={'30px'}>Lorem ipsum dolor sit amet</Text>
          <Slider {...settings}>
            <Box textAlign={'center'}>
              <Image src={profiletwo} w={'100px'} h={'100px'} borderRadius={'100%'} margin={'auto'}/>
              <Text fontSize={'18px'}>Mauris dignissim magna vel nisl porttitor venenatis. Nunc fermentum metus nunc, eget consectetur diam bibendum eu pulvinar ornare justo dimentum fringilla nulla pretium.</Text>
              <Text fontWeight={'600'} mt={'15px'}>CEO</Text>
              <Text color={'#ef233c'} fontSize={'18px'} fontWeight={'600'} mb={'15px'}>- Anny B.</Text>
            </Box>
            <Box textAlign={'center'}>
              <Image src={profilethree} w={'100px'} h={'100px'} borderRadius={'100%'} margin={'auto'} />
              <Text fontSize={'18px'}>Mauris dignissim magna vel nisl porttitor venenatis. Nunc fermentum metus nunc, eget consectetur diam bibendum eu pulvinar ornare justo dimentum fringilla nulla pretium.</Text>
              <Text fontWeight={'600'} mt={'15px'}>Manager</Text>
              <Text color={'#ef233c'} fontSize={'18px'} fontWeight={'600'} mb={'15px'}>- Gertrud Z.</Text>
            </Box>
            <Box textAlign={'center'}>
              <Image src={profileone} w={'100px'} h={'100px'} borderRadius={'100%'} margin={'auto'} mb={'20px'} />
              <Text fontSize={'18px'}>Mauris dignissim magna vel nisl porttitor venenatis. Nunc fermentum metus nunc, eget consectetur diam bibendum eu pulvinar ornare justo dimentum fringilla nulla pretium.</Text>
              <Text fontWeight={'600'} mt={'15px'}>Personal Trainer</Text>
              <Text color={'#ef233c'} fontSize={'18px'} fontWeight={'600'} mb={'15px'}>- Josepha N.</Text>
            </Box>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
