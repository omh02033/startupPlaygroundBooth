import React from 'react';
import { RemainTime, Timer, Wrapper } from './style';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const Acrostic: React.FC = () => {
  return (
    <Wrapper>
      <Timer x='center' y='center'>
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors="#F69000"
          initialRemainingTime={60}
          size={100}
          children={({ remainingTime }) => (
            <RemainTime>{remainingTime}</RemainTime>
          )}
        />
      </Timer>
    </Wrapper>
  );
};
