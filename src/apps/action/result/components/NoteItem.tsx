import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';

const question =
  'What 1970&#039;s American ballad referred to the 1959 plane crash as the &quot;the day the music died&quot;?';
const correctAnswer = 'American Pie';

export const NoteItem = () => {
  return (
    <Container>
      <QuestionContainer>
        <Typography color={themeColor.white}>{question}</Typography>
      </QuestionContainer>
      <AnswerContainer>
        <AnswerTypography color={themeColor.primary}>
          정답: <span>{correctAnswer}</span>
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
