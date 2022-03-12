import React from 'react';
import { PageLayout } from '@components/PageLayout';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { themeColor } from '@constants/themeColor';

export const Result = () => {
  return (
    <PageLayout>
      <Container>
        <TitleContainer>
          <Typography variant="h5" color={themeColor.white}>
            수고하셨습니다 🎉🎉
          </Typography>
        </TitleContainer>
      </Container>
    </PageLayout>
  );
};

const Container = styled.div`
  width: 100vw;
  padding-left: 16px;
  padding-right: 16px;
`;

const TitleContainer = styled.div`
  margin-top: 16px;
`;
