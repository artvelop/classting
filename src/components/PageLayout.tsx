import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import React from 'react';

type Props = {
  children: React.ReactChild;
};

export const PageLayout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: ${themeColor.bg.lightBlack};
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;
