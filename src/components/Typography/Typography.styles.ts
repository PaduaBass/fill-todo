import styled, { css } from 'styled-components/native';

interface TextProps {
  fontFamily: "Montserrat300" | "Montserrat500" | "Montserrat700";
  fontSize: "small" | "normal" | "large";
  fontWeight: "light" | "medium" | "bold",
  color: string;
}

export const Text = styled.Text<TextProps>`
  ${({ fontFamily, fontSize, fontWeight, color, theme }) => css`
    font-family: ${theme.fontFamily[fontFamily]};
    font-size: ${theme.fontSizes[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    color: ${color};
  `}
`;
