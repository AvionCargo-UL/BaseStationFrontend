import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface StatusCardProps {
  name: string;
  isActive: boolean;
}

const ComponentStatus: React.FC<StatusCardProps> = ({ name, isActive }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: '0 auto',
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: isActive ? 'green' : 'red',
            fontWeight: 'bold',
          }}
        >
          {isActive ? 'ON' : 'OFF'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ComponentStatus;
