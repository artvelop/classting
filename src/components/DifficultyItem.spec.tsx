import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { DifficultyItem } from '@components/DifficultyItem';

describe('UI Cover', () => {
  const defaultProps = {
    level: 3,
  };
  it('텍스트 출력 테스트', () => {
    render(<DifficultyItem {...defaultProps} />);

    expect(screen.getByRole('contentinfo').textContent).toBe('난이도 🔥🔥🔥');
  });
});
