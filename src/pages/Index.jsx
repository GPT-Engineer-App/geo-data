import { Container, Text, VStack, IconButton, Image, Box, Heading, HStack, Button } from "@chakra-ui/react";
import { FaRocket, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navigation from "../components/Navigation.jsx";

const Index = () => {
  return (
    <>
      <Navigation />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={8}>
          <Box boxSize="150px">
            <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTcwMTk2NTV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" />
          </Box>
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Full Stack Developer with a passion for creating interactive and dynamic web applications.
          </Text>
          <HStack spacing={4}>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </HStack>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Contact Me
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default Index;
