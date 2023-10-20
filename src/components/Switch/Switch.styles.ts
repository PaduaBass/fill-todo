import styled, { css } from 'styled-components/native';


export const SwitchArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SwitchStyled = styled.Switch`
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.bold};
    font-size: ${theme.fontSizes.small};
    padding-left: 5px;
  `};
`;