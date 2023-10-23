import styled, { css } from 'styled-components/native';

interface ColorProps {
  color?: string;
}


export const ButtonComponent = styled.TouchableOpacity<ColorProps>`
  height: 40px;
  width: 98px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ theme, color }) => css`
    background: ${color ?? theme.colors.white};
    border-radius: ${theme.borderRadius.small};
  `};
`;

export const TitleButtonArea = styled.Text<ColorProps>`
    padding-left: 2px;
`;

