import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Intro } from '@pages/Intro';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
