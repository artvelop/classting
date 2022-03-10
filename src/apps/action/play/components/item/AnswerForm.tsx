import React from 'react';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';
import { Button, Typography } from '@mui/material';
import { useAnswerForm } from './AnswerForm.hook';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const answerColor = {
  correct: '#00C896',
  wrong: '#F56C73',
} as const;

export const AnswerForm = () => {
  const { buttonDisable, handleClickAnswerButton } = useAnswerForm();

  return (
    <Container>
      <ResultContainer>
        <Typography variant="body2" color={answerColor.correct}>
          정답 😀
        </Typography>
        <NextButton>NEXT</NextButton>
      </ResultContainer>
      <ButtonContainer>
        <AnswerButton
          fullWidth
          variant="contained"
          disabled={buttonDisable}
          onClick={handleClickAnswerButton}>
          <div>Dave Navarro</div>
          {buttonDisable && (
            <AiOutlineCheckCircle size="20" color={answerColor.correct} />
          )}
        </AnswerButton>
        <AnswerButton
          fullWidth
          variant="contained"
          disabled={buttonDisable}
          onClick={handleClickAnswerButton}>
          <div>Tom Morello</div>
          {buttonDisable && (
            <AiOutlineCloseCircle size="20" color={answerColor.wrong} />
          )}
        </AnswerButton>
        <AnswerButton
          fullWidth
          variant="contained"
          disabled={buttonDisable}
          onClick={handleClickAnswerButton}>
          <div>Billy Corgan</div>
          {buttonDisable && (
            <AiOutlineCloseCircle size="20" color={answerColor.wrong} />
          )}
        </AnswerButton>
        <AnswerButton
          fullWidth
          variant="contained"
          disabled={buttonDisable}
          onClick={handleClickAnswerButton}>
          <div>Ed O&#039;Brien</div>
          {buttonDisable && (
            <AiOutlineCloseCircle size="20" color={answerColor.wrong} />
          )}
        </AnswerButton>
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

const AnswerButton = styled(Button)`
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

const NextButton = styled(Button)`
  color: ${themeColor.white};
  padding-top: 4px;
  padding-bottom: 4px;
`;
