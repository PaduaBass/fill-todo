
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

export const List = styled.FlatList.attrs(({ numColumns }) => ({
  columnWrapperStyle: numColumns !== undefined && numColumns > 0 && { justifyContent: 'space-between' },
}))`

`;

export const Content = styled.View<ContentProps>`
  ${({ theme, insets }) => css`
    height: ${theme.screenSize.height - insets.top - insets.bottom - 30 - 80}px;
  `}
`;

export const HeaderList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

export const VisualizationLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.medium};
    color: ${theme.colors.blueDark};
  `}
`;

export const Footer = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

