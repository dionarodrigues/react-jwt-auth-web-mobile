import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Sign In</S.Title>

      <Input name="email" icon="mail" placeholder="Email" />
      <Input name="password" icon="lock" placeholder="Password" />

      <Button onPress={() => {}}>Enter</Button>
    </S.Container>
  );
};

export default SignIn;
