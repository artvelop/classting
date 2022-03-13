import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Button } from '@mui/material';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Answer } from '@type/question.type';
import { useAnswerButton } from './AnswerButton.hook';
import { answerColor } from '@constants/answerColor';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 클릭시 disabled처리가 올바르게 되는지 확인
// 3. disabled에 따라서 ui가 올바르게 변경되는지 확인

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
