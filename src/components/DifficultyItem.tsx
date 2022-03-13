import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Typography } from '@mui/material';
import { useDifficultyItem } from './DifficultyItem.hook';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 데이터에 따라 텍스트가 올바르게 표기되는지 확인

type Props = {
  level: number;
};

export const DifficultyItem = ({ level }: Props) => {
  const { getDifficultyFormatting } = useDifficultyItem({ level });

  return (
    <Container>
      <Typography variant="button" color={themeColor.white}>
        난이도 {getDifficultyFormatting()}
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 4px;
  background-color: ${themeColor.primary};
`;
