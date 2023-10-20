import React from 'react';

import * as S from './Card.styles';
import { TodoType } from '../../store/todoStore';
import { TouchableOpacityProps } from 'react-native';
import { differenceInDays } from 'date-fns';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme/light';
import { convertedPassedTime } from '../../utils/convertPassedTime';

interface CardProps extends TouchableOpacityProps {
  todo: TodoType;
  showGrid: boolean;
}

const Card = ({ todo, showGrid, ...props }: CardProps) => {
  const currentDate = new Date();
  return <S.Container isDone={todo.isDone} showGrid={showGrid} activeOpacity={0.7} {...props}>
    <S.DescriptionText>{todo.description}</S.DescriptionText>
    {todo.isDone ? (
      <Feather name="check" size={15} color={theme.colors.blueDark} />
    ) : (
      <S.TimeDescription passedTimeLimit={differenceInDays(currentDate, todo.createdAt) >= 1}>{convertedPassedTime(todo.createdAt)}</S.TimeDescription>
    )}
  </S.Container>;
}

export default Card;