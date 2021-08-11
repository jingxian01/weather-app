import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { OneCallData } from "../types";
import { Header } from "./Header";
import { Wrapper } from "./Wrapper";
import dynamic from "next/dynamic";

interface ResultProps {
  data: OneCallData;
}

export const Result: React.FC<ResultProps> = ({ data }) => {
  const router = useRouter();
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  console.log("data from result", data);

  return (
    <Wrapper variant="regular">
      <Header />
      <Box w="50%" height="350px" mt={10}>
        <MapWithNoSSR position={[data.lat, data.lon]} />
      </Box>
      <Button
        leftIcon={<ArrowLeftIcon boxSize="0.8em" />}
        mt={10}
        onClick={() => {
          router.back();
        }}
      >
        back
      </Button>
    </Wrapper>
  );
};
