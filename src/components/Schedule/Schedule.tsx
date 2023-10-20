
import React from 'react';
import * as S from './Schedule.styles';
import { FlatListProps, TouchableOpacity } from 'react-native';
import useTodoStore, { TodoType } from '../../store/todoStore';
import { Feather } from '@expo/vector-icons';
import useThemeStore from '../../store/themeStore';
import { useTranslation } from 'react-i18next';

interface ScheduleProps extends FlatListProps<unknown> {
  data: TodoType[];
};

const Schedule = ({ data, ...props }: ScheduleProps) => {
  const { themeMode } = useThemeStore();
  const { changeShowGrid, showGrid } = useTodoStore();
  const { t } = useTranslation();
  return <>
    <S.HeaderList>
        <S.VisualizationLabel>{t('viewBy')}</S.VisualizationLabel>
        <TouchableOpacity onPress={changeShowGrid}>
           <Feather color={themeMode.colors.blueDark} name={showGrid ? 'grid' : 'list'} size={20}/>
        </TouchableOpacity>
      </S.HeaderList>
    <S.List data={data} {...props}/>
  </>;
}

export default Schedule;