import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

type QuestionCommentary = {
  questionId: string;
  question: string;
  answer: string;
};

export const useNoteItemList = () => {
  const [noteList, setNoteList] = useState<Array<QuestionCommentary>>([]);

  const userAnswerList = useRecoilValue(userRecoilAnswerList);

  useEffect(() => {
    noteAnswerInit();
  }, []);

  const noteAnswerInit = () => {
    const list = userAnswerList
      .filter(({ userAnswer }) => !userAnswer.correctStatus)
      .map(({ questionId, question, correctAnswer }) => ({
        questionId,
        question,
        answer: correctAnswer.content,
      }));

    setNoteList(list);
  };

  return {
    noteList,
  };
};
