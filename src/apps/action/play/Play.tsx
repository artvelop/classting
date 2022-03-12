import React from 'react';
import { PageLayout } from '@components/PageLayout';
import { QuestionItemSlider } from './components/QuestionItemSlider';
import { usePlayScreen } from './Play.hook';

export const Play = () => {
  usePlayScreen();

  return (
    <PageLayout>
      <QuestionItemSlider />
    </PageLayout>
  );
};
