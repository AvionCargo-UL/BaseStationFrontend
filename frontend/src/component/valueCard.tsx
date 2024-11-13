import React from 'react';
import { Box, Typography } from '@mui/material';

interface ValueCardProps {
  value: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
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
        {value}
      </Typography>
    </Box>
  );
};

export default ValueCard;