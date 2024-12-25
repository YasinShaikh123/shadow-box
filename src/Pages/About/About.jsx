import {
  AspectRatio,
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
import React from "react";
import BG1 from "../../assets/image/img_10.jpg";
import BG2 from "../../assets/image/img_09.jpg";
import BG3 from "../../assets/image/img_05.jpg";
import BG4 from "../../assets/image/img_06.jpg";
import { FaRegCalendar } from "react-icons/fa";
import tranerBG from "../../assets/image/trannerBG.jpg";

const AboutCont = [
  {
    id: 1,
    title: "ABOUT US",
    content: [
      {
        text: "At Shadowbox Studio, we have been dedicated to training students and athletes of all levels for nearly six years. Whether you're a beginner taking your first steps into the world of martial arts or a seasoned professional looking to refine your skills, we are here to guide and support you on your journey.",
      },
      {
        text: "Led by our owner and head instructor, Piyush M. Rana, we pride ourselves on having a team of highly skilled and experienced instructors in various disciplines. Professor Piyush himself is renowned as one of the leading instructors in Kickboxing, Muya-thai, Wrestling, and Wushu. With over 14 years of expertise in Muay-thai, strength training, self-defense, agility training, stamina, and more, he brings a wealth of knowledge to our programs.",
      },
      {
        text: "Our athletes compete at various levels of competition, from local events to the highest combat sports. We take great pride in the success of our students and competitors, and we continue to produce skilled and disciplined athletes in every combat game and sport we participate in.",
      },
      {
        text: "our comprehensive approach to training. Our programs extend beyond physical exercise and self-defense, emphasizing personal development and growth. We believe that martial arts is not just a means to improve one's physical fitness that truly sets us apart but also a pathway to enhancing mental discipline, building confidence, and fostering a positive mindset.",
      },
      {
        text: "In addition to our renowned Muya-thai training workouts and strength training sessions, we offer a diverse range of classes to cater to different interests and skill levels. From Boxing and Kickboxing to MMA and Brazilian Jiu Jitsu, we provide instruction that spans the entire spectrum of combat sports. Whether you're looking to learn the fundamentals, sharpen your techniques, or take your skills to a professional level, we have the classes that meet your needs.",
      },
      {
        text: "At Shadowbox Studio, we create a supportive and inclusive environment where individuals from all walks of life can come together to learn, grow, and challenge themselves. We are passionate about helping our students achieve their fitness goals, develop self-confidence, and cultivate a strong sense of discipline.",
      },
      {
        text: "Join us at Shadowbox Studio and experience the transformative power of muaythai in a dynamic and engaging",
      },
    ],
  },
  {
    id: 2,
    title: "WHAT WE ARE",
    content: [
      {
        text: "Our unwavering commitment to utilizing our education and experience provide comprehensive mixed martial arts programs. Our classes go beyond physical exercise and self-defense techniques,they encompass personal development and growth. We believe that martial arts can instill discipline, resilience, and mental fortitude, qualities that extend beyond the training mats and into everyday life.",
      },
      {
        text: "Our program is designed to cater to a wide range of interests and skill levels. Whether you are a beginner taking your first steps in the world of martial arts or an advanced practitioner seeking to fine-tune your techniques, we have classes that suit your needs. From Boxing and Kickboxing to MMA and Brazilian Jiu Jitsu, our offerings provide a diverse and enriching training experience.",
      },
      {
        text: "At Shadowbox Studio, we foster an environment of inclusivity and support. We believe everyone, regardless of age, gender, or fitness level. Our experienced instructors are passionate about helping each individual reach their full potential, both inside and outside the training arena.",
      },
      {
        text: "Our commitment to excellence extends beyond the physical training itself. We prioritize the holistic development of our students, focusing on personal growth, self-confidence, and mental well-being. Our classes not only enhance your physical fitness but also instill valuable life skills such as discipline, focus, and perseverance.",
      },
    ],
  },
  {
    id: 3,
    title: "OUR VISION",
    content: [
      {
        text: "At Shadowbox Studio, our vision is to be the premier destination for mixed martial art training, where individuals of all backgrounds and skill levels can discover their inner warrior and unlock their full potential. We strive to create an environment that fosters growth, empowerment, and personal transformation through the art of combat sports.We envision a community of individuals as a lifestyle and strive for continuous growth and self-improvement through our comprehensive",
      },
    ],
  },
  {
    id: 4,
    title: "OUR MISSION",
    content: [
      {
        text: "Our mission at Shadowbox Studio is to empower individuals through martial arts, fostering personal growth, physical fitness, and self-confidence. We are committed to providing exceptional training programs that cater to students and athletes of all levels, from beginners to professional fighters. We foster a supportive and inclusive community. create a safe environment where students can grow, challenge themselves, and support one another. We believe in the power of teamwork and respect creating a positive atmosphere that encourages personal growth and mutual upliftment. Our ultimate mission extends beyond the walls of our studio. We aim to inspire individuals to lead healthier, more confident lives, armed with the skills and mindset acquired through martial arts training. We strive to make a positive impact on our students, helping them develop not only as martial arts but also as well-rounded individuals who can overcome challenges and achieve success in all aspects of life.",
      },
    ],
  },
];

const News = [
    {
        id: 1,
        title: "Quisque eget purus non sapien gravida",
        date:'June 10, 2017',
        cardIMG:BG1
    },
    {
        id: 2,
        title: "Quisque eget purus non sapien gravida",
        date:'June 10, 2017',
        cardIMG:BG2
    },
    {
        id: 3,
        title: "Quisque eget purus non sapien gravida",
        date:'June 10, 2017',
        cardIMG:BG3
    },
    {
        id: 4,
        title: "Quisque eget purus non sapien gravida",
        date:'June 10, 2017',
        cardIMG:BG4
    }
]

const About = () => {
  return (
    <>
      <Box className="hero_section">
        <Breadcrumb display={"flex"} justifyContent={"center"}>
          <BreadcrumbItem>
            <Box
              href="#"
              color={"#fff"}
              fontSize={"46px"}
              fontWeight={"700"}
              borderBottom={"4px solid #ef233c"}
            >
              About Us
            </Box>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box mb={"4rem"} mt={"4rem"}>
        {AboutCont.map((cont) => (
          <Container maxW="container.xl" mb={"2rem"}>
            <Box>
              <Box key={cont.id}>
                <Heading
                  fontSize={"36px"}
                  mb={"14px"}
                  fontFamily={"CustomFont"}
                >
                  {cont.title}
                </Heading>
                {cont.content.map((item, index) => (
                  <Text key={index} color={"#00000096"} mb={"10px"}>
                    {item.text}
                  </Text>
                ))}
              </Box>
            </Box>
          </Container>
        ))}
      </Box>
      <Box backgroundImage={tranerBG} p={'5rem 0'}>
        <Container maxW="container.xl">
          <Heading as="h2" fontSize={"42px"}  fontFamily={"CustomFont"}>
            Recent news
          </Heading>
          <Text fontSize={"18px"} fontWeight={500}>
            Uis autem vel eum iure reprehenderit
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap={8} mt={14}>
          {News.map((item) => (
            <GridItem key={item.id}>
               <Image mb={5} src={item.cardIMG} h={'320px'} />
               <Box>
                <Text display={'flex'} alignItems={'center'} fontSize={'16px'} fontWeight={500} mb={2}><span><FaRegCalendar style={{marginRight:"10px"}} /></span>{item.date}</Text>
                <Text as={'h4'} fontSize={'18px'} fontFamily={"system-ui"} fontWeight={600} textTransform={'uppercase'} me={8}>{item.title}</Text>
               </Box>
            </GridItem>
          ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
