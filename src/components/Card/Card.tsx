import React from 'react';

import * as S from './Card.styles';
import { TodoType } from '../../store/todoStore';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme/global';

interface CardProps extends TouchableOpacityProps {
  todo: TodoType;
  showGrid: boolean;
}

const Card = ({ todo, showGrid, ...props }: CardProps) => {
  return <S.Container isDone={todo.isDone} showGrid={showGrid} activeOpacity={0.7} {...props}>
    <S.DescriptionText>{todo.description}</S.DescriptionText>
    {todo.isDone ? (
      <Feather name="check" size={15} color={theme.colors.blueDark} />
    ) : (
      <S.TimeDescription>in 2 hours</S.TimeDescription>
    )}
  </S.Container>;
}

export default Card;