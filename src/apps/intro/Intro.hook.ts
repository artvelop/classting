import { useEffect, useState } from 'react';
import { questionApi } from '@apis/question.api';
import { useSetRecoilState } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { useNavigate } from 'react-router-dom';
import { playStartTime } from '@recoil/atom/playStartTime';
import moment from 'moment';

const MUSIC_CATEGORY_NUMBER = 12;

export const useIntro = () => {
  const [playModalVisible, setPlayModalVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const setQuestionList = useSetRecoilState(questionList);
  const setPlayStartTime = useSetRecoilState(playStartTime);

  const navigate = useNavigate();

  useEffect(() => {
    setQuestionList([]);
  }, []);

  const handleClickPlayQuiz = () => setPlayModalVisible(true);
  const handlePlayModalCofirm = async () => {
    setLoadingVisible(true);
    const list = await questionApi.list({
      amount: 10,
      category: MUSIC_CATEGORY_NUMBER,
      type: 'multiple',
    });

    if (list) {
      setQuestionList(list);
      navigate('/action/play');
    }

    setPlayStartTime(moment());
    setLoadingVisible(false);
  };

  return {
    playModalVisible,
    setPlayModalVisible,
    handleClickPlayQuiz,
    handlePlayModalCofirm,
    loadingVisible,
  };
};
