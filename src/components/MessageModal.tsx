import React from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { useMessageModal } from './MessageModal.hook';
import styled from '@emotion/styled';
import { themeColor } from '@constants/themeColor';

export type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  icon: React.ReactChild;
  description: string;
  confirmOnClick?: () => void;
  cancleButtonVisible: boolean;
};

export const MessageModal = (props: Props) => {
  const { visible, handleClose, handleConfirmClick } = useMessageModal(props);

  return (
    <Modal open={visible} onClose={handleClose}>
      <Container>
        <IconWrapper>{props.icon}</IconWrapper>
        <DescriptionWrapper>
          <Description variant="h6" color={themeColor.gray} align="center">
            {props.description}
          </Description>
        </DescriptionWrapper>
        <ButtonWrapper>
          <ConfirmButton onClick={handleConfirmClick}>
            네 알겠습니다
          </ConfirmButton>
          {props.cancleButtonVisible && (
            <CancelButton onClick={handleClose}>다시 돌아갈래요</CancelButton>
          )}
        </ButtonWrapper>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: ${themeColor.white};
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const DescriptionWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled(Typography)`
  word-break: keep-all;
`;

const ConfirmButton = styled(Button)`
  background-color: ${themeColor.primary};
  color: ${themeColor.white};
  &.MuiButton-containedPrimary {
    background-color: ${themeColor.primary};
    color: ${themeColor.white};
  }
`;

const CancelButton = styled(Button)`
  background-color: ${themeColor.gray};
  color: ${themeColor.white};
  margin-top: 8px;
  &.MuiButton-containedPrimary {
    background-color: ${themeColor.gray};
    color: ${themeColor.white};
  }
`;
