import React, { useEffect, useState } from 'react';
import { Input, Letter, RemainCnt, RemainTime, Timer, Wrapper } from './style';
import {
  ColorFormat,
  CountdownCircleTimer,
} from 'react-countdown-circle-timer';
import { COLORS } from '#/stitches.config';
import { Button, Hexile, Vexile } from '@/components';

export const Acrostic: React.FC = () => {
  const word = ['시', '간', '관', '리'];
  const maxLen = 50;
  const [acrostic, setAcrostic] = useState<Array<string>>(['', '', '', '']);
  const [contentLen, setContentLen] = useState<number>(0);

  useEffect(() => {
    setContentLen(acrostic.map((e) => e.length).reduce((a, b) => a + b));
  }, [acrostic]);

  const setContent = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const { inputType } = e.nativeEvent as InputEvent;
    if (inputType !== 'deleteContentBackward' && contentLen >= maxLen) return;

    setAcrostic((prev) => [
      ...prev.slice(0, idx),
      e.target.value,
      ...prev.slice(idx + 1, word.length),
    ]);
  };

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
      <Vexile fillx filly x="center" y="center" gap={12}>
        <Vexile fillx x="center" y="center" gap={5.5}>
          <Vexile fillx x="center" y="center" gap={12}>
            {word.map((e, idx) => (
              <Hexile fillx x="center" gap={6} key={idx}>
                <Letter x="center" y="center">
                  {e}
                </Letter>
                <Input
                  type="text"
                  value={acrostic[idx]}
                  onChange={(event) => setContent(event, idx)}
                />
              </Hexile>
            ))}
          </Vexile>
          <RemainCnt>
            {contentLen}/{maxLen}
          </RemainCnt>
        </Vexile>
        <Button>등록하기</Button>
      </Vexile>
    </Wrapper>
  );
};
