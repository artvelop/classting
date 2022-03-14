import { useEffect, useState } from 'react';
import { questionApi } from '@apis/question.api';
import { useSetRecoilState } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { useNavigate } from 'react-router-dom';

const MUSIC_CATEGORY_NUMBER = 12;

export const useIntro = () => {
  const [playModalVisible, setPlayModalVisible] = useState(false);
  const setQuestionList = useSetRecoilState(questionList);

  const navigate = useNavigate();

  useEffect(() => {
    setQuestionList([]);
  }, []);

  const handleClickPlayQuiz = () => setPlayModalVisible(true);
  const handlePlayModalCofirm = async () => {
    const list = await questionApi.list({
      amount: 10,
      category: MUSIC_CATEGORY_NUMBER,
      type: 'multiple',
    });

    if (list) {
      setQuestionList(list);
      navigate('/action/play');
    }
  };

  return {
    playModalVisible,
    setPlayModalVisible,
    handleClickPlayQuiz,
    handlePlayModalCofirm,
  };
};
