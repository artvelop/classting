import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Button, Typography } from '@mui/material';
import { useAnswerForm } from './AnswerForm.hook';
import { QuestionItemType } from '@type/question.type';
import { AnswerButton } from './AnswerButton';

export const answerColor = {
  correct: '#00C896',
  wrong: '#F56C73',
} as const;

type Props = {
  onClickNextStep: () => void;
  item: QuestionItemType;
};

export const AnswerForm = ({ item, onClickNextStep }: Props) => {
  const { buttonDisable, handleClickUserAnswer, correctStatus } = useAnswerForm(
    { item },
  );

  return (
    <Container>
      {buttonDisable && (
        <ResultContainer>
          <Typography
            variant="body2"
            color={correctStatus ? answerColor.correct : answerColor.wrong}>
            {correctStatus ? '정답 😀' : '오답 😢'}
          </Typography>
          <NextButton onClick={onClickNextStep}>NEXT</NextButton>
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
