import * as S from './Card.styles';
import { type TodoType } from '../../store/todoStore';
import { type TouchableOpacityProps } from 'react-native';
import { differenceInDays } from 'date-fns';
import { Feather } from '@expo/vector-icons';
import { useConvertedPassedTime } from '../../utils/convertPassedTime';
import Typography from '../Typography/Typography';
import useThemeStore from '../../store/themeStore';

interface CardProps extends TouchableOpacityProps {
  todo: TodoType;
  showGrid: boolean;
}

const Card = ({ todo, showGrid, ...props }: CardProps) => {
  const { themeMode } = useThemeStore();
  const currentDate = new Date();
  const textDescription = useConvertedPassedTime(new Date(todo.createdAt));
  return (
    <S.Container isDone={todo.isDone} showGrid={showGrid} activeOpacity={0.7} {...props}>
      <Typography color={themeMode.colors.blueDark} text={todo.description} />
      {todo.isDone ? (
        <Feather name="check" size={15} color={themeMode.colors.blueDark} />
      ) : (
        <Typography
          text={textDescription ?? ''}
          fontSize="small"
          fontFamily="Montserrat300"
          color={
            differenceInDays(currentDate, new Date(todo.createdAt)) >= 1
              ? themeMode.colors.danger
              : themeMode.colors.blueDark
          }
        />
      )}
    </S.Container>
  );
};

export default Card;
