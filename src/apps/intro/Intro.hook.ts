import { useState } from 'react';

export const useIntro = () => {
  const [playModalVisible, setPlayModalVisible] = useState(false);

  const handleClickPlayQuiz = () => setPlayModalVisible(true);

  return {
    playModalVisible,
    setPlayModalVisible,
    handleClickPlayQuiz,
  };
};
