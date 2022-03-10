import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Intro } from './page/Intro';

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
