
import styled, { css } from 'styled-components/native';
import { EdgeInsets, SafeAreaView } from 'react-native-safe-area-context';

type ContentProps = {
  insets: EdgeInsets;
}

export const Container = styled(SafeAreaView)`
  background: ${({ theme }) => theme.colors.blueLightest};
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const InputArea = styled.View`
  margin-top: 20px;
`;

export const Content = styled.View<ContentProps>`
  padding: 20px 0px;
  ${({ insets, theme }) => css`
    height: ${theme.screenSize.height - insets.top - insets.bottom - 160}px;
  `}
`;

export const ButtonsArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;


export const ButtonsRow = styled.View`
 flex-direction: row;
  gap: 10px;
`;




