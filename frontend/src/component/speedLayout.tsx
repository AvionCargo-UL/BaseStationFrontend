import React from 'react';
import Stack from "@mui/material/Stack";
import UnitCard from "./unitCard";
import ValueCard from "./valueCard";

interface SpeedLayoutCardProps {
}

const SpeedLayout: React.FC<SpeedLayoutCardProps> = ({ }) => {
  return (
    <Stack
      spacing={1}
    >
      <UnitCard name={"Speed"} unit={"mph/kms"}/>
      <ValueCard value={100}/>
    </Stack>
  );
};

export default SpeedLayout;