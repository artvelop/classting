import React from 'react';
import styled from '@emotion/styled';
import 'keen-slider/keen-slider.min.css';
import { useQuestionItemSlider } from './QuestionItemSlider.hook';
import { QuestionItem } from './QuestionItem';

//TestCase
//1. pc환경과 모바일환경에서 ui가 자연스럽게 나타나는지 확인
//2. 슬라이더가 드래그 했을 때 넘아가지 않는지 확인
//3. 마지막 슬라이더에서 result페이지로 올바르게 넘어가는지 확인

export const QuestionItemSlider = () => {
  const { questionItemList, handleNextStep, slideRef } =
    useQuestionItemSlider();

  return (
    <Container>
      <div ref={slideRef} className="keen-slider">
        {questionItemList.map((item, index) => (
          <SliderWrapper key={item.id} className="keen-slider__slide">
            <QuestionItem
              item={item}
              sequence={index + 1}
              onClickNextStep={handleNextStep}
            />
          </SliderWrapper>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100%;
  max-width: 100%;
`;
const SliderWrapper = styled.div``;
