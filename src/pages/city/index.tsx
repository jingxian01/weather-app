import { ArrowLeftIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Button, HStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Header } from "../../components/Header";
import { InputField } from "../../components/input/InputField";
import { Wrapper } from "../../components/Wrapper";

interface indexProps {}

export const index: React.FC<indexProps> = ({}) => {
  const router = useRouter();

  return (
    <Wrapper variant="small">
      <Header />
      <Box>
        <Formik
          initialValues={{ cityName: "" }}
          onSubmit={async ({ cityName }) => {
            router.push(`/city/${cityName}`);
          }}
        >
          <Form>
            <InputField
              name="cityName"
              label="city name"
              placeholder="city name"
              message="enter a city name"
              isRequired={true}
            />
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
                leftIcon={<SearchIcon boxSize="0.8em" />}
                shadow="md"
                type="submit"
                colorScheme="blue"
              >
                search
              </Button>
            </HStack>
          </Form>
        </Formik>
      </Box>
    </Wrapper>
  );
};

export default index;
