import { TextInputProps } from 'react-native';
import * as S from './InputCard.styles';
import { FieldError } from 'react-hook-form';

interface InputCardProps extends TextInputProps {
  isError?: FieldError | undefined;
}

const InputCard = ({ isError = undefined, ...props}: InputCardProps) => {
  
  return <>
    <S.InputComponent isError={isError} {...props} />
    {isError && isError.message && <S.LabelError>{isError.message}</S.LabelError>}
  </>
};

export default InputCard;