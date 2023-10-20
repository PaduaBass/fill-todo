
import styled from 'styled-components/native';
import { EdgeInsets, SafeAreaView } from 'react-native-safe-area-context';

type ContentProps = {
  insents: EdgeInsets;
}

export const Container = styled(SafeAreaView)`
  background: ${({ theme }) => theme.colors.blueLightest};
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const Content = styled.View<ContentProps>`
  padding: 20px 0px;
`;

export const ButtonsArea = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Footer = styled.KeyboardAvoidingView`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;




