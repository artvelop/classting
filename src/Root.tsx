import React from 'react';
import { Intro } from '@pages/Intro';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

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
