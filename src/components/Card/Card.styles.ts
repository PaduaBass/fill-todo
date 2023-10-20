import styled from 'styled-components/native';
import { css } from 'styled-components/native';

type CardComponentProps = {
  showGrid: boolean;
  isDone: boolean
}

type TimeDescriptionProps = {
  passedTimeLimit: boolean;
}

export const Container = styled.TouchableOpacity<CardComponentProps>`
  ${({ theme, showGrid, isDone }) => css`
    background: ${isDone ? theme.colors.blueLight : theme.colors.white};
    padding: 10px;
    border-radius: ${theme.borderRadius.small};
    width: ${showGrid ? '49%' : '100%'};
    margin-bottom: 10px;
  `};
`;

export const DescriptionText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blueDark};
    font-family: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.normal};
  `}
`;

export const TimeDescription = styled.Text<TimeDescriptionProps>`
 ${({ theme, passedTimeLimit }) => css`
    color: ${passedTimeLimit ? theme.colors.danger : theme.colors.blueDark};
    font-family: ${theme.fontWeight.light};
    font-size: ${theme.fontSizes.small};
  `}
`;
