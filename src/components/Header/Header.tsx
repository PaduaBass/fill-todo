import * as S from './Header.styles';
import Logo from '../../../assets/logo.png';
import { Image, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import useThemeStore from '../../store/themeStore';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { toggleTheme, themeMode } = useThemeStore();
  const { i18n } = useTranslation();
  return (
    <S.Container>
      <S.OptionsArea />
      <Image source={Logo} />
      <S.OptionsArea>
        <TouchableOpacity
          onPress={async () => await i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')}
        >
          <FontAwesome name="language" size={25} color={themeMode.colors.blueDark} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme}>
          <Feather name="moon" size={25} color={themeMode.colors.blueDark} />
        </TouchableOpacity>
      </S.OptionsArea>
    </S.Container>
  );
};

export default Header;
