import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IntroScreen } from '@pages/IntroScreen';
import { SelectScreen } from '@pages/action/SelectScreen';
import { PlayScreen } from '@pages/action/PlayScreen';
import { ResultScreen } from '@pages/action/ResultScreen';
import { RecoilRoot } from 'recoil';

const Root = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/action/select" element={<SelectScreen />} />
          <Route path="/action/play" element={<PlayScreen />} />
          <Route path="/action/result" element={<ResultScreen />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Root;
