import React from 'react';
import styled from '@emotion/styled';
import { useNoteItemList } from './NoteItemList.hook';
import { NoteItem } from './NoteItem';

export const NoteItemList = () => {
  const { noteList } = useNoteItemList();

  return (
    <Container>
      {noteList.map(({ questionId, question, answer }) => (
        <NoteItem key={questionId} question={question} answer={answer} />
      ))}
    </Container>
  );
};

const Container = styled.div``;
