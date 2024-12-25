import { AspectRatio, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import video from "../../assets/video/bg-video.mp4";
import Bannerimg from "../../assets/image/banner-img.svg"
import crossfit from "../../assets/image/crossfit.jpg"

const Banner = () => {
  return (
    <Box>
      <Box position={"relative"} height={'120vh'} width={'100%'} overflow={'hidden'}>
        <Box className="bg_section">
          <Text position={'absolute'} top={'0'} left={'0'} right={'0'} zIndex={'1'} width={'100vw'} height={'100%'}
          backgroundImage={'linear-gradient(180deg, rgba(43, 45, 66, 0.72), rgba(43, 45, 66, 0.72))'}></Text>
          <AspectRatio ratio={16 / 9} position={"absolute"} left={"0"} right={'0'} objectFit={'cover'} height={'100%'}>
            <video className="video_bg" autoPlay muted loop  position={'absolute'} top={'0'} left={'0'} right={'0'} objectFit={'cover'} height={'100%'}> 
              <source src={video} type="video/mp4" />
            </video>
          </AspectRatio>
        </Box>
        <Box position={'relative'} zIndex={'9'} maxWidth={'105em'} margin={'0px auto'} padding={'2rem 2rem 6rem'}>
            <Box className="hero_section">
              <Breadcrumb display={'flex'} justifyContent={'center'}>
                <BreadcrumbItem>
                  <Box href='#' color={'#fff'} fontSize={'46px'} fontWeight={'700'} borderBottom={'4px solid #ef233c'}>Home</Box>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <SimpleGrid columns={2} spacingX='40px' spacingY='20px' paddingTop={'65px'}> 
              <Box className="home-leftSide">
                  <Box className="context-inner" textAlign={'center'} marginTop={'40px'}>
                      <Text color={'#ef233c'} fontSize={'17px'} fontWeight={'700'} marginBottom={'12px'}>Since 2022</Text>
                      <Text fontFamily={"CustomFont"} fontSize={'60px'} color={'#fff'} fontWeight={'700'} lineHeight={'1.2'}>
                          Train Insane or
                            <Text color={'#ef233c'}>Remain The Same!</Text> Start
                          Today!
                      </Text>
                      <Box className="div-line"></Box>
                  </Box>
              </Box>
              <Box display={'flex'} justifyContent={'center'} position={'relative'}>
                  <Box>
                    <Image src={crossfit}  width={'260px'} height={'260px'} borderRadius={'100%'} position={'relative'} objectFit={'cover'} zIndex={'9'} top={'35px'}/>
                  </Box>
                  <Image src={Bannerimg}  width={'450px'} position={'absolute'}  top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} />
              </Box>
            </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
