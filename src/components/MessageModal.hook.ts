import { Props } from './MessageModal';

export const useMessageModal = ({ visible, setVisible }: Props) => {
  const handleClose = () => setVisible(false);

  return {
    visible,
    handleClose,
  };
};
