import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import getValitationErrors from '../../utils/getValitationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

interface SignInFormProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormProps) => {
      try {
        formRef.current?.setErrors({});
        // console.log(formRef);

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Enter a valid email'),
          password: Yup.string().required('Password is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValitationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <S.Container>
      <S.Content>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input placeholder="Email" icon={FiMail} name="email" type="text" />
          <Input
            placeholder="Password"
            icon={FiLock}
            name="password"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <a href="/">
          <FiLogIn size={13} />
          <span>New account</span>
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
