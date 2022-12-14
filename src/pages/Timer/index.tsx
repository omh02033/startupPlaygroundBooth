import { Hexile, Vexile } from '@/components';
import React, { useEffect, useRef, useState } from 'react';
import {
  ButtonImg,
  Container,
  Description,
  Millisec,
  RemainSec,
  ReplayButton,
  TimerSpan,
  TrophyImg,
  WinWhether,
  Wrapper,
} from './style';

import { default as playBtn } from '@/assets/play.svg';
import { default as stopBtn } from '@/assets/stop.svg';
import { default as trophy } from '@/assets/trophy.svg';

export const Timer: React.FC = () => {
  const [isStarting, setIsStart] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timer>();
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [millisec, setMillisec] = useState<number>(0);
  const [targetSec, setTargetSec] = useState<number>(0);
  const [remainSec, setRemainSec] = useState<number>(0);

  const setRandomTargetSecond = () => {
    const randomSec = Math.floor(Math.random() * (11 - 5)) + 5;
    setTargetSec(randomSec);
  };

  useEffect(setRandomTargetSecond, []);

  const timerToggle = () => {
    if (!isStarting) {
      timer.current = setInterval(() => {
        setMillisec((prev) => {
          setSecond((prevSec) => {
            setMinute((prevMin) =>
              prevSec === 59 && prev === 99 ? prevMin + 1 : prevMin
            );
            return prev === 99 && prevSec === 59
              ? 0
              : prev === 99
              ? prevSec + 1
              : prevSec;
          });
          return prev === 99 ? 0 : prev + 1;
        });
      }, 10);

      setIsStart(true);

      return () => {
        clearInterval(timer.current);
      };
    } else {
      setRemainSec(
        Math.abs(
          +`${targetSec}00` -
            +`${second}${millisec.toString().padStart(2, '0')}`
        )
      );
      setIsEnd(true);
      clearInterval(timer.current);
    }
  };
  const replay = () => {
    setMinute(0);
    setSecond(0);
    setMillisec(0);
    setRandomTargetSecond();
    setIsEnd(false);
    setIsStart(false);
  };

  return (
    <Wrapper>
      {isEnd ? (
        <Container x="center" y="center" fillx filly>
          <Vexile x="center" fillx gap={2}>
            <Hexile gap={3} y="center">
              {remainSec <= 20 ? (
                <>
                  <TrophyImg src={trophy} />
                  <WinWhether>WINNER!</WinWhether>
                  <TrophyImg src={trophy} />
                </>
              ) : (
                <WinWhether>GOOD GAME</WinWhether>
              )}
            </Hexile>
            <RemainSec>
              {remainSec.toString().padStart(3, '0')[0]}.
              {remainSec.toString().padStart(3, '0').slice(1, 3)}초
            </RemainSec>
          </Vexile>
          <ReplayButton onClick={replay}>다시 하기</ReplayButton>
        </Container>
      ) : (
        <Container x="center" y="space" fillx filly>
          <Vexile x="center" gap={2}>
            <Description>가장 가까운 시간에 멈추세요!</Description>
            <TimerSpan type="target">
              00:{targetSec.toString().padStart(2, '0')}
            </TimerSpan>
          </Vexile>
          <Hexile y="bottom">
            <TimerSpan type="timer">
              {minute.toString().padStart(2, '0')}:
              {second.toString().padStart(2, '0')}
            </TimerSpan>
            <Millisec>{millisec.toString().padStart(2, '0')}</Millisec>
          </Hexile>
          <ButtonImg
            src={isStarting ? stopBtn : playBtn}
            onClick={timerToggle}
          />
        </Container>
      )}
    </Wrapper>
  );
};
