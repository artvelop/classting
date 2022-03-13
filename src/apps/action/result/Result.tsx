import React from 'react';
import { PageLayout } from '@components/PageLayout';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { themeColor } from '@constants/themeColor';
import { DurationTimeItem } from './components/DurationTimeItem';
import { NoteItemList } from './components/NoteItemList';
import { ResultChartItem } from './components/ResultChartItem';
import { useResult } from './Result.hook';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 홈으로 갈 때 전역state가 올바르게 초기화 되는지 확인
// 3. 다시풀기 클릭시 question데이터를 제외하고 나머지 전역 state가 올바르게 초기화되는지 확인

export const Result = () => {
  const { handleAgainAnswerToQuestion, handleGoHome } = useResult();

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
            <ResultChartItem />
          </Chart>
          <Duration>
            <DurationTimeItem />
          </Duration>
          <Action>
            <ActionButton onClick={handleAgainAnswerToQuestion} fullWidth>
              다시 풀기
            </ActionButton>
            <ActionButton onClick={handleGoHome} fullWidth>
              홈으로
            </ActionButton>
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
