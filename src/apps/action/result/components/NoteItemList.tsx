import React from 'react';
import styled from '@emotion/styled';
import { useNoteItemList } from './NoteItemList.hook';
import { NoteItem } from './NoteItem';

// TestCase
// 1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
// 2. 데이터가 NoteItem에 맞게 올바르게 매핑되었는지 확인
// 3. 새로고침 이후에도 데이터가 유지되는지 확인

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
