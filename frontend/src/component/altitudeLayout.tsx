import React from 'react';
import Stack from "@mui/material/Stack";
import UnitCard from "./unitCard";
import ValueCard from "./valueCard";

interface AltitudeLayoutCardProps {
}

const AltitudeLayout: React.FC<AltitudeLayoutCardProps> = ({ }) => {
  return (
    <Stack
      spacing={1}
    >
      <UnitCard name={"Altitude"} unit={"ft/m"}/>
      <ValueCard value={100}/>
    </Stack>
  );
};

export default AltitudeLayout;