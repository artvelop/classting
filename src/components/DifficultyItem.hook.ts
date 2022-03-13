import { useMemo } from 'react';

type Params = {
  level: number;
};

export const useDifficultyItem = ({ level }: Params) => {
  const getDifficultyFormatting = useMemo(() => {
    let result = '';

    for (let idx = 0; idx < level; idx++) {
      result += '🔥';
    }

    return result;
  }, [level]);

  return {
    getDifficultyFormatting,
  };
};
