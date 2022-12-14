import { styled } from '#/stitches.config';
import { Button, Hexile } from '@/components';
import { default as background } from '@/assets/background.svg';

export const Wrapper = styled('div', {
  width: '100vw',
  height: '100vh',
  background: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  margin: 0,
});

export const Timer = styled(Hexile, {
  position: 'absolute',
  top: '17rem',
  left: '20rem',
});

export const RemainTime = styled('span', {
  fontSize: '6rem',
  color: '$orange',
  fontWeight: 800,
});

export const Letter = styled(Hexile, {
  background: '$orange',
  padding: '3rem 4.5rem',
  fontSize: '6rem',
  borderRadius: '3rem',
  color: '$white1',
  fontWeight: 700,
});

export const Input = styled('input', {
  outline: 'none',
  border: 'none',
  borderBottom: '.5rem solid $orange',
  height: '90%',
  background: 'none',
  width: '40%',
  fontSize: '6rem',
  fontWeight: 700,
  fontFamily: 'Pretendard',
});

export const RemainCnt = styled('span', {
  fontWeight: 500,
  fontSize: '4rem',
  textAlign: 'center',
  color: '$orange',
});

export const StartButton = styled(Button, {
  position: 'absolute',
  bottom: '20%',
});
