import '@testing-library/jest-dom';
import React, { useEffect, useState } from 'react';
import { render, screen } from '@testing-library/react';
import { GiArchiveRegister } from 'react-icons/gi';
import { themeColor } from '@constants/themeColor';
import { MessageModal, role } from './MessageModal';
import { renderHook } from '@testing-library/react-hooks';

describe('UI Render Check', () => {
  it('모달 확인 버튼을 눌렀을 때 모달컴포넌트가 사라지는지 테스트', async () => {
    const { result } = renderHook(() => {
      const [visible, setVisible] = useState(true);

      useEffect(() => {
        expect(screen.queryByRole(role.messageModal)).not.toBeInTheDocument();
      }, [visible]);

      return {
        visible,
        setVisible,
      };
    });

    render(
      <MessageModal
        visible={result.current.visible}
        setVisible={result.current.setVisible}
        icon={<GiArchiveRegister size="128" color={themeColor.gray} />}
        description="내용"
        onClickConfirm={() => {}}
        cancleButtonVisible={true}
      />,
    );

    screen.getByRole(role.confrimButton).click();
  });

  it('모달 취소 버튼을 눌렀을 때 모달컴포넌트가 사라지는지 테스트', async () => {
    const { result } = renderHook(() => {
      const [visible, setVisible] = useState(true);

      useEffect(() => {
        expect(screen.queryByRole(role.messageModal)).not.toBeInTheDocument();
      }, [visible]);

      return {
        visible,
        setVisible,
      };
    });

    render(
      <MessageModal
        visible={result.current.visible}
        setVisible={result.current.setVisible}
        icon={<GiArchiveRegister size="128" color={themeColor.gray} />}
        description="내용"
        onClickConfirm={() => {}}
        cancleButtonVisible={true}
      />,
    );

    screen.getByRole(role.cancelButton).click();
  });
});
