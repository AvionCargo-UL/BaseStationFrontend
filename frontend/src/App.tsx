import React from 'react';
import './App.css';
import UnitCard from "./component/unitCard";
import StartButton from "./component/startButton";
import ComponentStatus from "./component/componentStatus";
import ArucoNumber from "./component/arucoNumber";
import ArucoAngle from "./component/arucoAngle";

function App() {
  return (
    <div className="App">
      <UnitCard name={"Speed"} unit={"mph/kms"}/>
      <UnitCard name={"Altitude"} unit={"ft/m"}/>
      <UnitCard name={"Voltage"} unit={"volt"}/>
      <StartButton isEnabled={true}/>
      <StartButton isEnabled={false}/>
      <ComponentStatus name={"Pi"} isActive={false}/>
      <ComponentStatus name={"Satellite/GPS"} isActive={true}/>
      <ArucoNumber aruco_number={0}/>
      <ArucoNumber aruco_number={-1}/>
      <ArucoAngle yaw={-10.344} pitch={-98.432} roll={100}/>
    </div>
  );
}

export default App;
