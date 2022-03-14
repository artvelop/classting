export const difficultyToNumber = (input: 'easy' | 'medium' | 'hard') => {
  switch (input) {
    case 'easy':
      return 1;
    case 'medium':
      return 2;
    case 'hard':
      return 3;
  }
};
