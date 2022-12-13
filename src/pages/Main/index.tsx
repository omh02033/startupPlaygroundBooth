import { Button } from '@/components';
import React from 'react';
import { useNavigate } from 'react-router';
import { Wrapper } from './style';

export const Main: React.FC = () => {
  const goto = useNavigate();

  return (
    <Wrapper x='center' y='center' gap={10}>
      <Button onClick={() => goto('/timer')}>타이머</Button>
      <Button onClick={() => goto('/acrostic')}>사행시</Button>
      <Button onClick={() => goto('/acrostic/record')}>사행시 기록</Button>
    </Wrapper>
  );
};
