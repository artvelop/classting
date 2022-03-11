import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Button } from '@mui/material';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Answer } from '@type/question.type';
import { useAnswerButton } from './AnswerButton.hook';
import { answerColor } from './AnswerForm';

type Props = {
  buttonDisable: boolean;
  questionId: string;
  answerItem: Answer;
  handleClickUserAnswer: (questionId: string, answerItem: Answer) => void;
};

export const AnswerButton = ({
  buttonDisable,
  questionId,
  answerItem,
  handleClickUserAnswer,
}: Props) => {
  const { onClickUserAnswer } = useAnswerButton({
    questionId,
    answerItem,
    handleClickUserAnswer,
  });

  return (
    <AnswerButtonContainer
      fullWidth
      variant="contained"
      onClick={onClickUserAnswer}
      disabled={buttonDisable}>
      <div>{answerItem.content}</div>
      {buttonDisable &&
        (answerItem.correctStatus ? (
          <AiOutlineCheckCircle size="20" color={answerColor.correct} />
        ) : (
          <AiOutlineCloseCircle size="20" color={answerColor.wrong} />
        ))}
    </AnswerButtonContainer>
  );
};

const AnswerButtonContainer = styled(Button)`
  margin-top: 8px;
  background-color: ${themeColor.primary};
  border: 1px solid ${themeColor.primary};
  color: ${themeColor.white};
  text-transform: none;
  &.Mui-disabled {
    background-color: ${themeColor.transparent};
    border: 1px solid ${themeColor.primary};
    color: ${themeColor.white};
    justify-content: space-between;
    text-transform: none;
  }
`;
