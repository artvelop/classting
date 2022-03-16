import { useEffect, useState } from 'react';
import { questionApi } from '@apis/question.api';
import { useSetRecoilState } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { useNavigate } from 'react-router-dom';
import { usePlayReset } from '@hooks/usePlayReset';

const MUSIC_CATEGORY_NUMBER = 12;
const TOTAL_QUESTION_COUNT = 10;

export const useIntro = () => {
  const [playModalVisible, setPlayModalVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const setQuestionList = useSetRecoilState(questionList);
  const { resetPlay } = usePlayReset();

  const navigate = useNavigate();

  useEffect(() => {
    setQuestionList([]);
  }, []);

  const handleClickPlayQuiz = () => setPlayModalVisible(true);
  const handlePlayModalCofirm = async () => {
    setLoadingVisible(true);
    const list = await questionApi.list({
      amount: TOTAL_QUESTION_COUNT,
      category: MUSIC_CATEGORY_NUMBER,
      type: 'multiple',
    });

    if (list) {
      setQuestionList(list);
      navigate('/action/play');
    }

    resetPlay();
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
