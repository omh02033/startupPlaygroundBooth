import { styled } from '#/stitches.config';
import { Hexile, Vexile } from '@/components';

export const Wrapper = styled(Vexile, {
  width: '100vw',
  height: '100vh',
});

export const Timer = styled(Hexile, {
  position: 'absolute',
  top: '5rem',
  right: '5rem',
});

export const RemainTime = styled('span', {
  fontSize: '7rem',
  color: '$orange',
  fontWeight: 900,
});
