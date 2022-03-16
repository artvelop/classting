import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { v4 as generateUUID } from 'uuid';
import { AnswerForm, role } from './AnswerForm';
import { testRenderHookWrapper } from '@utils/testRenderHookWrapper';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('UI Render Check', () => {
  const defaultProps = {
    item: {
      id: generateUUID(),
      difficulty: 3,
      question: '질문 내용',
      answerList: [
        ...Array.from({ length: 3 }).map((item, index) => ({
          id: generateUUID(),
          content: `오답 문항 ${index}`,
          correctStatus: false,
        })),
        {
          id: generateUUID(),
          content: '정답 문항',
          correctStatus: true,
        },
      ],
    },
  };

  it('정답 버튼을 눌렀을 때 ResultContainer의 텍스트 내용이 올바르게 나타나는지 테스트', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AnswerForm {...defaultProps} />} />
        </Routes>
      </BrowserRouter>,
      {
        wrapper: testRenderHookWrapper,
      },
    );

    screen.getByText('정답 문항').click();

    expect(screen.getByRole(role.resultContainer)).toBeInTheDocument();
    expect(screen.getByRole(role.resultContent).textContent).toBe('정답 😀');

    screen.getByRole('next-step-button').click();
  });

  it('오답 버튼을 눌렀을 때 ResultContainer의 텍스트 내용이 올바르게 나타나는지 테스트', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AnswerForm {...defaultProps} />} />
        </Routes>
      </BrowserRouter>,
      {
        wrapper: testRenderHookWrapper,
      },
    );

    screen.getByText('오답 문항 0').click();

    expect(screen.getByRole(role.resultContainer)).toBeInTheDocument();
    expect(screen.getByRole(role.resultContent).textContent).toBe('오답 😢');

    screen.getByRole('next-step-button').click();
  });

  it('버튼을 누르지 않았을 때 ResultContainer가 나타나지 않도록 되어있는지 테스트', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AnswerForm {...defaultProps} />} />
        </Routes>
      </BrowserRouter>,
      {
        wrapper: RecoilRoot,
      },
    );

    expect(screen.queryByRole(role.resultContainer)).not.toBeInTheDocument();
  });
});
