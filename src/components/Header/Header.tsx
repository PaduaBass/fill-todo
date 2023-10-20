import * as S from './Header.styles';
import Logo from '../../../assets/logo.png';
import { Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import useThemeStore from '../../store/themeStore';

const Header = () => {
  const { toggleTheme, themeMode } = useThemeStore();
  return (
    <S.Container>
      <S.OptionsArea />
        <Image source={Logo} />
      <S.OptionsArea>
        <TouchableOpacity onPress={toggleTheme}>
          <Feather name="moon" size={25} color={themeMode.colors.blueDark} />
        </TouchableOpacity>
      </S.OptionsArea>
    </S.Container>
  )
};

export default Header;