import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { themeColor } from '@constants/themeColor';
import { DifficultyItem } from '@components/DifficultyItem';
import { AnswerForm } from './item/AnswerForm';
import { QuestionItemType } from '@type/question.type';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. data가 백엔드에서 넘겨준 response데이터와 동일하게 view로직에 나타나는지 확인

type Props = {
  item: QuestionItemType;
  sequence: number;
  onClickNextStep: () => void;
};

export const QuestionItem = ({ item, sequence, onClickNextStep }: Props) => {
  return (
    <ContainerLayout>
      <QuestionContainer>
        <QuestionNumber variant="h3" color={themeColor.white}>
          Q{sequence}
        </QuestionNumber>
        <Question variant="h5" color={themeColor.white}>
          {item.question}
        </Question>
      </QuestionContainer>
      <InformationContainer>
        <DifficultyItem level={item.difficulty} />
      </InformationContainer>
      <AnswerForm item={item} onClickNextStep={onClickNextStep} />
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const InformationContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
`;

const QuestionContainer = styled.div`
  margin: 16px;
`;

const QuestionNumber = styled(Typography)`
  margin-bottom: 8px;
`;

const Question = styled(Typography)`
  word-break: keep-all;
`;
