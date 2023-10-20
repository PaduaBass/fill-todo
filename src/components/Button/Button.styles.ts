import styled, { css } from 'styled-components/native';

type ColorProps = {
  color: string;
}


export const ButtonComponent = styled.TouchableOpacity<ColorProps>`
  height: 40px;
  width: 98px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ theme, color }) => css`
    background: ${color};
    border-radius: ${theme.borderRadius.small};
  `};
`;

export const TitleButton = styled.Text<ColorProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.fontWeight.bold};
    color: ${color};
    padding-left: 2px;
  `};
`;

