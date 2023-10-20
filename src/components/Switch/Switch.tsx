import * as S from './Switch.styles';
import theme from '../../theme/global'
import { SwitchProps } from 'react-native';
interface SwitchComponentProps extends SwitchProps {
  label?: string;
  value: boolean;
}
const Switch = ({ label, value, ...props }: SwitchComponentProps) => {
  return <S.SwitchArea>
    <S.SwitchStyled value={value} thumbColor={value ? theme.colors.blueDark : theme.colors.blueLight } ios_backgroundColor={theme.colors.white} trackColor={{ false: theme.colors.white, true: theme.colors.white}} {...props} />
    <S.Label>{label}</S.Label>
  </S.SwitchArea>
};

export default Switch;

