import { PageLayout } from '@components/PageLayout';
import { themeColor } from '@constants/themeColor';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import React from 'react';

export const Intro = () => {
  return (
    <PageLayout>
      <Container>
        <TitleWrapper>
          <Title variant="h3" color={themeColor.primary} align="center">
            Music <br />
            <span>랜덤 퀴즈</span>
          </Title>
        </TitleWrapper>
        <ButtonWrapper>
          <PlayButton fullWidth variant="contained">
            퀴즈 풀기
          </PlayButton>
        </ButtonWrapper>
      </Container>
    </PageLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div``;

const PlayButton = styled(Button)`
  background-color: ${themeColor.primary};
  color: ${themeColor.white};
  &.MuiButton-containedPrimary {
    background-color: ${themeColor.primary};
    color: ${themeColor.white};
  }
`;

const Title = styled(Typography)`
  > span {
    color: ${themeColor.white};
  }
`;
