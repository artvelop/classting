import React from 'react';
import styled from '@emotion/styled';
import 'keen-slider/keen-slider.min.css';
import { useQuestionItemSlider } from './QuestionItemSlider.hook';
import { QuestionItem } from './QuestionItem';

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
