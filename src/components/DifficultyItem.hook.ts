type Params = {
  level: number;
};

export const useDifficultyItem = ({ level }: Params) => {
  const getDifficultyFormatting = () => {
    let result = '';

    for (let idx = 0; idx < level; idx++) {
      result += '🔥';
    }

    return result;
  };

  return {
    getDifficultyFormatting,
  };
};
