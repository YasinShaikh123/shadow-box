import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import about from "../../assets/image/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <Box padding={'4rem 0'} backgroundColor={'#3c3e4b'} >
        <Container maxW="container.xl" color="white">
          <SimpleGrid SimpleGrid columns={2} spacingX="40px" spacingY="20px">
            <Box w={'100%'}>
              <Image  src={about} alt="about" />
            </Box>
            <Box>
                <Text color={'#ef233c'} fontWeight={'700'} textAlign={'center'} marginBottom={'20px'}>ABOUT US</Text>
                <Heading as='h2' color={'#fff'} fontSize={'32px'} textAlign={'center'} mb={'24px'} fontFamily={"CustomFont"}>
                    Success Usually Comes To <span style={{color:"#ef233c"}} > Those Who Are Too Busy</span> To Be Looking For It
                </Heading>
                <Text color={'#fff'} fontWeight={'700'} textAlign={'center'} mb={'20px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</Text>
                <Text color={'#fff'} textAlign={'center'}>Maecenas rutrum ligula vitae efficitur rhoncus. Vivamus mauris nisl, viverra sit amet orci ac, rhoncus tincidunt leo. Integer scelerisque felis at sapien pretium faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Text>
                <Stack spacing={4} direction='row' display={'flex'} justifyContent={'center'} mt={'40px'}>
                  <Button size='lg' backgroundColor={'#ef233c'} color={'#fff'} fontSize={'16px'} fontWeight={'500'}
                    sx={{
                        '&:hover': {
                            color: '#000',
                        },
                    }}
                  >
                    Read More
                  </Button>
                  <Button size='lg' fontSize={'16px'} fontWeight={'500'}
                    sx={{
                        '&:hover': {
                        backgroundColor: '#ef233c',
                        color: '#fff',
                        },
                    }}
                  >
                    Start Today
                  </Button>
                </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
