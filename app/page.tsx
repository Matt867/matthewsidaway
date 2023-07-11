"use client";

import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Avatar,
  Container,
  Flex,
  Divider,
  Image,
  Tabs,
  TabList,
  Tab,
  Button,
  TabPanels,
  TabPanel,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";

import { useState } from "react";

function CompanyCard({
  companyName,
  imageSrc,
  duration,
  description,
  children,
  rootCard = true,
}: {
  companyName: string;
  imageSrc: string;
  description?: string;
  duration?: string;
  children?: React.ReactNode;
  rootCard?: boolean;
}) {
  return (
    <Card width={"100%"} variant={rootCard ? "outline" : "filled"}>
      <CardBody>
        <Flex gap="15px" alignItems="start" direction={"column"}>
          <Image
            src={imageSrc}
            alt={'logo'}
            borderRadius={"lg"}
          />
          <Flex direction="column">
            <Heading size="md">{companyName}</Heading>
            <Text>Apprentice Software Engineer</Text>
            <Text color={"GrayText"}>{duration}</Text>
            <Text>{description}</Text>
          </Flex>
          {rootCard ? (
            <>
              <Divider mb={"3"} mt={"2"} />
              <Flex
                direction={"column"}
                wrap={"wrap"}
                gap={"15px"}
                width={"100%"}
              >
                {children}
              </Flex>
            </>
          ) : null}
        </Flex>
      </CardBody>
    </Card>
  );
}

function ChildCompanyCard({
  companyName,
  imageSrc,
  duration,
  description,
  role = "Apprentice Software Engineer",
  children,
}: {
  companyName: string;
  imageSrc: string;
  description?: string;
  role?: string;
  duration?: string;
  children?: React.ReactNode;
}) {
  return (
    <Card variant={"outline"}>
      <CardBody>
        <Flex gap="15px" alignItems={"center"} direction={"row"}>
          <Image
            src={imageSrc}
            alt={`${companyName} logo`}
            borderRadius={"lg"}
          />
          <Flex direction="column">
            <Heading size="md">{companyName}</Heading>
            <Text>{role}</Text>
            <Text color={"GrayText"}>{duration}</Text>
            <Text>{description}</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

function ContactForm() {
  const [data, setData] = useState({ email: "", message: "" });

  const handleSubmit = () => {}

  return (
    <Card variant={"outline"}>
      <CardBody>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e) => setData({ email: e.target.value, message: data.message })} type="email" />
        </FormControl>
        <Divider mt="2vh" mb="1vh" />
        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea onChange={(e) => setData({ email: data.email, message: e.target.value })} height={"xs"} />
        </FormControl>
        <Button mt="2vh" width="100%" colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </CardBody>
    </Card>
  );
}

export default function Home() {
  return (
    <Container maxW="container.xl" mb={"2vh"} mt={"2vh"}>
      <Flex direction="column" gap="2vh">
        <Card variant={"outline"}>
          <CardHeader>
            <Flex alignItems="center" gap="20px">
              <Avatar size="lg" src="/headshot1.jpg" />
              <Flex direction="column">
                <Heading size="2xl">Matthew Sidaway</Heading>
                <Text>Software Engineer</Text>
                <Flex mt={"1vh"} gap={"10px"}>
                  <a href="https://github.com/Matt867">
                    <Button
                      colorScheme="gray"
                      size={"xs"}
                      leftIcon={<FaGithub />}
                    >
                      GitHub
                    </Button>
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </CardHeader>
        </Card>
        <Tabs variant={"solid-rounded"}>
          <TabList flexWrap={"wrap"}>
            <Tab>Experience</Tab>
            <Tab>Projects</Tab>
            <Tab>Education</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding={0}>
              <Heading size="lg" mt={"2vh"} mb={"2vh"}>
                Experience
              </Heading>
              <Flex direction={"column"} gap={"15px"}>
                <CompanyCard
                  companyName="Meta"
                  imageSrc="/metalogo.png"
                  duration="Oct 2022 - Present"
                  rootCard={true}
                  description="Work-based rotational engineering training program"
                >
                  <ChildCompanyCard
                    companyName="Workplace"
                    duration="Jan 2023 - Jul 2023"
                    imageSrc="/workplace.png"
                  />
                  <ChildCompanyCard
                    companyName="Monetization"
                    imageSrc="/metalogo.png"
                    duration="Jul 2023 - Jan 2024"
                  />
                  <ChildCompanyCard
                    role="Internship"
                    companyName="Meta"
                    duration="Jan 2024 - April 2024"
                    description="Org TBC"
                    imageSrc="/metalogo.png"
                  />
                </CompanyCard>
              </Flex>
            </TabPanel>
            <TabPanel padding={0}>
              <Heading size="lg" mt={"2vh"} mb={"2vh"}>
                Projects
              </Heading>
              <Flex direction={"column"} gap={"15px"}>
                <Card>
                  <CardHeader>
                    <Heading size={"md"}>
                      Hmmm, nothing listed here yet...
                    </Heading>
                  </CardHeader>
                </Card>
              </Flex>
            </TabPanel>
            <TabPanel padding={0}>
              <Heading size="lg" mt={"2vh"} mb={"2vh"}>
                Education
              </Heading>
              <Flex direction={"column"} gap={"15px"}>
                <Card>
                  <CardBody>
                    <UnorderedList>
                      <ListItem><Text fontWeight='bold'>A*A*A*</Text> Mathematics, Physics, Computer Science</ListItem>
                      <ListItem>Working towards Level 4 Software Engineering qualification with Multiverse</ListItem>
                    </UnorderedList>
                  </CardBody>
                </Card>
              </Flex>
            </TabPanel>
            <TabPanel padding={0}>
              <Heading size="lg" mt={"2vh"} mb={"1vh"}>
                Contact
              </Heading>
              <Text mb={"2vh"}>
                Leave a message here and I will get back to you
              </Text>
              <Flex direction={"column"} gap={"15px"}>
                <ContactForm/>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
}
