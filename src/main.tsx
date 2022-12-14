import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { globalCss } from '#/stitches.config';

import {
  Main,
  Timer,
  Acrostic,
  AcrosticRecord,
} from '@/pages';

import '@/assets/Pretendard/pretendard.css';
import 'react-toastify/dist/ReactToastify.min.css';

globalCss({
  ':root': {
    fontSize: '6px',
    '--toastify-font-family': 'Pretendard',
  },
  body: {
    fontSize: '4rem',
    fontFamily: 'Pretendard',
    margin: '0px',
    overflow: 'hidden',
  },
  '*': {
    wordBreak: 'keep-all',
    userSelect: 'none',
    boxSizing: 'border-box',
  },
  img: {
    '-webkit-user-drag': 'none',
  },
})();

const Renderer = () => (
  <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/timer' element={<Timer />} />
    <Route path='/acrostic'>
      <Route index element={<Acrostic />} />
      <Route path='record' element={<AcrosticRecord />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Renderer />
    </BrowserRouter>
  </React.StrictMode>
);
