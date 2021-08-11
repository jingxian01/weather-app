import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { DataType } from "../../types";

const city = ({ data }: { data: DataType }) => {
  const router = useRouter();

  return (
    <Wrapper variant="small">
      <Header />
      {data.cod !== "404" ? (
        <Box>
          <Button
            colorScheme="blue"
            onClick={() => {
              router.push(`/coord/${data.coord.lat}&${data.coord.lon}`);
            }}
          >
            {data.name}, {data.sys.country}
          </Button>
        </Box>
      ) : (
        <Box color="tomato" fontWeight="bold">
          {data.message}
        </Box>
      )}
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

export default city;

export async function getServerSideProps({ params }) {
  const cityName = params.cityName;
  const req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    { method: "GET" }
  );
  const data: DataType = await req.json();

  return {
    props: { data },
  };
}
