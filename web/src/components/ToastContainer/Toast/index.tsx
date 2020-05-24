import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import * as S from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message.id, removeToast]);

  return (
    <S.Container
      hasDescription={!!message.description}
      type={message.type}
      style={style}
    >
      {icons[message.type || 'info']}

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
