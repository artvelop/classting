import React from 'react';
import { PageLayout } from '@components/PageLayout';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { themeColor } from '@constants/themeColor';
import { Pie } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { DurationTimeItem } from './components/DurationTimeItem';
import { NoteItemList } from './components/NoteItemList';

const answerColor = {
  correct: '#00C896',
  wrong: '#F56C73',
} as const;

const data: ChartData<'pie', unknown, unknown> = {
  labels: ['정답', '오답'],
  datasets: [
    {
      label: '풀이 결과',
      data: [7, 3],
      backgroundColor: [answerColor.correct, answerColor.wrong],
      borderColor: [answerColor.correct, answerColor.wrong],
      borderWidth: 1,
    },
  ],
};

export const Result = () => {
  return (
    <PageLayout>
      <Container>
        <TitleContainer>
          <Typography variant="h5" color={themeColor.white} align="center">
            🎉 수고하셨습니다 🎉
          </Typography>
        </TitleContainer>
        <ResultContainer>
          <Chart>
            <Pie data={data} />
          </Chart>
          <Duration>
            <DurationTimeItem />
          </Duration>
          <Action>
            <ActionButton fullWidth>다시 풀기</ActionButton>
            <ActionButton fullWidth>홈으로</ActionButton>
          </Action>
        </ResultContainer>
        <NoteContainer>
          <TitleContainer>
            <Typography variant="h5" color={themeColor.white}>
              오답 노트
            </Typography>
          </TitleContainer>
          <NoteItemList />
        </NoteContainer>
      </Container>
    </PageLayout>
  );
};

const Container = styled.div`
  width: 100vw;
  padding-left: 16px;
  padding-right: 16px;
`;

const TitleContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Duration = styled.div`
  display: flex;
  justify-content: center;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoteContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Chart = styled.div`
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 248px;
  height: 248px;
`;

const Action = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
`;

const ActionButton = styled(Button)`
  margin: 8px;
  background-color: ${themeColor.gray};
  color: ${themeColor.white};
  &.MuiButton-containedPrimary {
    background-color: ${themeColor.gray};
    color: ${themeColor.white};
  }
`;
