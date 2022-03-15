import React from 'react';
import { render, screen } from '@testing-library/react';
import { DifficultyItem } from '@components/DifficultyItem';

describe('UI Render Check', () => {
  const defaultProps = {
    level: 0,
  };

  it('난이도가 Easy일 때 텍스트가 올바르게 치환되는지 테스트', () => {
    defaultProps.level = 1;
    render(<DifficultyItem {...defaultProps} />);

    expect(screen.getByRole('contentinfo').textContent).toBe('난이도 🔥');
  });

  it('난이도가 Medium일 때 텍스트가 올바르게 치환되는지 테스트', () => {
    defaultProps.level = 2;
    render(<DifficultyItem {...defaultProps} />);

    expect(screen.getByRole('contentinfo').textContent).toBe('난이도 🔥🔥');
  });

  it('난이도가 Hard일 때 텍스트가 올바르게 치환되는지 테스트', () => {
    defaultProps.level = 3;
    render(<DifficultyItem {...defaultProps} />);

    expect(screen.getByRole('contentinfo').textContent).toBe('난이도 🔥🔥🔥');
  });
});
