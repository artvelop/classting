import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Button, Typography } from '@mui/material';
import { useAnswerForm } from './AnswerForm.hook';
import { QuestionItemType } from '@type/question.type';
import { AnswerButton } from './AnswerButton';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. AnswerButton 클릭시 데이터가 Type에 맞게 올바르게 담기는지 확인
// 3. AnswerButton을 클릭 후에 결과화면이 올바르게 나타나는지 확인
// 4. Next버튼 작동여부 확인
// 5. 렌더링 최적화 이후 deps에 들어갈 값들이 알맞은 값인지 확인

type Props = {
  item: QuestionItemType;
};

export const AnswerForm = ({ item }: Props) => {
  const {
    buttonDisable,
    handleClickUserAnswer,
    getCorrectStatusResult,
    getCorrectStatusColor,
    nextStep,
  } = useAnswerForm({ item });

  return (
    <Container>
      {buttonDisable && (
        <ResultContainer role="result-container">
          <Typography
            role="result-text"
            variant="body2"
            color={getCorrectStatusColor}>
            {getCorrectStatusResult}
          </Typography>
          <NextButton role="next-step-button" onClick={nextStep}>
            NEXT
          </NextButton>
        </ResultContainer>
      )}
      <ButtonContainer>
        {item.answerList.map((answerItem) => (
          <AnswerButton
            key={answerItem.id}
            buttonDisable={buttonDisable}
            handleClickUserAnswer={handleClickUserAnswer}
            answerItem={answerItem}
            questionId={item.id}
          />
        ))}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: auto;
  margin-bottom: 32px;
`;

const ResultContainer = styled.div`
  margin-left: 24px;
  margin-right: 16px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

const NextButton = styled(Button)`
  color: ${themeColor.white};
  padding-top: 4px;
  padding-bottom: 4px;
`;
