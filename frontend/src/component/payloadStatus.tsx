import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface PayloadStatusProps {
  isON: boolean;
}

const PayloadStatus: React.FC<PayloadStatusProps> = ({ isON }) => {
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
          Payload
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            color: isON ? 'red' : 'green',
            fontWeight: 'bold',
          }}
        >
          {isON ? 'IN' : 'OUT'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PayloadStatus;
