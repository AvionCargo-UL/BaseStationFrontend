import React from 'react';
import './App.css';
import UnitCard from "./component/unitCard";
import StartButton from "./component/startButton";
import ComponentStatus from "./component/componentStatus";
import ArucoNumber from "./component/arucoNumber";
import ArucoAngle from "./component/arucoAngle";
import PayloadStatus from "./component/payloadStatus";
import Steps from "./component/steps";
import CameraStream from "./component/cameraStream";
import FlightPlan from "./component/flightPlan";
import {Box, Grid2, Paper, styled, Typography} from "@mui/material";
import ValueCard from "./component/valueCard";
import SpeedLayout from "./component/speedLayout";
import AltitudeLayout from "./component/altitudeLayout";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    <div className="App">
      {/*<UnitCard name={"Speed"} unit={"mph/kms"}/>*/}
      {/*<UnitCard name={"Altitude"} unit={"ft/m"}/>*/}
      {/*<UnitCard name={"Voltage"} unit={"volt"}/>*/}
      {/*<StartButton isEnabled={true}/>*/}
      {/*<StartButton isEnabled={false}/>*/}
      {/*<ComponentStatus name={"Pi"} isActive={false}/>*/}
      {/*<ComponentStatus name={"Satellite/GPS"} isActive={true}/>*/}
      {/*<ArucoNumber aruco_number={0}/>*/}
      {/*<ArucoNumber aruco_number={-1}/>*/}
      {/*<ArucoAngle yaw={-10.344} pitch={-98.432} roll={100}/>*/}
      {/*<PayloadStatus isON={true}/>*/}
      {/*<PayloadStatus isON={false}/>*/}
      {/*<Steps currentStep={5}/>*/}
      {/*<CameraStream/>*/}
      <Grid2 container spacing={2} columns={16}>
        <Grid2 size={8}>
          <Stack alignItems="flex-start" spacing={2}>
            <FlightPlan/>
            <Grid2 container spacing={2} columns={4} sx={{flexGrow: 0, width: '100%'}}>
              <Grid2 size={1} offset={{ xs: 3, md: 0 }}>
                <UnitCard name={"Speed"} unit={"mph/kms"}/>
                <ValueCard value={100}/>
              </Grid2>
              <Grid2 size={1} offset={{ md: 0 }}>
                <UnitCard name={"Altitude"} unit={"ft/m"}/>
                <ValueCard value={1000}/>
              </Grid2>
              <Grid2 size={1} offset={{ xs: 4, md: 0 }}>
                <UnitCard name={"Voltage"} unit={"volt"}/>
                <PayloadStatus isON={true}/>
              </Grid2>
              <Grid2 size={1} offset={{ xs: 4, md: 0 }}>
                <UnitCard name={"N/A"} unit={"n/a"}/>
              </Grid2>
            </Grid2>
          </Stack>
        </Grid2>
        <Grid2 size={8}>
          <Grid2 container spacing={2} columns={1}>
            <Grid2>
              <CameraStream/>
              <Grid2 container spacing={2} columns={2}>
                <Grid2 size={1}>
                  <ArucoNumber aruco_number={0}/>
                  <ArucoAngle yaw={-10.344} pitch={-98.432} roll={100}/>
                  <ComponentStatus name={"Pi"} isActive={false}/>
                  <ComponentStatus name={"Satellite/GPS"} isActive={true}/>
                </Grid2>
                <Grid2 size={1}>
                  <Steps currentStep={5}/>
                  <StartButton isEnabled={true}/>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

    </div>
  );
}

export default App;
