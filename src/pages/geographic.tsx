import React from "react";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import dynamic from "next/dynamic";
import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { Box, Button, HStack } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/dist/client/router";

interface geographicProps {}

const geographic: React.FC<geographicProps> = ({}) => {
  const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);
  const router = useRouter();

  const MapWithNoSSR = dynamic(() => import("../components/map/MapListen"), {
    ssr: false,
  });

  return (
    <Wrapper variant="regular">
      <Header />
      <Box mb={2} fontStyle="italic">
        click the place you want in the map and hit enter
      </Box>
      <Box w="100%" height="500px">
        <MapWithNoSSR position={position} setPosition={setPosition} />
      </Box>

      <HStack mt={8} spacing={4}>
        <Button
          shadow="md"
          leftIcon={<ArrowLeftIcon boxSize="0.8em" />}
          onClick={() => {
            router.back();
          }}
        >
          back
        </Button>
        <Button
          shadow="md"
          type="submit"
          colorScheme="blue"
          onClick={() => {
            router.push(`/coord/${position[0]}&${position[1]}`);
          }}
        >
          enter
        </Button>
      </HStack>
    </Wrapper>
  );
};

export default geographic;
