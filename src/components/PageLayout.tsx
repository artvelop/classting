import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import { breakPoints } from '@src/utils/breakpoints';
import React from 'react';

// TestCase
// 1. width크기에 따라 레이아웃이 올바르게 변경되는지 확인

type Props = {
  children: React.ReactChild;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <RootContainer>
      <Container>{children}</Container>
    </RootContainer>
  );
};

const RootContainer = styled.div`
  display: flex;
  background-color: ${themeColor.bg.dark};
  width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  background-color: ${themeColor.bg.lightBlack};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  width: 390px;

  ${breakPoints.sm} {
    width: 100vw;
    margin: 0px;
  }
`;
