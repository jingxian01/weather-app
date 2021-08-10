import React from "react";
import { Result } from "../../components/Result";
import { DataType } from "../../types";

const city = ({ data }) => {
  console.log(data);

  return <Result data={data} />;
};

export default city;

export async function getServerSideProps({ params }) {
  const cityName = params.cityName;
  const req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    { method: "GET" }
  );

  const data: DataType = await req.json();

  return {
    props: { data },
  };
}
