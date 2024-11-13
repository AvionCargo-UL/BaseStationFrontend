import React from 'react';
import { Button } from '@mui/material';

interface StatusButtonProps {
  isEnabled: boolean;
}

const StartButton: React.FC<StatusButtonProps> = ({ isEnabled }) => {
  return (
    <Button
      sx={{
        backgroundColor: isEnabled ? 'lightgreen' : 'red',
        color: 'white',
        '&:hover': {
          backgroundColor: isEnabled ? 'green' : 'darkred',
        },
        width: "100%",
        transition: 'background-color 0.3s ease',
      }}
    >
      {isEnabled ? 'GO' : 'STOP'}
    </Button>
  );
};

export default StartButton;
