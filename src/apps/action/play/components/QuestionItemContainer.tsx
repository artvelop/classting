import React from 'react';
import styled from '@emotion/styled';
import { QuestionItem } from './QuestionItem';
import { currentQuestionItem } from '@recoil/selector/currentQuestionItem';
import { useRecoilValue } from 'recoil';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 각 스텝마다 올바르게 데이터를 보여주고 있는지 확인

export const QuestionItemContainer = () => {
  const questionItem = useRecoilValue(currentQuestionItem);

  return (
    <Container>
      <QuestionItem item={questionItem} />
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  max-width: 100%;
`;
