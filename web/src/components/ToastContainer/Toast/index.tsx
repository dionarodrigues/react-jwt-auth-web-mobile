import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import * as S from './styles';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  return (
    <S.Container hasDescription={!!message.description} type={message.type}>
      <FiAlertCircle size={20} />
      <S.Content>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </S.Content>

      <S.CloseButton type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </S.CloseButton>
    </S.Container>
  );
};

export default Toast;
