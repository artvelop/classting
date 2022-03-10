import { Props } from './MessageModal';

export const useMessageModal = ({
  visible,
  setVisible,
  confirmOnClick,
}: Props) => {
  const handleClose = () => setVisible(false);
  const handleConfirmClick = async () => {
    if (confirmOnClick) {
      await confirmOnClick();
    }
    setVisible(false);
  };

  return {
    visible,
    handleClose,
    handleConfirmClick,
  };
};
