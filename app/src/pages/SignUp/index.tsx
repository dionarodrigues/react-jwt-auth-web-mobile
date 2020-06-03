import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignUp: React.FC = () => {
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

            <Input name="name" icon="user" placeholder="Name" />
            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Password" />

            <Button onPress={() => {}}>Sign Up</Button>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.BackToSignButton onPress={() => {}}>
        <Icon name="arrow-left" size={20} color="#0070ba" />
        <S.BackToSignText>Do you have an account?</S.BackToSignText>
      </S.BackToSignButton>
    </>
  );
};

export default SignUp;
