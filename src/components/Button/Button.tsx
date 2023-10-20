import { useTheme } from 'styled-components/native';
import * as S from './Button.styles';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme/global';
import { TouchableOpacityProps } from 'react-native';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  buttonColor?: string;
  name?: keyof typeof Feather.glyphMap;
  iconSize?: number;
  showIcon: boolean;
}




const ButtonContent = ({ title, color=theme.colors.blueDark, buttonColor=theme.colors.white, name="plus", showIcon, iconSize=15, ...props }: ButtonProps) => {
  return <S.ButtonComponent color={buttonColor} activeOpacity={0.7} {...props}>
    {showIcon && <Feather name={name} color={color} size={iconSize} />}
    <S.TitleButton color={color}>{title}</S.TitleButton>
  </S.ButtonComponent>
};

export default ButtonContent;