import React from 'react';
import flightPlanImagePlaceholder from '../assets/flight_plan_placeholder.png';
import { Box, Typography } from '@mui/material';

const FlightPlan = () => {
  const legendItems = [
    { color: 'red', label: 'Planned path' },
    { color: 'green', label: 'Real path' },
  ];

  return (
    <Box textAlign="left">
      <Box
        sx={{
          width: '800px',
          height: '450px',
          overflow: 'hidden',
          position: 'relative',
          margin: '0 auto',
        }}
      >
        <img
          src={flightPlanImagePlaceholder}
          alt="Flight Plan"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* Legend */}
      <Box
        display="flex"
        justifyContent="center"
        marginTop="10px"
      >
        {legendItems.map((item, index) => (
          <Box key={index} display="flex" alignItems="center" marginX="10px">
            <Box
              sx={{
                width: '20px',
                height: '20px',
                backgroundColor: item.color,
                marginRight: '5px',
              }}
            />
            <Typography variant="body1">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FlightPlan;
