import React from 'react';
import { Wrapper } from './style';

export const Button: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...props
}) => <Wrapper {...props} />;
