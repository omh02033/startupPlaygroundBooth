import React from 'react';
import { useNavigate } from 'react-router';

export const Acrostic: React.FC = () => {
  const navigation = useNavigate();
  return (
    <>
      <h1>사행시페이지</h1>
      <span onClick={() => navigation('/acrostic/record')}>이동</span>
    </>
  );
};
