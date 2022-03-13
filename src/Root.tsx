import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IntroScreen } from '@pages/IntroScreen';
import { PlayScreen } from '@pages/action/PlayScreen';
import { ResultScreen } from '@pages/action/ResultScreen';
import { RecoilRoot } from 'recoil';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Root = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/action/play" element={<PlayScreen />} />
          <Route path="/action/result" element={<ResultScreen />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default Root;
