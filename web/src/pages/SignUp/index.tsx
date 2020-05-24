import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import getValitationErrors from '../../utils/getValitationErrors';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});
      // console.log(formRef);

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Enter a valid email'),
        password: Yup.string().min(6, '6 characters minimum'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);
      addToast({
        type: 'success',
        title: 'Successful registration!',
        description: 'You can now login. 😍',
      });
      history.push('/');
    } catch (err) {
      console.log(err);

      const errors = getValitationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <S.Container>
      <S.Content>
        <h1>Create an account</h1>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input placeholder="Name" icon={FiUser} name="name" type="text" />
          <Input placeholder="Email" icon={FiMail} name="email" type="text" />
          <Input
            placeholder="Password"
            icon={FiLock}
            name="password"
            type="password"
          />
          <Button type="submit">Sign Up</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft size={13} />
          <span>Do you have an account?</span>
        </Link>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
