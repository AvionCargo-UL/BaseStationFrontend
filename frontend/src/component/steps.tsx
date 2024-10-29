import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Typography } from '@mui/material';
import React from 'react';
import CardWrapper from "./CardWrapper";

const steps = [
  {
    number: 0,
    description: 'Idle',
  },
  {
    number: 1,
    description: 'Takeoff',
  },
  {
    number: 2,
    description: 'Steady flight',
  },
  {
    number: 3,
    description: 'Moving to DLZ',
  },
  {
    number: 4,
    description: 'Above DLZ',
  },
  {
    number: 5,
    description: 'Descending',
  },
  {
    number: 6,
    description: 'Delivering payload',
  },
  {
    number: 7,
    description: 'Ascending',
  },
  {
    number: 8,
    description: 'Steady flight',
  },
  {
    number: 9,
    description: 'Return to base',
  },
  {
    number: 10,
    description: 'Landed',
  }
];

interface IProps {
  currentStep: number;
}

function Steps({ currentStep }: IProps) {
  const getDotColor = (step: number) => {
    if (step < currentStep || currentStep === 10) {
      return 'success';
    }
    if (step === currentStep) {
      return 'warning';
    }
    return 'grey';
  };

  return (
    <CardWrapper title="Flight steps">
      <Timeline sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
      >
        {steps.map((step) => (
          <TimelineItem key={step.description}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">{step.number}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={getDotColor(step.number)} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body2" color="textSecondary">{step.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </CardWrapper>
  );
}

export default Steps;