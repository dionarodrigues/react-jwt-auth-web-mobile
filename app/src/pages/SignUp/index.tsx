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
import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/Input';
import getValitationErrors from '../../utils/getValitationErrors';

import * as S from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  // const handleSignUp = useCallback((data: object) => {
  //   console.log(data);
  // }, []);

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
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

      console.log(data);

      await api.post('/users', data);

      console.log('posted');

      Alert.alert('Successful registration!', 'You can now login. 😍');

      navigation.goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValitationErrors(err);
        console.log(errors);
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert(
        'Registration Error',
        'An error occurred while trying to sign up. Check the entrances and try again.',
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
              <S.Title>Create an account</S.Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="name"
                icon="user"
                placeholder="Name"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
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
                textContentType="newPassword"
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
                Sign Up
              </Button>
            </Form>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.BackToSignButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#0070ba" />
        <S.BackToSignText>Do you have an account?</S.BackToSignText>
      </S.BackToSignButton>
    </>
  );
};

export default SignUp;
