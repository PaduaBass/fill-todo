import styled, { css } from 'styled-components/native';
import theme from '../../theme/light';
import { type FieldError } from 'react-hook-form';

interface InputComponentProps {
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
    height: 40px;
    border: ${isError ? '1px solid ' + theme.colors.danger : '0px'}
  `}
`;

