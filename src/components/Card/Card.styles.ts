import styled, { css } from 'styled-components/native';

interface CardComponentProps {
  showGrid: boolean;
  isDone: boolean
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

