import React from 'react';
import { Box, Typography } from '@mui/material';

interface ArucoAngleCardProps {
  yaw: number;
  pitch: number;
  roll: number;
}

const ArucoNumber: React.FC<ArucoAngleCardProps> = ({ yaw, pitch, roll }) => {
  return (
    <Box
      sx={{
        maxWidth: 300,
        margin: '0 auto',
        padding: 1,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 1,
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h6" component="div" fontWeight="bold">
        {"Angle difference"}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 1 }}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Yaw
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'green' }}>
            {yaw}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Pitch
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'blue' }}>
            {pitch}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Roll
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'red' }}>
            {roll}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ArucoNumber;
