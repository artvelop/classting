import React from 'react';
import styled from '@emotion/styled';
import 'keen-slider/keen-slider.min.css';
import { useQuestionItemContainer } from './QuestionItemContainer.hook';
import { QuestionItem } from './QuestionItem';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 슬라이더가 드래그 했을 때 넘아가지 않는지 확인
// 3. 마지막 슬라이더에서 result페이지로 올바르게 넘어가는지 확인
// 4. 렌더링 최적화 이후 deps에 들어갈 값들이 알맞은 값인지 확인

export const QuestionItemContainer = () => {
  const { currentQuestionItem } = useQuestionItemContainer();

  return (
    <Container>
      <QuestionItem item={currentQuestionItem} />
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  max-width: 100%;
`;
