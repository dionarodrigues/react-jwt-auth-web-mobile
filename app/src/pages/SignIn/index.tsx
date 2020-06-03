import React, { useCallback, useRef } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';
import getValitationErrors from '../../utils/getValitationErrors';

import * as S from './styles';

interface SignInFormProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  // const handleSignIn = useCallback((data: object) => {
  //   console.log(data);
  // }, []);

  const handleSignIn = useCallback(async (data: SignInFormProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Enter a valid email'),
        password: Yup.string().required('Password is required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValitationErrors(err);
        // console.log(errors);
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert(
        'Authentication Error',
        'An error occurred while trying to sign in. Check the entrances and try again.',
      );
    }
  }, []);

  return (
    <>
      {/* KeyboardAvoidingView makes the keyboard works correctly when opened */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        {/* ScrollView allows scrolling and close the keyboard when click out of input */}
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <S.Container>
            <View>
              <S.Title>Sign In</S.Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                name="email"
                icon="mail"
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Password"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Enter
              </Button>
            </Form>

            <S.ForgotPasswordButton onPress={() => {}}>
              <S.ForgotPasswordText>Forgot Password</S.ForgotPasswordText>
            </S.ForgotPasswordButton>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#0070ba" />
        <S.CreateAccountText>New account</S.CreateAccountText>
      </S.CreateAccountButton>
    </>
  );
};

export default SignIn;
