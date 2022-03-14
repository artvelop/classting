import { api } from './sendApi';
import { Answer, QuestionItemType } from '@type/question.type';
import { v4 as generateUUID } from 'uuid';
import { AxiosResponse } from 'axios';
import { QuestionListResponse } from './question.api.type';
import { getRandomNumber } from '@utils/getRandomNumber';
import { difficultyToNumber } from '@utils/difficultyToNumber';

export const questionApi = {
  list: async (params: any) => {
    try {
      const {
        data: { results },
      }: AxiosResponse<QuestionListResponse> = await api.get(
        '/api.php',
        params,
      );

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

      return list;
    } catch (e) {
      alert('알 수 없는 오류로 실패하였습니다');
    }
  },
};
