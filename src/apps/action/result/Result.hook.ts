import { useNavigate } from 'react-router-dom';
import { usePlayReset } from '@hooks/usePlayReset';

export const useResult = () => {
  const navigate = useNavigate();
  const { resetPlay } = usePlayReset();

  const handleAgainAnswerToQuestion = () => {
    resetPlay();
    navigate('/action/play');
  };

  const handleGoHome = () => navigate('/');

  return {
    handleAgainAnswerToQuestion,
    handleGoHome,
  };
};
