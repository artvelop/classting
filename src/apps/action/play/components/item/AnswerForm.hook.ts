import { useState } from 'react';

export const useAnswerForm = () => {
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleClickAnswerButton = () => {
    setButtonDisable((cur) => !cur);
  };

  return {
    buttonDisable,
    handleClickAnswerButton,
  };
};
