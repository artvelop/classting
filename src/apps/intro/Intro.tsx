import React from 'react';
import styled from '@emotion/styled';
import { PageLayout } from '@components/PageLayout';
import { themeColor } from '@constants/themeColor';
import { Button, Typography } from '@mui/material';
import { useIntro } from './Intro.hook';
import { MessageModal } from '@components/MessageModal';
import { GiArchiveRegister } from 'react-icons/gi';

export const Intro = () => {
  const { playModalVisible, setPlayModalVisible, handleClickPlayQuiz } =
    useIntro();

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
          <PlayButton
            onClick={handleClickPlayQuiz}
            fullWidth
            variant="contained">
            퀴즈 풀기
          </PlayButton>
        </ButtonWrapper>
        <MessageModal
          visible={playModalVisible}
          setVisible={setPlayModalVisible}
          cancleButtonVisible={true}
          description="퀴즈는 4지선다형으로 구성되며 총 10문제 입니다"
          icon={<GiArchiveRegister size="128" color={themeColor.gray} />}
        />
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
