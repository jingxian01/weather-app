import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

const Index = () => {
  const router = useRouter();

  return (
    <Wrapper variant="regular">
      <Header />
      <Button colorScheme="blue" onClick={() => router.push("/city")}>
        by city name
      </Button>
    </Wrapper>
  );
};

export default Index;
