import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import * as S from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const InputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        InputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        InputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
      <S.Icon name={icon} size={20} color="#666360" />
      <S.TextInput
        ref={InputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#aaa"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
