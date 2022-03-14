import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Typography } from '@mui/material';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 데이터에 따라 텍스트가 올바르게 표기되는지 확인
// 3. 컴포넌트 구조상 useMemo사용이 적절할지 확인

type Props = {
  level: number;
};

export const DifficultyItem = ({ level }: Props) => {
  const difficulty = useMemo(
    () =>
      Array.from({ length: level })
        .map(() => '🔥')
        .join(''),
    [level],
  );

  return (
    <Container>
      <Typography role="contentinfo" variant="button" color={themeColor.white}>
        난이도 {difficulty}
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
