import { userAnswerList as userRecoilAnswerList } from '@recoil/atom/userAnswerList';
import { QuestionCommentary } from '@type/question.type';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export const useNoteItemList = () => {
  const [noteList, setNoteList] = useState<Array<QuestionCommentary>>([]);

  const userAnswerList = useRecoilValue(userRecoilAnswerList);

  useEffect(() => {
    noteAnswerListInit();
  }, []);

  const noteAnswerListInit = () => {
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
    noteAnswerListInit,
  };
};
