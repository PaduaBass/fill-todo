import * as S from './Button.styles';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme/light';
import { type TouchableOpacityProps } from 'react-native';
import Typography from '../Typography/Typography';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  buttonColor?: string;
  name?: keyof typeof Feather.glyphMap;
  iconSize?: number;
  showIcon: boolean;
}

const ButtonContent = ({
  title,
  color = theme.colors.blueDark,
  buttonColor,
  name = 'plus',
  showIcon,
  iconSize = 15,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonComponent color={buttonColor} activeOpacity={0.7} {...props}>
      {showIcon && <Feather name={name} color={color} size={iconSize} />}
      <S.TitleButtonArea>
        <Typography color={color} text={title} fontFamily="Montserrat700" fontSize="normal" />
      </S.TitleButtonArea>
    </S.ButtonComponent>
  );
};

export default ButtonContent;
