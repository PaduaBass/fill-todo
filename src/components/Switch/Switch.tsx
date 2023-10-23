import * as S from './Switch.styles';
import theme from '../../theme/light';
import { type SwitchProps } from 'react-native';
import Typography from '../Typography/Typography';
import useThemeStore from '../../store/themeStore';
interface SwitchComponentProps extends SwitchProps {
  label?: string;
  value: boolean;
}
const Switch = ({ label, value, ...props }: SwitchComponentProps) => {
  const { themeMode } = useThemeStore();
  return (
    <S.SwitchArea>
      <S.SwitchStyled
        value={value}
        thumbColor={value ? theme.colors.blueDark : theme.colors.blueLight}
        ios_backgroundColor={theme.colors.white}
        trackColor={{ false: theme.colors.white, true: theme.colors.white }}
        {...props}
      />
      <Typography
        fontFamily="Montserrat700"
        fontSize="small"
        text={label ?? ''}
        color={themeMode.colors.blueDark}
      />
    </S.SwitchArea>
  );
};

export default Switch;
