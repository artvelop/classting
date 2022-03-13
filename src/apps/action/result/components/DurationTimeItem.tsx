import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Typography } from '@mui/material';
import { useDurationTime } from './DurationTimeItem.hook';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 분, 초가 알맞게 나뉘어지는지 확인
// 3. 시간이 정확하게 맞아 떨어지는지 확인
// 4. 새로고침 이후에도 데이터가 유지되는지 확인

export const DurationTimeItem = () => {
  const { getDurationTime } = useDurationTime();

  return (
    <Container>
      <Typography color={themeColor.white}>⌛ {getDurationTime()}</Typography>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${themeColor.transparent};
  padding: 8px;
`;
