import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessage, useToast } from '../../hooks/toast';

import * as S from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <S.Container>
      {messages.map((message) => (
        <S.Toast
          key={message.id}
          hasDescription={!!message.description}
          type={message.type}
        >
          <FiAlertCircle size={20} />
          <S.Content>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </S.Content>

          <S.CloseButton type="button" onClick={() => removeToast(message.id)}>
            <FiXCircle size={18} />
          </S.CloseButton>
        </S.Toast>
      ))}
    </S.Container>
  );
};

export default ToastContainer;
