import { createStitches } from '@stitches/react';

export const COLORS = {
  yellow: '#FCC551',
  orange: '#F69000',
  white1: '#FFFAF4',
  white2: '#FFFFFF',
  black: '#242424',
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: COLORS,
  },
});
