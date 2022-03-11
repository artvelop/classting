import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Typography } from '@mui/material';
import { useDifficultyItem } from './DifficultyItem.hook';

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
