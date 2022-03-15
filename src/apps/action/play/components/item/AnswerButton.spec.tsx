import React from 'react';
import { render, screen } from '@testing-library/react';
import { v4 as generateUUID } from 'uuid';
import { AnswerButton } from './AnswerButton';
import { Answer } from '@type/question.type';

describe('UI Render Check', () => {
  const defaultProps = {
    buttonDisable: true,
    questionId: generateUUID(),
    answerItem: {
      id: generateUUID(),
      content: '문항 내용',
      correctStatus: true,
    },
    handleClickUserAnswer: (questionId: string, answerItem: Answer) => {},
  };

  it('해당 버튼이 정답일 때 Render 결과가 올바른지 테스트', () => {
    defaultProps.buttonDisable = true;
    defaultProps.answerItem.correctStatus = true;
    render(<AnswerButton {...defaultProps} />);

    expect(screen.getByRole('contentinfo').textContent).toBe('문항 내용');
    expect(screen.getByRole('correct-icon'));
  });

  it('해당 버튼이 오답일 때 Render 결과가 올바른지 테스트', () => {
    defaultProps.buttonDisable = true;
    defaultProps.answerItem.correctStatus = false;
    render(<AnswerButton {...defaultProps} />);

    expect(screen.getByRole('contentinfo').textContent).toBe('문항 내용');
    expect(screen.getByRole('wrong-icon'));
  });
});
