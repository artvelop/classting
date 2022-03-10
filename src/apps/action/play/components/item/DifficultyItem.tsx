import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import React from 'react';

export const DifficultyItem = () => {
  return (
    <Container>
      <Typography variant="button" color={themeColor.white}>
        난이도 🔥🔥🔥
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
