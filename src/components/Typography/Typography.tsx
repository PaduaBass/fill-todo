import * as S from './Typography.styles';

interface TypographyProps {
  fontFamily?: 'Montserrat300' | 'Montserrat500' | 'Montserrat700';
  fontSize?: 'small' | 'normal' | 'large';
  fontWeight?: 'light' | 'medium' | 'bold';
  color: string;
  text: string;
}

const Typography = ({
  fontFamily = 'Montserrat500',
  fontSize = 'normal',
  fontWeight = 'medium',
  color,
  text,
}: TypographyProps) => {
  return (
    <S.Text fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {text}
    </S.Text>
  );
};

export default Typography;
