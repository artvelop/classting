import { Props } from './MessageModal';

export const useMessageModal = ({
  visible,
  setVisible,
  onClickConfirm,
}: Props) => {
  const handleClose = () => setVisible(false);
  const handleConfirmClick = async () => {
    if (onClickConfirm) {
      await onClickConfirm();
    }
    setVisible(false);
  };

  return {
    visible,
    handleClose,
    handleConfirmClick,
  };
};
