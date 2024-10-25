import React from 'react';
import { Box, Typography } from '@mui/material';

interface NameCardProps {
  name: string;
  unit: string;
}

const UnitCard: React.FC<NameCardProps> = ({ name, unit }) => {
  return (
    <Box
      sx={{
        maxWidth: 200,
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
        {name}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ marginTop: 0.5 }}>
        {unit}
      </Typography>
    </Box>
  );
};

export default UnitCard;