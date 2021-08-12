import { HamburgerIcon } from "@chakra-ui/icons";
import { Tr, Td, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { Daily } from "../../types";
import { unixToTableDate } from "../../utils/date";
import { fahToCel } from "../../utils/temp";
import { Detail } from "../modal/Detail";

interface RowProps {
  daily: Daily;
  isMobile: boolean;
}

export const Row: React.FC<RowProps> = ({ daily, isMobile }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const onClickToggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <Tr>
      <Td fontSize={["xs", "xs", "sm"]}>{unixToTableDate(daily.dt)}</Td>
      <Td fontSize={["xs", "xs", "sm"]}>
        {daily.temp.max} / {fahToCel(daily.temp.max)}
      </Td>
      <Td fontSize={["xs", "xs", "sm"]}>
        {daily.temp.min} / {fahToCel(daily.temp.min)}
      </Td>
      {isMobile ? null : (
        <Td>
          {daily.weather[0].main}, {daily.weather[0].description}
        </Td>
      )}
      <Td>
        <IconButton
          size="xs"
          aria-label="Search database"
          icon={<HamburgerIcon />}
          onClick={onClickToggleDetail}
        />
        <Detail
          dailyData={daily}
          isOpen={showDetail}
          onClickToggle={onClickToggleDetail}
        />
      </Td>
    </Tr>
  );
};
