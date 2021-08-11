import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { OneCallData } from "../types";
import { Header } from "./Header";
import { Wrapper } from "./Wrapper";

interface ResultProps {
  data: OneCallData;
}

export const Result: React.FC<ResultProps> = ({ data }) => {
  const router = useRouter();
  console.log("data from result", data);

  return (
    <Wrapper variant="regular">
      <Header />
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
