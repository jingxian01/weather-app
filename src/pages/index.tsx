import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

const Index = () => {
  const router = useRouter();

  return (
    <Wrapper variant="regular">
      <Header />
      <Flex>
        <Box w="50%">
          <Image
            src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Segun Adebayo"
          />
        </Box>
        <Box ml={4}>
          <Button colorScheme="blue" onClick={() => router.push("/city")}>
            by city name
          </Button>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Index;
