import { type TextInputProps } from 'react-native';
import * as S from './InputCard.styles';
import { type FieldError } from 'react-hook-form';
import Typography from '../Typography/Typography';
import useThemeStore from '../../store/themeStore';

interface InputCardProps extends TextInputProps {
  isError?: FieldError | undefined;
}

const InputCard = ({ isError = undefined, ...props }: InputCardProps) => {
  const { themeMode } = useThemeStore();
  return (
    <>
      <S.InputComponent isError={isError} {...props} />
      {isError?.message && (
        <Typography text={isError.message} fontSize="small" color={themeMode.colors.danger} />
      )}
    </>
  );
};

export default InputCard;
