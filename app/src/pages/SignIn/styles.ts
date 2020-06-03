import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #0e0d11;
  font-family: 'Roboto-Regular';
  margin: 65px 0 25px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  color: #555;
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #0070ba;
  color: #0e0d11;
  background: #fff;
  border-top-width: 1px;
  border-color: #dfdfdf;
  width: 100%;

  /* Setting a dinamic space for iphones */
  padding: 16px 0 ${16 + getBottomSpace()}px;

  flex-direction: row;
  justify-content: center;
`;

export const CreateAccountText = styled.Text`
  color: #0070ba;
  font-size: 16px;
  font-family: 'Roboto-Medium';
  margin-left: 10px;
`;
