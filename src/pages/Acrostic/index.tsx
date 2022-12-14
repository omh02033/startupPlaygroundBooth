import React from 'react';
import { RemainTime, Timer, Wrapper } from './style';
import {
  ColorFormat,
  CountdownCircleTimer,
} from 'react-countdown-circle-timer';
import { COLORS } from '#/stitches.config';

export const Acrostic: React.FC = () => {
  return (
    <Wrapper>
      <Timer x="center" y="center">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={COLORS.orange as ColorFormat}
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
