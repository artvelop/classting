import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { themeColor } from '@constants/themeColor';
import { DifficultyItem } from './item/DifficultyItem';
import { AnswerButtonContainer } from './item/AnswerButtonContainer';

export const QuestionItem = () => {
  return (
    <ContainerLayout>
      <QuestionContainer>
        <QuestionNumber variant="h3" color={themeColor.white}>
          Q1
        </QuestionNumber>
        <Question variant="h5" color={themeColor.white}>
          Which of the following guitarists recorded an album as a member of the
          Red Hot Chili Peppers?
        </Question>
      </QuestionContainer>
      <InformationContainer>
        <DifficultyItem />
      </InformationContainer>
      <AnswerButtonContainer />
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
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
