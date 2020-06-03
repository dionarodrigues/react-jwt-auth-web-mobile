import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Container {...rest}>
    <S.Label>{children}</S.Label>
  </S.Container>
);

export default Button;
