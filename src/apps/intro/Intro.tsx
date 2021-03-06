import React from 'react';
import styled from '@emotion/styled';
import { PageLayout } from '@components/PageLayout';
import { themeColor } from '@constants/themeColor';
import { Button, Typography } from '@mui/material';
import { useIntro } from './Intro.hook';
import { MessageModal } from '@components/MessageModal';
import { GiArchiveRegister } from 'react-icons/gi';
import { LoadingIndicator } from '@components/LoadingIndicator';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 초기 렌더링 이후 questionList 전역 상태관리 초기화 여부 확인
// 3. handlePlayModalCofirm 함수에서 api로 받아온 데이터가 올바르게 매핑되는지 확인
// 4. handlePlayModalCofirm 함수에서 데이터 매핑시 정답이 랜덤으로 올바르게 array에 배치되는지 확인

export const Intro = () => {
  const {
    playModalVisible,
    setPlayModalVisible,
    handleClickPlayQuiz,
    handlePlayModalCofirm,
    loadingVisible,
  } = useIntro();

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
          onClickConfirm={handlePlayModalCofirm}
          cancleButtonVisible={true}
          description="퀴즈는 4지선다형으로 구성되며 총 10문제 입니다"
          icon={<GiArchiveRegister size="128" color={themeColor.gray} />}
        />
        <LoadingIndicator visible={loadingVisible} />
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
