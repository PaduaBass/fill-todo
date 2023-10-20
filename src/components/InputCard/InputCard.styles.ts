import styled, { css } from 'styled-components/native';
import theme from '../../theme/global';
import { FieldError } from 'react-hook-form';

type InputComponentProps = {
  isError: FieldError | undefined;
}

export const InputComponent = styled.TextInput.attrs(() => ({
  placeholderTextColor: theme.colors.gray,
})) <InputComponentProps>`
  ${({ theme, isError }) => css`
    background: ${theme.colors.white};
    padding: 10px;
    border-radius: ${theme.borderRadius.small};
    color: ${theme.colors.gray};
    border: ${isError ? '1px solid ' + theme.colors.danger : '0px'}
  `}
`;

export const LabelError = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.light};
    color: ${theme.colors.danger};
    font-size: ${theme.fontSizes.small};
    margin-top: 2px;
  `};
`;
