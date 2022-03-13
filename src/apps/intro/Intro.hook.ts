import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { v4 as generateUUID } from 'uuid';
import { questionApi } from '@apis/question.api';
import { Answer, QuestionItemType } from '@type/question.type';
import { getRandomNumber } from '@src/utils/getRandomNumber';
import { useSetRecoilState } from 'recoil';
import { questionList } from '@recoil/atom/questionList';
import { useNavigate } from 'react-router-dom';

const MUSIC_CATEGORY = 12;

type QuestionListResponse = {
  response_code: number;
  results: Array<{
    category: string;
    correct_answer: string;
    difficulty: 'easy' | 'medium' | 'hard';
    question: string;
    incorrect_answers: Array<string>;
  }>;
};

export const useIntro = () => {
  const [playModalVisible, setPlayModalVisible] = useState(false);
  const setQuestionList = useSetRecoilState(questionList);

  const navigate = useNavigate();

  useEffect(() => {
    setQuestionList([]);
  }, []);

  const difficultyToNumber = (input: 'easy' | 'medium' | 'hard') => {
    switch (input) {
      case 'easy':
        return 1;
      case 'medium':
        return 2;
      case 'hard':
        return 3;
    }
  };

  const handleClickPlayQuiz = () => setPlayModalVisible(true);
  const handlePlayModalCofirm = async () => {
    try {
      const {
        data: { results },
      }: AxiosResponse<QuestionListResponse> = await questionApi.list({
        amount: 10,
        category: MUSIC_CATEGORY,
        type: 'multiple',
      });

      const list: Array<QuestionItemType> = results.map(
        ({ correct_answer, difficulty, question, incorrect_answers }) => {
          const correctAnswer: Answer = {
            id: generateUUID(),
            content: correct_answer,
            correctStatus: true,
          };

          const answerList: Array<Answer> = incorrect_answers.map(
            (content) => ({
              id: generateUUID(),
              content,
              correctStatus: false,
            }),
          );

          answerList.splice(getRandomNumber(0, 3), 0, correctAnswer);

          return {
            id: generateUUID(),
            difficulty: difficultyToNumber(difficulty),
            question: question,
            answerList,
          };
        },
      );

      setQuestionList(list);
      navigate('/action/play');
    } catch (e) {
      alert('알 수 없는 오류로 실패하였습니다');
    }
  };

  return {
    playModalVisible,
    setPlayModalVisible,
    handleClickPlayQuiz,
    handlePlayModalCofirm,
  };
};
