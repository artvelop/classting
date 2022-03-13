import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 틀린 데이터가 맞는지 확인
// 3. 정답데이터가 정확한지 확인

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
