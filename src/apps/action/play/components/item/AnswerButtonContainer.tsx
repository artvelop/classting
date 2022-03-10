import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

export const AnswerButtonContainer = () => {
  return (
    <ButtonContainer>
      <AnswerButton fullWidth variant="contained">
        Dave Navarro
      </AnswerButton>
      <AnswerButton fullWidth variant="contained">
        Tom Morello
      </AnswerButton>
      <AnswerButton fullWidth variant="contained">
        Billy Corgan
      </AnswerButton>
      <AnswerButton fullWidth variant="contained">
        Ed O&#039;Brien
      </AnswerButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  margin-top: auto;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 32px;
`;

const AnswerButton = styled(Button)`
  margin-top: 8px;
`;
