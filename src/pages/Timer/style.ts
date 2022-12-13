import { styled } from '#/stitches.config';
import { Hexile, Vexile } from '@/components';
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

export const Container = styled(Vexile, {
  padding: '30rem 0 50rem',
});

export const Description = styled('span', {
  fontSize: '6rem',
  color: '$blue',
  fontWeight: 700,
});

export const TimerSpan = styled('span', {
  fontSize: '15rem',
  fontWeight: 700,
  lineHeight: '15rem',
  variants: {
    type: {
      target: {
        color: '$blue',
      },
      timer: {
        color: '$deepOrange',
      },
    },
  },
});

export const Millisec = styled('span', {
  fontSize: '6rem',
  color: '$deepOrange',
  fontWeight: 700,
});

export const ButtonImg = styled('img', {
  width: '27rem',
  height: '27rem',
});

export const TrophyImg = styled('img', {
  widith: '13rem',
  height: '13rem',
});

export const WinWhether = styled('span', {
  fontSize: '12rem',
  color: '$orange',
  fontWeight: 700,
});

export const RemainSec = styled('span', {
  fontSize: '18rem',
  color: '$deepOrange',
  fontWeight: 700,
});

export const ReplayButton = styled(Hexile, {
  padding: '3rem 9rem',
  borderRadius: '5rem',
  fontSize: '4rem',
  color: '$white2',
  fontWeight: 700,
  background: '$orange',
  position: 'absolute',
  bottom: '20%',
});
