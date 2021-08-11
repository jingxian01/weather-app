import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Header } from "../../components/Header";
import { Result } from "../../components/Result";
import { Wrapper } from "../../components/Wrapper";
import { OneCallData } from "../../types";

const coord = ({ data }: { data: OneCallData }) => {
  const router = useRouter();

  return (
    <Wrapper variant="regular">
      <Header />
      <Result data={data} />
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

export default coord;

export async function getServerSideProps({ params }) {
  const co = params.coordinate;
  const coordinate = co.split("&");
  const req = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate[0]}&lon=${coordinate[1]}&units=imperial&exclude=minutely,hourly&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    { method: "GET" }
  );
  const data: OneCallData = await req.json();

  return {
    props: { data },
  };
}
