import { Box, Card, Container } from '@chakra-ui/react'
import React from 'react'
import Banner from '../../component/Home/Banner'
import HomeCard from '../../component/Home/HomeCard'
import AboutUs from '../../component/Home/AboutUs'
import Trainers from '../../component/Home/Trainers'
import ClassName from '../../component/Home/ClassName'
import Testimonial from '../../component/Home/Testimonial'

const Home = () => {
  return (
    <>
      <Banner />
      <HomeCard />
      <AboutUs />
      <Trainers />
      <ClassName />
      <Testimonial />
    </>
  )
}

export default Home
