import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  question: string;
  answer: string;
};

export const NoteItem = ({ question, answer }: Props) => {
  return (
    <Container>
      <QuestionContainer>
        <Typography color={themeColor.white}>{question}</Typography>
      </QuestionContainer>
      <AnswerContainer>
        <AnswerTypography color={themeColor.primary}>
          정답: <span>{answer}</span>
        </AnswerTypography>
      </AnswerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${themeColor.gray};
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
`;

const QuestionContainer = styled.div`
  margin-bottom: 16px;
`;

const AnswerContainer = styled.div``;

const AnswerTypography = styled(Typography)`
  > span {
    color: ${themeColor.white};
  }
`;
