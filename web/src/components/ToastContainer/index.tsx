import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import * as S from './styles';

const ToastContainer: React.FC = () => {
  return (
    <S.Container>
      <S.Toast hasDescription>
        <FiAlertCircle size={20} />
        <S.Content>
          <strong>Error</strong>
          <p>Message error</p>
        </S.Content>

        <S.CloseButton type="button">
          <FiXCircle size={18} />
        </S.CloseButton>
      </S.Toast>

      <S.Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <S.Content>
          <strong>Error</strong>
        </S.Content>

        <S.CloseButton type="button">
          <FiXCircle size={18} />
        </S.CloseButton>
      </S.Toast>

      <S.Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <S.Content>
          <strong>Error</strong>
          <p>Message error</p>
        </S.Content>

        <S.CloseButton type="button">
          <FiXCircle size={18} />
        </S.CloseButton>
      </S.Toast>
    </S.Container>
  );
};

export default ToastContainer;
