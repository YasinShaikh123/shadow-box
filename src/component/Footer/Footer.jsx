import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box backgroundColor={'#262737'} padding={'2rem 0'}>
        <Container maxW="container.xl">
            <Text color={'#fff'} fontSize={'18px'} textAlign={'center'}>
                Copyright©2023 All Rights Reserved
            </Text>
        </Container>
    </Box>
  )
}

export default Footer
