import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Daily } from "../../types";
import { DailyForecastWeather } from "../data/DailyForecastWeather";

interface DetailProps {
  dailyData: Daily;
  isOpen: boolean;
  onClickToggle: () => void;
}

export const Detail: React.FC<DetailProps> = ({
  dailyData,
  isOpen,
  onClickToggle,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClickToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <DailyForecastWeather dailyData={dailyData} />
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClickToggle}>
            close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
