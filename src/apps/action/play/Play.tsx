import React from 'react';
import { PageLayout } from '@components/PageLayout';
import { QuestionItem } from './components/QuestionItem';

// TestCase
// 1. 새로고침시에 시작시간 초기화 여부 확인
// 2. 새로고침시에 슬라이더 이동에 따른 유저가 푼문제가 다시 올바르게 초기화되는지 확인

export const Play = () => {
  return (
    <PageLayout>
      <QuestionItem />
    </PageLayout>
  );
};
