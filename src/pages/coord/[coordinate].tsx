import React from "react";
import { Result } from "../../components/Result";
import { Wrapper } from "../../components/Wrapper";
import { OneCallData } from "../../types";

const coord = ({ data }) => {
  console.log("data", data);
  return <Result data={data} />;
};

export default coord;

export async function getServerSideProps({ params }) {
  const co = params.coordinate;
  const coordinate = co.split("&");
  const req = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate[0]}&lon=${coordinate[1]}&exclude=minutely,hourly&appid=${process.env.NEXT_PUBLIC_API_KEY}`,
    { method: "GET" }
  );
  const data: OneCallData = await req.json();

  return {
    props: { data },
  };
}
