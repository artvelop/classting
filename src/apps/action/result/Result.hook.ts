import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { userAnswerList } from '@recoil/atom/userAnswerList';
import { playStartTime } from '@recoil/atom/playStartTime';
import moment from 'moment';

export const useResult = () => {
  const navigate = useNavigate();
  const setQuestionList = useSetRecoilState(questionList);
  const setUserAnswerList = useSetRecoilState(userAnswerList);
  const setPlayStartTime = useSetRecoilState(playStartTime);

  const handleAgainAnswerToQuestion = () => {
    setUserAnswerList([]);
    setPlayStartTime(moment());

    navigate('/action/play');
  };

  const handleGoHome = () => {
    setUserAnswerList([]);
    setPlayStartTime(null);
    setQuestionList([]);

    navigate('/');
  };

  return {
    handleAgainAnswerToQuestion,
    handleGoHome,
  };
};
