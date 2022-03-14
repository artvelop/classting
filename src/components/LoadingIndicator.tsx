import React from 'react';
import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import ReactLoading from 'react-loading';
import { themeColor } from '@constants/themeColor';

type Props = {
  visible: boolean;
};

export const LoadingIndicator = ({ visible }: Props) => {
  return (
    <Modal open={visible}>
      <Container>
        <ReactLoading
          type="spin"
          color={themeColor.white}
          width={40}
          height={40}
        />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
