import React from 'react';
import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const ProblemCount = () => {
  return (
    <Container>
      <Typography color={themeColor.white}>1/10</Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${themeColor.primary};
`;
