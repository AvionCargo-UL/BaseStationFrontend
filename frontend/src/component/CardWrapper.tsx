import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';

interface IProps {
  title: string;
  children: React.ReactNode;
}

function CardWrapper({ title, children }: IProps) {
  return (
    <Paper elevation={8} sx={{ padding: '12px', height: 'auto' }}>
      <Stack marginBottom={2} spacing={0.5}>
        <Typography variant="h5">{title}</Typography>
        <Divider />
      </Stack>
      {children}
    </Paper>
  );
}

export default CardWrapper;