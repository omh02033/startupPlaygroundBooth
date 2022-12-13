import { createStitches } from '@stitches/react';

export const COLORS = {
  yellow: '#FCC551',
  orange: '#F69000',
  deepOrange: '#EF654F',
  white1: '#FFFAF4',
  white2: '#FFFFFF',
  black: '#242424',
  blue: '#253372',
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
