import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <h1>Sign In</h1>
        <form>
          <Input placeholder="Email" icon={FiMail} name="email" type="text" />
          <Input
            placeholder="Password"
            icon={FiLock}
            name="password"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </form>
        <a href="/">
          <FiLogIn size={13} />
          <span>New account</span>
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
