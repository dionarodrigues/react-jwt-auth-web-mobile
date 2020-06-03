import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #0070ba;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  font-size: 18px;
  color: #fff;
`;
