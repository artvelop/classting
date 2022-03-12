import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Typography } from '@mui/material';
import { useDurationTime } from './DurationTimeItem.hook';

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
